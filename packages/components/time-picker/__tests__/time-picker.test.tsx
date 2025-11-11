import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtTimePicker } from "@hitler/components";
import { ElTimePicker } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElTimePicker
    }
  }
};

/** HtTimePicker */
const TIME_PICKER_PROPS = [
  {
    label: "placeholder",
    value: "success"
  },
  {
    label: "disabled",
    value: false
  },
  {
    label: "clearable",
    value: true
  }
];

describe.each(TIME_PICKER_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtTimePicker`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtTimePicker, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elTimePicker = wrapper.findComponent(ElTimePicker);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elTimePicker.props() as any)[prop.label]).toBe(testValue);
  });
});

const TIME_PICKER_EMITS = ["change", "clear"];

describe.each(TIME_PICKER_EMITS)("%s event", event => {
  it(`should emit ${event} when HtTimePicker triggers it`, async () => {
    const wrapper = mount(HtTimePicker, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElTimePicker).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});
