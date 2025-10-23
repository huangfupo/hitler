import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import { HtAvatar } from "@hitler/components";
import { ElAvatar } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElAvatar
    }
  }
};

const AVATAR_PROPS = [
  {
    label: "size",
    value: 100
  }
];

const AVATAR_EMITS = ["error"];

describe.each(AVATAR_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtAvatar`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtAvatar, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });

    const elAvatar = wrapper.findComponent(ElAvatar);

    expect((elAvatar.props() as any)[prop.label]).toBe(testValue);
  });
});

describe.each(AVATAR_EMITS)("%s event", event => {
  it(`shoule emit ${event} when HtAvatar triggers it`, async () => {
    const wrapper = mount(HtAvatar, {
      ...defaultOptions
    });

    await wrapper.findComponent(ElAvatar).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});
