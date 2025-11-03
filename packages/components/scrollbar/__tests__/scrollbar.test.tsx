import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtScrollbar } from "@hitler/components";
import { ElScrollbar } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElScrollbar
    }
  }
};

/** HtScrollbar */
const SCROLLBAR_PROPS = [
  {
    label: "height",
    value: 300
  },
  {
    label: "native",
    value: true
  }
];

describe.each(SCROLLBAR_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtScrollbar`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtScrollbar, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elScrollbar = wrapper.findComponent(ElScrollbar);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elScrollbar.props() as any)[prop.label]).toBe(testValue);
  });
});

const SCROLLBAR_EMITS = ["end-reached"];

describe.each(SCROLLBAR_EMITS)("%s event", event => {
  it(`should emit ${event} when HtScrollbar triggers it`, async () => {
    const wrapper = mount(HtScrollbar, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElScrollbar).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});

describe("HtScrollbar 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtScrollbar, {
      slots: {
        default: "<span>自定义默认内容</span>"
      },
      ...defaultOptions
    });
    expect(wrapper.html()).toContain("自定义默认内容");
  });
});
