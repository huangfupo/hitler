import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtImage } from "@hitler/components";
import { ElImage } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElImage
    }
  }
};

/** HtImage */
const IMAGE_PROPS = [
  {
    label: "loading",
    value: "lazy"
  },
  {
    label: "fit",
    value: "contain"
  }
];

describe.each(IMAGE_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtImage`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtImage, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elImage = wrapper.findComponent(ElImage);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elImage.props() as any)[prop.label]).toBe(testValue);
  });
});

describe("HtImage 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtImage, {
      slots: {
        placeholder: "<span>自定义默认内容</span>"
      },
      ...defaultOptions
    });
    expect(wrapper.html()).toContain("自定义默认内容");
  });
});
