import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtTree } from "@hitler/components";
import { ElTree } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElTree
    }
  }
};

/** HtTree */
const TREE_PROPS = [
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

describe.each(TREE_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtTree`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtTree, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elTree = wrapper.findComponent(ElTree);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elTree.props() as any)[prop.label]).toBe(testValue);
  });
});

const TREE_EMITS = ["node-click"];

describe.each(TREE_EMITS)("%s event", event => {
  it(`should emit ${event} when HtTree triggers it`, async () => {
    const wrapper = mount(HtTree, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElTree).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});
