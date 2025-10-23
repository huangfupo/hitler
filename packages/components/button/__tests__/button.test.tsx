import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtButton, HtButtonGroup } from "@hitler/components";
import { ElButton, ElButtonGroup } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElButton,
      ElButtonGroup
    }
  }
};

/** HtButton */
const BUTTON_PROPS = [
  {
    label: "size",
    value: "small"
  },
  {
    label: "type",
    value: "success"
  }
];

describe.each(BUTTON_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtButton`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtButton, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elButton = wrapper.findComponent(ElButton);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elButton.props() as any)[prop.label]).toBe(testValue);
  });
});

/** HtButtonGroup */
const BUTTONGROUP_PROPS = [
  {
    label: "type",
    value: "success"
  }
];

describe.each(BUTTONGROUP_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtButtonGroup`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtButtonGroup, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elButtonGroup = wrapper.findComponent(ElButtonGroup);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elButtonGroup.props() as any)[prop.label]).toBe(testValue);
  });
});

describe("HtButton 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtButton, {
      slots: {
        default: "文案描述"
      },
      ...defaultOptions
    });

    expect(wrapper.text()).toContain("文案描述");
  });
});

describe("HtButtonGroup 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtButtonGroup, {
      slots: {
        default: "文案描述"
      },
      ...defaultOptions
    });

    expect(wrapper.text()).toContain("文案描述");
  });
});
