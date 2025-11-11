import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtTimeSelect } from "@hitler/components";
import { ElTimeSelect } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElTimeSelect
    }
  }
};

/** HtTimeSelect */
const TIME_SELECT_PROPS = [
  {
    label: "placeholder",
    value: "success"
  },
  {
    label: "disabled",
    value: false
  },
  {
    label: "clearable",
    value: true
  }
];

describe.each(TIME_SELECT_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtTimeSelect`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtTimeSelect, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elTimeSelect = wrapper.findComponent(ElTimeSelect);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elTimeSelect.props() as any)[prop.label]).toBe(testValue);
  });
});

const TIME_SELECT_EMITS = ["change", "clear"];

describe.each(TIME_SELECT_EMITS)("%s event", event => {
  it(`should emit ${event} when HtTimeSelect triggers it`, async () => {
    const wrapper = mount(HtTimeSelect, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElTimeSelect).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});
