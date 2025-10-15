import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import { ElAffix } from "element-plus";
import { HtAffix } from "@hitler/components";

const AFFIX_PROPS = [
  {
    label: "offset",
    value: 200
  },
  {
    label: "position",
    value: "top"
  },
  {
    label: "zIndex",
    value: 2000
  }
];

const ALERT_EMITS = ["change"];

const defaultOptions = {
  global: {
    components: {
      ElAffix
    }
  }
};

describe.each(AFFIX_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtAffix`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtAffix, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elAffix = wrapper.findComponent(ElAffix);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elAffix.props() as any)[prop.label]).toBe(testValue);
  });
});

describe.each(ALERT_EMITS)("%s event", event => {
  it(`should emit ${event} when HtAffix triggers it`, async () => {
    const wrapper = mount(HtAffix, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElAffix).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});
