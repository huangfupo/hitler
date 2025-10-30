import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtDialog } from "@hitler/components";
import { ElDialog } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElDialog
    }
  }
};

/** HtDialog */
const DIALOG_PROPS = [
  {
    label: "title",
    value: "标题"
  },
  {
    label: "width",
    value: "20%"
  }
];

describe.each(DIALOG_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtDialog`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtDialog, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elDialog = wrapper.findComponent(ElDialog);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elDialog.props() as any)[prop.label]).toBe(testValue);
  });
});

const DIALOG_EMITS = ["open", "close"];

describe.each(DIALOG_EMITS)("%s event", event => {
  it(`should emit ${event} when HtDialog triggers it`, async () => {
    const wrapper = mount(HtDialog, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElDialog).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});
