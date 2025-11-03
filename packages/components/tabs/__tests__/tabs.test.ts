import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtTabs } from "@hitler/components";
import { ElTabs } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElTabs
    }
  }
};

/** HtTabs */
const TABS_PROPS = [
  {
    label: "type",
    value: "card"
  },
  {
    label: "addable",
    value: false
  },
  {
    label: "closable",
    value: true
  }
];

describe.each(TABS_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtTabs`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtTabs, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elTabs = wrapper.findComponent(ElTabs);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elTabs.props() as any)[prop.label]).toBe(testValue);
  });
});
