import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtRow } from "@hitler/components";
import { ElRow } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElRow
    }
  }
};

/** HtRow */
const ROW_PROPS = [
  {
    label: "gutter",
    value: 3
  },
  {
    label: "justify",
    value: "center"
  }
];

describe.each(ROW_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtRow`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtRow, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elRow = wrapper.findComponent(ElRow);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elRow.props() as any)[prop.label]).toBe(testValue);
  });
});
