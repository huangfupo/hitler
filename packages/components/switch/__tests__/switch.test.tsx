import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtSwitch } from "@hitler/components";
import { ElSwitch } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElSwitch
    }
  }
};

/** HtSwitch */
const SWITCH_PROPS = [
  {
    label: "width",
    value: 300
  },
  {
    label: "size",
    value: "small"
  },
  {
    label: "disabled",
    value: true
  }
];

describe.each(SWITCH_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtSwitch`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtSwitch, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elSwitch = wrapper.findComponent(ElSwitch);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elSwitch.props() as any)[prop.label]).toBe(testValue);
  });
});

const SWITCH_EMITS = ["change"];

describe.each(SWITCH_EMITS)("%s event", event => {
  it(`should emit ${event} when HtSwitch triggers it`, async () => {
    const wrapper = mount(HtSwitch, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElSwitch).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});
