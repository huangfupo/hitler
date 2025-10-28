import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtCalendar } from "@hitler/components";
import { ElCalendar } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElCalendar
    }
  }
};

/** HtCalendar */
describe("HtCalendar 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtCalendar, {
      slots: {
        header: "<span>成功提示的文案</span>"
      },
      ...defaultOptions
    });
    expect(wrapper.find("span").exists()).toBe(true);
  });
});
