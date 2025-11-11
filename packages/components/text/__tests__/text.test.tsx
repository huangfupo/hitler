import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtText } from "@hitler/components";
import { ElText } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElText
    }
  }
};

/** HtText */
const TEXT_PROPS = [
  {
    label: "type",
    value: "success"
  },
  {
    label: "truncated",
    value: false
  },
  {
    label: "size",
    value: "large"
  }
];

describe.each(TEXT_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtText`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtText, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elText = wrapper.findComponent(ElText);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elText.props() as any)[prop.label]).toBe(testValue);
  });
});
