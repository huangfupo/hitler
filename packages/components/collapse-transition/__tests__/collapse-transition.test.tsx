import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtCollapseTransition } from "@hitler/components";
import { ElCollapseTransition } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElCollapseTransition
    }
  }
};

/** HtCollapseTransition */
describe("HtCollapseTransition 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtCollapseTransition, {
      slots: {
        default: "自定义默认内容"
      },
      ...defaultOptions
    });

    expect(wrapper.text()).toContain("自定义默认内容");
  });
});
