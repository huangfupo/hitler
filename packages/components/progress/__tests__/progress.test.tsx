import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtProgress } from "@hitler/components";
import { ElProgress } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElProgress
    }
  }
};

/** HtProgress */
const PROGRESS_PROPS = [
  {
    label: "width",
    value: 150
  },
  {
    label: "type",
    value: "circle"
  }
];

describe.each(PROGRESS_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtProgress`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtProgress, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elProgress = wrapper.findComponent(ElProgress);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elProgress.props() as any)[prop.label]).toBe(testValue);
  });
});
