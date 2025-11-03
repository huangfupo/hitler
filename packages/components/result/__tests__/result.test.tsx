import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtResult } from "@hitler/components";
import { ElResult } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElResult
    }
  }
};

/** HtResult */
const RESULT_PROPS = [
  {
    label: "title",
    value: "title"
  },
  {
    label: "subTitle",
    value: "sub-title"
  }
];

describe.each(RESULT_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtResult`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtResult, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elResult = wrapper.findComponent(ElResult);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elResult.props() as any)[prop.label]).toBe(testValue);
  });
});

describe("HtResult 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtResult, {
      slots: {
        title: "<span>自定义默认内容</span>",
        "sub-title": "<span>自定义默认内容</span>",
        extra: "<span>自定义默认内容</span>"
      },
      ...defaultOptions
    });
    expect(wrapper.html()).toContain("自定义默认内容");
  });
});
