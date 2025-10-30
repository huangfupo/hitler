import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtIcon } from "@hitler/components";
import { ElIcon } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElIcon
    }
  }
};

/** HtIcon */
const ICON_PROPS = [
  {
    label: "color",
    value: "#000000"
  },
  {
    label: "size",
    value: 20
  }
];

describe.each(ICON_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtIcon`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtIcon, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elIcon = wrapper.findComponent(ElIcon);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elIcon.props() as any)[prop.label]).toBe(testValue);
  });
});

describe("HtIcon 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtIcon, {
      slots: {
        default: "<span>自定义默认内容</span>"
      },
      ...defaultOptions
    });
    expect(wrapper.html()).toContain("自定义默认内容");
  });
});
