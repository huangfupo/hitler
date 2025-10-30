import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtDrawer } from "@hitler/components";
import { ElDrawer } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElDrawer
    }
  }
};

/** HtDrawer */
const DRAWER_PROPS = [
  {
    label: "appendToBody",
    value: true
  },
  {
    label: "appendTo",
    value: "body"
  }
];

describe.each(DRAWER_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtDrawer`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtDrawer, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elDrawer = wrapper.findComponent(ElDrawer);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elDrawer.props() as any)[prop.label]).toBe(testValue);
  });
});

const DRAWER_EMITS = ["open", "close"];

describe.each(DRAWER_EMITS)("%s event", event => {
  it(`should emit ${event} when HtDrawer triggers it`, async () => {
    const wrapper = mount(HtDrawer, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElDrawer).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});

describe("HtDrawer 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtDrawer, {
      slots: {
        header: "<span>自定义头部内容</span>",
        footer: "<span>自定义底部内容</span>"
      },
      ...defaultOptions
    });
    expect(wrapper.html()).toContain("自定义头部内容");
    expect(wrapper.html()).toContain("自定义底部内容");
  });
});
