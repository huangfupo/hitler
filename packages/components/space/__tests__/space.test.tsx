import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtSpace } from "@hitler/components";
import { ElSpace } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElSpace
    }
  }
};

/** HtSpace */
const SPACE_PROPS = [
  {
    label: "size",
    value: "small"
  },
  {
    label: "direction",
    value: "horizontal"
  }
];

describe.each(SPACE_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtSpace`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtSpace, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elSpace = wrapper.findComponent(ElSpace);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elSpace.props() as any)[prop.label]).toBe(testValue);
  });
});
