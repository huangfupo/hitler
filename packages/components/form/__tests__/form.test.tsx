import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtForm, HtFormItem } from "@hitler/components";
import { ElForm, ElFormItem } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElForm,
      ElFormItem
    }
  }
};

/** HtForm */
const FORM_PROPS = [
  {
    label: "labelPosition",
    value: "right"
  },
  {
    label: "labelWidth",
    value: "120px"
  }
];

describe.each(FORM_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtForm`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtForm, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elForm = wrapper.findComponent(ElForm);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elForm.props() as any)[prop.label]).toBe(testValue);
  });
});

const FORM_EMITS = ["validate"];

describe.each(FORM_EMITS)("%s event", event => {
  it(`should emit ${event} when HtForm triggers it`, async () => {
    const wrapper = mount(HtForm, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElForm).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});

/** HtFormItem */
const FORM_ITEM_PROPS = [
  {
    label: "labelPosition",
    value: "right"
  },
  {
    label: "labelWidth",
    value: "120px"
  }
];

describe.each(FORM_ITEM_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtFormItem`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtFormItem, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elFormItem = wrapper.findComponent(ElFormItem);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elFormItem.props() as any)[prop.label]).toBe(testValue);
  });
});
