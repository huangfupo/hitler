import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtImageViewer } from "@hitler/components";
import { ElImageViewer } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElImageViewer
    }
  }
};

/** HtImageViewer */
const IMAGE_VIEWER_PROPS = [
  {
    label: "zIndex",
    value: "1000"
  },
  {
    label: "teleported",
    value: false
  }
];

describe.each(IMAGE_VIEWER_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtImageViewer`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtImageViewer, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elImage = wrapper.findComponent(ElImageViewer);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elImage.props() as any)[prop.label]).toBe(testValue);
  });
});
