import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtSegmented } from "@hitler/components";
import { ElSegmented } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElSegmented
    }
  }
};

/** HtSegmented */
const SEGMENTED_PROPS = [
  {
    label: "size",
    value: "large"
  },
  {
    label: "block",
    value: true
  }
];

describe.each(SEGMENTED_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtSegmented`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtSegmented, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elSegmented = wrapper.findComponent(ElSegmented);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elSegmented.props() as any)[prop.label]).toBe(testValue);
  });
});

const SEGMENTED_EMITS = ["change"];

describe.each(SEGMENTED_EMITS)("%s event", event => {
  it(`should emit ${event} when HtSegmented triggers it`, async () => {
    const wrapper = mount(HtSegmented, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElSegmented).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});
