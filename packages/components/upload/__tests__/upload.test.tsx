import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtUpload } from "@hitler/components";
import { ElUpload } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElUpload
    }
  }
};

/** HtUpload */
const UPLOAD_PROPS = [
  {
    label: "limit",
    value: 3
  },
  {
    label: "listType",
    value: "text"
  },
  {
    label: "method",
    value: "post"
  }
];

describe.each(UPLOAD_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtUpload`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtUpload, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elUpload = wrapper.findComponent(ElUpload);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elUpload.props() as any)[prop.label]).toBe(testValue);
  });
});
