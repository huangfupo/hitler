import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtTransfer } from "@hitler/components";
import { ElTransfer } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElTransfer
    }
  }
};

/** HtTransfer */
const TRANSFER_PROPS = [
  {
    label: "filterPlaceholder",
    value: "filterPlaceholder"
  },
  {
    label: "filterable",
    value: false
  },
  {
    label: "validateEvent",
    value: true
  }
];

describe.each(TRANSFER_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtTransfer`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtTransfer, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elTransfer = wrapper.findComponent(ElTransfer);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elTransfer.props() as any)[prop.label]).toBe(testValue);
  });
});

const TRANSFER_EMITS = ["change"];

describe.each(TRANSFER_EMITS)("%s event", event => {
  it(`should emit ${event} when HtTransfer triggers it`, async () => {
    const wrapper = mount(HtTransfer, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElTransfer).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});
