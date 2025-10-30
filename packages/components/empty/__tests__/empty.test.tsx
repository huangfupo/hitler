import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtEmpty } from "@hitler/components";
import { ElEmpty } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElEmpty
    }
  }
};

/** HtEmpty */
const EMPTY_PROPS = [
  {
    label: "imageSize",
    value: 20
  },
  {
    label: "description",
    value: "description"
  }
];

describe.each(EMPTY_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtEmpty`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtEmpty, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elEmpty = wrapper.findComponent(ElEmpty);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elEmpty.props() as any)[prop.label]).toBe(testValue);
  });
});

describe("HtEmpty 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtEmpty, {
      slots: {
        default: "<span>空状态内容</span>",
        description: "<span>自定义描述内容</span>"
      },
      ...defaultOptions
    });
    expect(wrapper.html()).toContain("空状态内容");
  });
});
