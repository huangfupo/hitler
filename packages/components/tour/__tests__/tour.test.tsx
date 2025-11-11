import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtTour } from "@hitler/components";
import { ElTour } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElTour
    }
  }
};

/** HtTour */
const TOUR_PROPS = [
  {
    label: "placement",
    value: "top"
  },
  {
    label: "showArrow",
    value: false
  },
  {
    label: "mask",
    value: true
  }
];

describe.each(TOUR_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtTour`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtTour, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elTour = wrapper.findComponent(ElTour);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elTour.props() as any)[prop.label]).toBe(testValue);
  });
});

const TOUR_EMITS = ["change", "close"];

describe.each(TOUR_EMITS)("%s event", event => {
  it(`should emit ${event} when HtTour triggers it`, async () => {
    const wrapper = mount(HtTour, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElTour).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});
