import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import { HtAutocomplete } from "@hitler/components";
import { ElAutocomplete } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElAutocomplete
    }
  }
};

const AUTOCOMPLETE_PROPS = [
  {
    label: "disabled",
    value: false
  }
];

const AUTOCOMPLETE_EMITS = ["clear", "change"];

describe.each(AUTOCOMPLETE_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtAutocomplete`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtAutocomplete, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });

    const elAutocomplete = wrapper.findComponent(ElAutocomplete);

    expect((elAutocomplete.props() as any)[prop.label]).toBe(testValue);
  });
});

describe.each(AUTOCOMPLETE_EMITS)("%s event", event => {
  it(`shoule emit ${event} when HtAutocomplete triggers it`, async () => {
    const wrapper = mount(HtAutocomplete, {
      ...defaultOptions
    });

    await wrapper.findComponent(ElAutocomplete).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});
