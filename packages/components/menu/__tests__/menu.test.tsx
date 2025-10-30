import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtMenu } from "@hitler/components";
import { ElMenu } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElMenu
    }
  }
};

/** HtMenu */
const MENU_PROPS = [
  {
    label: "mode",
    value: "vertical"
  },
  {
    label: "collapse",
    value: false
  },
  {
    label: "router",
    value: false
  }
];

describe.each(MENU_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtMenu`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtMenu, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elMenu = wrapper.findComponent(ElMenu);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elMenu.props() as any)[prop.label]).toBe(testValue);
  });
});

const MENU_EMITS = ["select", "open", "close"];

describe.each(MENU_EMITS)("%s event", event => {
  it(`should emit ${event} when HtMenu triggers it`, async () => {
    const wrapper = mount(HtMenu, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElMenu).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});
