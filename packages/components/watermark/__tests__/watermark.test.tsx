import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtWatermark } from "@hitler/components";
import { ElWatermark } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElWatermark
    }
  }
};

/** HtWatermark */
const WATERMARK_PROPS = [
  {
    label: "width",
    value: 300
  },
  {
    label: "height",
    value: 60
  },
  {
    label: "rotate",
    value: 50
  }
];

describe.each(WATERMARK_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtWatermark`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtWatermark, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elWatermark = wrapper.findComponent(ElWatermark);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elWatermark.props() as any)[prop.label]).toBe(testValue);
  });
});
