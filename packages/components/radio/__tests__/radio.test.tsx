import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtRadio } from "@hitler/components";
import { ElRadio } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElRadio
    }
  }
};

/** HtRadio */
const RADIO_PROPS = [
  {
    label: "disabled",
    value: false
  },
  {
    label: "size",
    value: "large"
  }
];

describe.each(RADIO_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtRadio`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtRadio, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elRadio = wrapper.findComponent(ElRadio);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elRadio.props() as any)[prop.label]).toBe(testValue);
  });
});

const RADIO_EMITS = ["change"];

describe.each(RADIO_EMITS)("%s event", event => {
  it(`should emit ${event} when HtRadio triggers it`, async () => {
    const wrapper = mount(HtRadio, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElRadio).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});
