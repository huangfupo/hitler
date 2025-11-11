import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtTreeSelect } from "@hitler/components";
import { ElTreeSelect } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElTreeSelect
    }
  }
};

/** HtTreeSelect */
const TREE_SELECT_PROPS = [
  {
    label: "emptyText",
    value: "empty-text"
  },
  {
    label: "highlightCurrent",
    value: false
  },
  {
    label: "defaultExpandAll",
    value: true
  }
];

describe.each(TREE_SELECT_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtTreeSelect`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtTreeSelect, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elTreeSelect = wrapper.findComponent(ElTreeSelect);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elTreeSelect.props() as any)[prop.label]).toBe(testValue);
  });
});

const TREE_SELECT_EMITS = ["node-click"];

describe.each(TREE_SELECT_EMITS)("%s event", event => {
  it(`should emit ${event} when HtTreeSelect triggers it`, async () => {
    const wrapper = mount(HtTreeSelect, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElTreeSelect).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});
