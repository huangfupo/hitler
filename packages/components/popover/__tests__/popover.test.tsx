import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtPopover } from "@hitler/components";
import { ElPopover } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElPopover
    }
  }
};

/** HtPopover */
const POPOVER_PROPS = [
  {
    label: "width",
    value: 150
  },
  {
    label: "title",
    value: "title"
  }
];

describe.each(POPOVER_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtPopover`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtPopover, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elPopover = wrapper.findComponent(ElPopover);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elPopover.props() as any)[prop.label]).toBe(testValue);
  });
});

const POPOVER_EMITS = ["before-enter"];

describe.each(POPOVER_EMITS)("%s event", event => {
  it(`should emit ${event} when HtPopover triggers it`, async () => {
    const wrapper = mount(HtPopover, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElPopover).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});
