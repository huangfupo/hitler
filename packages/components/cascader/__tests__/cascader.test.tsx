import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtCascader } from "@hitler/components";
import { ElCascader } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElCascader
    }
  }
};

/** HtCascader */
const CASCADER_PROPS = [
  {
    label: "size",
    value: "large"
  },
  {
    label: "placeholder",
    value: "placeholder"
  },
  {
    label: "disabled",
    value: true
  }
];

const CASCADER_EMITS = ["change", "expandChange"];

describe.each(CASCADER_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtCascader`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtCascader, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elCascader = wrapper.findComponent(ElCascader);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elCascader.props() as any)[prop.label]).toBe(testValue);
  });
});

describe.each(CASCADER_EMITS)("%s event", event => {
  it(`should emit ${event} when HtCascader triggers it`, async () => {
    const wrapper = mount(HtCascader, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElCascader).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});

describe("HtCascader 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtCascader, {
      slots: {
        default: "<span>自定义默认内容</span>",
        header: "<span>下拉列表顶部的内容</span>",
        footer: "<span>下拉列表底部的内容</span>"
      },
      ...defaultOptions
    });

    expect(wrapper.find("span").exists()).toBe(true);
  });
});
