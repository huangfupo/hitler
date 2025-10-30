import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtSelect } from "@hitler/components";
import { ElSelect } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElSelect
    }
  }
};

/** HtSelect */
const SELECT_PROPS = [
  {
    label: "size",
    value: "large"
  },
  {
    label: "multiple",
    value: false
  },
  {
    label: "disabled",
    value: false
  }
];

describe.each(SELECT_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtSelect`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtSelect, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elSelect = wrapper.findComponent(ElSelect);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elSelect.props() as any)[prop.label]).toBe(testValue);
  });
});

const SELECT_EMITS = ["clear", "change", "blur"];

describe.each(SELECT_EMITS)("%s event", event => {
  it(`should emit ${event} when HtSelect triggers it`, async () => {
    const wrapper = mount(HtSelect, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElSelect).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});
