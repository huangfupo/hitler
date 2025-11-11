import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtTag } from "@hitler/components";
import { ElTag } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElTag
    }
  }
};

/** HtTag */
const TAG_PROPS = [
  {
    label: "type",
    value: "success"
  },
  {
    label: "round",
    value: false
  },
  {
    label: "closable",
    value: true
  }
];

describe.each(TAG_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtTag`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtTag, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elTag = wrapper.findComponent(ElTag);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elTag.props() as any)[prop.label]).toBe(testValue);
  });
});

const TAG_EMITS = ["click", "close"];

describe.each(TAG_EMITS)("%s event", event => {
  it(`should emit ${event} when HtTag triggers it`, async () => {
    const wrapper = mount(HtTag, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElTag).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});
