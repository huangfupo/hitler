import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtTooltip } from "@hitler/components";
import { ElTooltip } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElTooltip
    }
  }
};

/** HtTooltip */
const TOOLTIP_PROPS = [
  {
    label: "effect",
    value: "light"
  },
  {
    label: "disabled",
    value: false
  },
  {
    label: "enterable",
    value: true
  }
];

describe.each(TOOLTIP_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtTooltip`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtTooltip, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elTooltip = wrapper.findComponent(ElTooltip);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elTooltip.props() as any)[prop.label]).toBe(testValue);
  });
});
