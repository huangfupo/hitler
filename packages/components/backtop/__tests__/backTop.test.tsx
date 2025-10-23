import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import { HtBacktop } from "@hitler/components";
import { ElBacktop } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElBacktop
    }
  }
};

const BACKTOP_PROPS = [
  {
    label: "visibilityHeight",
    value: 100
  }
];

const BACKTOP_EMITS = ["click"];

describe.each(BACKTOP_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtBacktop`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtBacktop, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });

    const elBacktop = wrapper.findComponent(ElBacktop);

    expect((elBacktop.props() as any)[prop.label]).toBe(testValue);
  });
});

describe.each(BACKTOP_EMITS)("%s event", event => {
  it(`shoule emit ${event} when HtBacktop triggers it`, async () => {
    const wrapper = mount(HtBacktop, {
      ...defaultOptions
    });

    await wrapper.findComponent(ElBacktop).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});
