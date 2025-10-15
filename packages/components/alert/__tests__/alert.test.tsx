import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtAlert } from "@hitler/components";
import { ElAlert } from "element-plus";

// 动态获取 ElAlert 的 Props 列表
// 实际需包含全部属性
const ALERT_PROPS = [
  {
    label: "title",
    value: "Alert 标题"
  },
  {
    label: "type",
    value: "success"
  },
  {
    label: "description",
    value: "description"
  },
  {
    label: "closable",
    value: true
  },
  {
    label: "center",
    value: false
  },
  {
    label: "closeText",
    value: "close-text"
  },
  {
    label: "showIcon",
    value: false
  },
  {
    label: "effect",
    value: "dark"
  },
  {
    label: "showAfter",
    value: 100
  },
  {
    label: "hideAfter",
    value: 100
  },
  {
    label: "autoClose",
    value: 200
  }
];

const ALERT_EMITS = ["open", "close"];

const defaultOptions = {
  global: {
    components: {
      ElAlert // Registering the component globally
    }
  }
};

describe.each(ALERT_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtAlert`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtAlert, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elAlert = wrapper.findComponent(ElAlert);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elAlert.props() as any)[prop.label]).toBe(testValue);
  });
});

describe.each(ALERT_EMITS)("%s event", event => {
  it(`should emit ${event} when HtAlert triggers it`, async () => {
    const wrapper = mount(HtAlert, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElAlert).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});

describe("HtAlert 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtAlert, {
      slots: {
        default: "成功提示的文案描述",
        title: "<span>成功提示的文案</span>",
        icon: "<el-icon><Plus /></el-icon>"
      },
      ...defaultOptions
    });

    expect(wrapper.text()).toContain("成功提示的文案描述");
    expect(wrapper.find("span").exists()).toBe(true);
  });
});
