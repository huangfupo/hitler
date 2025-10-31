import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtPagination } from "@hitler/components";
import { ElPagination } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElPagination
    }
  }
};

/** HtPagination */
const PAGINATION_PROPS = [
  {
    label: "total",
    value: 20
  },
  {
    label: "size",
    value: "large"
  }
];

describe.each(PAGINATION_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtPagination`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtPagination, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elPagination = wrapper.findComponent(ElPagination);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elPagination.props() as any)[prop.label]).toBe(testValue);
  });
});

const PAGINATION_EMITS = ["change"];

describe.each(PAGINATION_EMITS)("%s event", event => {
  it(`should emit ${event} when HtPagination triggers it`, async () => {
    const wrapper = mount(HtPagination, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElPagination).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});
