import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtDivider } from "@hitler/components";
import { ElDivider } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElDivider
    }
  }
};

/** HtDivider */
const DIVIDER_PROPS = [
  {
    label: "direction",
    value: "horizontal"
  },
  {
    label: "borderStyle",
    value: "hidden"
  },
  {
    label: "contentPosition",
    value: "标题文本，显示在左上方"
  }
];

describe.each(DIVIDER_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtDivider`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtDivider, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elDivider = wrapper.findComponent(ElDivider);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elDivider.props() as any)[prop.label]).toBe(testValue);
  });
});

describe("HtDivider 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtDivider, {
      slots: {
        default: "<span>设置分割线文案的位置</span>"
      },
      ...defaultOptions
    });

    expect(wrapper.find("span").exists()).toBe(true);
  });
});
