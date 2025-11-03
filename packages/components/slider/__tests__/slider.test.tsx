import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtSlider } from "@hitler/components";
import { ElSlider } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElSlider
    }
  }
};

/** HtSlider */
const SLIDER_PROPS = [
  {
    label: "min",
    value: 0
  },
  {
    label: "max",
    value: 300
  },
  {
    label: "disabled",
    value: true
  }
];

describe.each(SLIDER_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtSlider`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtSlider, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elSlider = wrapper.findComponent(ElSlider);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elSlider.props() as any)[prop.label]).toBe(testValue);
  });
});

const SLIDER_EMITS = ["change", "input"];

describe.each(SLIDER_EMITS)("%s event", event => {
  it(`should emit ${event} when HtSlider triggers it`, async () => {
    const wrapper = mount(HtSlider, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElSlider).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});
