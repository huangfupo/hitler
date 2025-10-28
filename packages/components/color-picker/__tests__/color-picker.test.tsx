import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtColorPicker } from "@hitler/components";
import { ElColorPicker } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElColorPicker
    }
  }
};

/** HtColorPicker */
const COLORPICKER_PROPS = [
  {
    label: "disabled",
    value: false
  },
  {
    label: "size",
    value: "large"
  },
  {
    label: "colorFormat",
    value: "hex"
  }
];

describe.each(COLORPICKER_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtColorPicker`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtColorPicker, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elColorPicker = wrapper.findComponent(ElColorPicker);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elColorPicker.props() as any)[prop.label]).toBe(testValue);
  });
});

const COLORPICKER_EMITS = ["change"];

describe.each(COLORPICKER_EMITS)("%s event", event => {
  it(`should emit ${event} when HtColorPicker triggers it`, async () => {
    const wrapper = mount(HtColorPicker, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElColorPicker).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});
