import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtLink } from "@hitler/components";
import { ElLink } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElLink
    }
  }
};

/** HtLink */
const LINK_PROPS = [
  {
    label: "underline",
    value: "hover"
  },
  {
    label: "type",
    value: "warning"
  }
];

describe.each(LINK_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtLink`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtLink, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elLink = wrapper.findComponent(ElLink);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elLink.props() as any)[prop.label]).toBe(testValue);
  });
});

describe("HtLink 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtLink, {
      slots: {
        default: "<span>自定义默认内容</span>"
      },
      ...defaultOptions
    });
    expect(wrapper.html()).toContain("自定义默认内容");
  });
});
