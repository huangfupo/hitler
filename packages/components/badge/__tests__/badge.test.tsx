import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import { HtBadge } from "@hitler/components";
import { ElBadge } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElBadge
    }
  }
};

const BADGE_PROPS = [
  {
    label: "max",
    value: 100
  }
];

describe.each(BADGE_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtBadge`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtBadge, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });

    const elBadge = wrapper.findComponent(ElBadge);

    expect((elBadge.props() as any)[prop.label]).toBe(testValue);
  });
});
