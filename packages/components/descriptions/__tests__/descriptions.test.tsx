import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtDescriptions } from "@hitler/components";
import { ElDescriptions } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElDescriptions
    }
  }
};

/** HtDescriptions */
const DESCRIPTIONS_PROPS = [
  {
    label: "direction",
    value: "horizontal"
  },
  {
    label: "size",
    value: "default"
  },
  {
    label: "title",
    value: "标题文本，显示在左上方"
  },
  {
    label: "extra",
    value: "操作区文本，显示在右上方"
  },
  {
    label: "labelWidth",
    value: "120px"
  }
];

describe.each(DESCRIPTIONS_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtDescriptions`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtDescriptions, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elDescriptions = wrapper.findComponent(ElDescriptions);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elDescriptions.props() as any)[prop.label]).toBe(testValue);
  });
});

describe("HtDescriptions 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtDescriptions, {
      slots: {
        title: "<span>自定义标题，显示在左上方</span>",
        extra: "<span>自定义操作区，显示在右上方</span>"
      },
      ...defaultOptions
    });

    expect(wrapper.find("span").exists()).toBe(true);
  });
});
