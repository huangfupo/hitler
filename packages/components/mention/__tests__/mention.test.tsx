import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtMention } from "@hitler/components";
import { ElMention } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElMention
    }
  }
};

/** HtMention */
const MENTION_PROPS = [
  {
    label: "offset",
    value: 10
  },
  {
    label: "prefix",
    value: "@"
  }
];

describe.each(MENTION_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtMention`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtMention, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elMention = wrapper.findComponent(ElMention);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elMention.props() as any)[prop.label]).toBe(testValue);
  });
});

const MENTION_EMITS = ["search", "select", "focus", "blur"];

describe.each(MENTION_EMITS)("%s event", event => {
  it(`should emit ${event} when HtMention triggers it`, async () => {
    const wrapper = mount(HtMention, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElMention).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});
