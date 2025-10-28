import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtCollapse } from "@hitler/components";
import { ElCollapse } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElCollapse
    }
  }
};

/** HtCollapse */
const COLLAPSE_PROPS = [
  {
    label: "accordion",
    value: false
  },
  {
    label: "expandIconPosition",
    value: "left"
  }
];

describe.each(COLLAPSE_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtCollapse`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtCollapse, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elCollapse = wrapper.findComponent(ElCollapse);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elCollapse.props() as any)[prop.label]).toBe(testValue);
  });
});

describe("HtCollapse 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtCollapse, {
      slots: {
        default: "自定义默认内容"
      },
      ...defaultOptions
    });

    expect(wrapper.text()).toContain("自定义默认内容");
  });
});
