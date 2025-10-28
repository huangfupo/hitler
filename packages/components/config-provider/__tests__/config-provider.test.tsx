import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtConfigProvider } from "@hitler/components";
import { ElConfigProvider } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElConfigProvider
    }
  }
};

/** HtConfigProvider */
const CONFIGPROVIDER_PROPS = [
  {
    label: "zIndex",
    value: 999
  },
  {
    label: "size",
    value: "large"
  }
];

describe.each(CONFIGPROVIDER_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtConfigProvider`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtConfigProvider, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elConfigProvider = wrapper.findComponent(ElConfigProvider);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elConfigProvider.props() as any)[prop.label]).toBe(testValue);
  });
});

describe("HtConfigProvider 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtConfigProvider, {
      slots: {
        default: "自定义默认内容"
      },
      ...defaultOptions
    });

    expect(wrapper.text()).toContain("自定义默认内容");
  });
});
