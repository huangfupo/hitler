import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtTable } from "@hitler/components";
import { ElTable } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElTable
    }
  }
};

/** HtTable */
const TABLE_PROPS = [
  {
    label: "size",
    value: "large"
  },
  {
    label: "height",
    value: 500
  },
  {
    label: "stripe",
    value: true
  }
];

describe.each(TABLE_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtTable`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtTable, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elTable = wrapper.findComponent(ElTable);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elTable.props() as any)[prop.label]).toBe(testValue);
  });
});

const TABLE_EMITS = ["select", "row-click"];

describe.each(TABLE_EMITS)("%s event", event => {
  it(`should emit ${event} when HtTable triggers it`, async () => {
    const wrapper = mount(HtTable, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElTable).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});
