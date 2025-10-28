import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtCol } from "@hitler/components";
import { ElCol } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElCol
    }
  }
};

/** HtCol */
const COL_PROPS = [
  {
    label: "span",
    value: 12
  },
  {
    label: "offset",
    value: 2
  }
];

describe.each(COL_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtCol`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtCol, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elCol = wrapper.findComponent(ElCol);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elCol.props() as any)[prop.label]).toBe(testValue);
  });
});

describe("HtCol 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtCol, {
      slots: {
        default: "自定义默认内容"
      },
      ...defaultOptions
    });

    expect(wrapper.text()).toContain("自定义默认内容");
  });
});
