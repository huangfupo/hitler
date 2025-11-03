import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtRate } from "@hitler/components";
import { ElRate } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElRate
    }
  }
};

/** HtRate */
const RATE_PROPS = [
  {
    label: "disabled",
    value: false
  },
  {
    label: "size",
    value: "large"
  }
];

describe.each(RATE_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtRate`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtRate, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elRate = wrapper.findComponent(ElRate);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elRate.props() as any)[prop.label]).toBe(testValue);
  });
});

const RATE_EMITS = ["change"];

describe.each(RATE_EMITS)("%s event", event => {
  it(`should emit ${event} when HtRate triggers it`, async () => {
    const wrapper = mount(HtRate, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElRate).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});
