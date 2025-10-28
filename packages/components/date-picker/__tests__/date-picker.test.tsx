import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtDatePicker } from "@hitler/components";
import { ElDatePicker } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElDatePicker
    }
  }
};

/** HtDatePicker */
const DATEPICKER_PROPS = [
  {
    label: "disabled",
    value: true
  },
  {
    label: "type",
    value: "month"
  }
];

const DATEPICKER_EMITS = ["change", "focus"];

describe.each(DATEPICKER_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtDatePicker`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtDatePicker, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elDatePicker = wrapper.findComponent(ElDatePicker);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elDatePicker.props() as any)[prop.label]).toBe(testValue);
  });
});

describe.each(DATEPICKER_EMITS)("%s event", event => {
  it(`should emit ${event} when HtDatePicker triggers it`, async () => {
    const wrapper = mount(HtDatePicker, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElDatePicker).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});
