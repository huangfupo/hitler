import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtCheckbox, HtCheckboxGroup, HtCheckboxButton } from "@hitler/components";
import { ElCheckbox, ElCheckboxGroup, ElCheckboxButton } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElCheckbox,
      ElCheckboxGroup,
      ElCheckboxButton
    }
  }
};

/** HtCheckbox */
const CHECKBOX_PROPS = [
  {
    label: "value",
    value: true
  },
  {
    label: "label",
    value: "success"
  }
];

const CHECKBOX_EMITS = ["change"];

describe.each(CHECKBOX_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtCheckbox`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtCheckbox, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elCheckbox = wrapper.findComponent(ElCheckbox);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elCheckbox.props() as any)[prop.label]).toBe(testValue);
  });
});

describe.each(CHECKBOX_EMITS)("%s event", event => {
  it(`should emit ${event} when HtCheckbox triggers it`, async () => {
    const wrapper = mount(HtCheckbox, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElCheckbox).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});

describe("HtCheckbox 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtCheckbox, {
      slots: {
        default: "自定义默认内容"
      },
      ...defaultOptions
    });

    expect(wrapper.text()).toContain("自定义默认内容");
  });
});

/** HtCheckboxGroup */
describe("HtCheckboxGroup 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtCheckboxGroup, {
      slots: {
        default: "自定义默认内容"
      },
      ...defaultOptions
    });

    expect(wrapper.text()).toContain("自定义默认内容");
  });
});

/** HtCheckboxButton */
const CHECKBOXBUTTON_PROPS = [
  {
    label: "value",
    value: true
  },
  {
    label: "label",
    value: "success"
  }
];

describe.each(CHECKBOXBUTTON_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtCheckboxButton`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtCheckboxButton, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elCheckboxButton = wrapper.findComponent(ElCheckboxButton);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elCheckboxButton.props() as any)[prop.label]).toBe(testValue);
  });
});

describe("HtCheckboxButton 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtCheckboxButton, {
      slots: {
        default: "自定义默认内容"
      },
      ...defaultOptions
    });

    expect(wrapper.text()).toContain("自定义默认内容");
  });
});
