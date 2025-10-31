import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtPopconfirm } from "@hitler/components";
import { ElPopconfirm } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElPopconfirm
    }
  }
};

/** HtPopconfirm */
const POPCONFIRM_PROPS = [
  {
    label: "width",
    value: 150
  },
  {
    label: "title",
    value: "title"
  }
];

describe.each(POPCONFIRM_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtPopconfirm`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtPopconfirm, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elPopconfirm = wrapper.findComponent(ElPopconfirm);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elPopconfirm.props() as any)[prop.label]).toBe(testValue);
  });
});

const POPCONFIRM_EMITS = ["confirm", "cancel"];

describe.each(POPCONFIRM_EMITS)("%s event", event => {
  it(`should emit ${event} when HtPopconfirm triggers it`, async () => {
    const wrapper = mount(HtPopconfirm, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElPopconfirm).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});
