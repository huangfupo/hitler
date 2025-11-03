import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtSkeleton } from "@hitler/components";
import { ElSkeleton } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElSkeleton
    }
  }
};

/** HtSkeleton */
const SKELETON_PROPS = [
  {
    label: "count",
    value: 6
  },
  {
    label: "animated",
    value: true
  }
];

describe.each(SKELETON_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtSkeleton`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtSkeleton, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elSkeleton = wrapper.findComponent(ElSkeleton);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elSkeleton.props() as any)[prop.label]).toBe(testValue);
  });
});
