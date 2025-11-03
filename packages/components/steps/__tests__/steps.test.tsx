import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtSteps } from "@hitler/components";
import { ElSteps } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElSteps
    }
  }
};

/** HtSteps */
const STEPS_PROPS = [
  {
    label: "active",
    value: 3
  },
  {
    label: "direction",
    value: "horizontal"
  },
  {
    label: "simple",
    value: true
  }
];

describe.each(STEPS_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtSteps`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtSteps, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elSteps = wrapper.findComponent(ElSteps);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elSteps.props() as any)[prop.label]).toBe(testValue);
  });
});
