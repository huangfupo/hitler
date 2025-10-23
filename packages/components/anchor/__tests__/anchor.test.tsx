import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import { HtAnchor } from "@hitler/components";
import { ElAnchor } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElAnchor
    }
  }
};

/** HtAnchor */
const ANCHOR_PROPS = [
  {
    label: "offset",
    value: 100
  }
];

const ANCHOR_EMITS = ["click", "change"];

describe.each(ANCHOR_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtAnchor`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtAnchor, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });

    const elAnchor = wrapper.findComponent(ElAnchor);

    expect((elAnchor.props() as any)[prop.label]).toBe(testValue);
  });
});

describe.each(ANCHOR_EMITS)("%s event", event => {
  it(`shoule emit ${event} when HtAnchor triggers it`, async () => {
    const wrapper = mount(HtAnchor, {
      ...defaultOptions
    });

    await wrapper.findComponent(ElAnchor).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});
