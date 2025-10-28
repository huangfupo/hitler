import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtCascaderPanel } from "@hitler/components";
import { ElCascaderPanel } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElCascaderPanel
    }
  }
};

/** HtCascaderPanel */
const CASCADERPANEL_EMITS = ["change"];

describe.each(CASCADERPANEL_EMITS)("%s event", event => {
  it(`should emit ${event} when HtCascaderPanel triggers it`, async () => {
    const wrapper = mount(HtCascaderPanel, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElCascaderPanel).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});

describe("HtCascaderPanel 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtCascaderPanel, {
      slots: {
        default: "<span>自定义默认内容</span>",
        empty: "<span>-</span>"
      },
      ...defaultOptions
    });
    expect(wrapper.find("span").exists()).toBe(true);
  });
});
