import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtCountdown } from "@hitler/components";
import { ElCountdown } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElCountdown
    }
  }
};

/** HtCountdown */
const COUNTDOWN_PROPS = [
  {
    label: "title",
    value: "标题"
  },
  {
    label: "format",
    value: "HH:mm:ss"
  },
  {
    label: "prefix",
    value: "倒计时前缀"
  },
  {
    label: "suffix",
    value: "倒计时后缀"
  }
];

describe.each(COUNTDOWN_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtCountdown`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtCountdown, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elCountdown = wrapper.findComponent(ElCountdown);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elCountdown.props() as any)[prop.label]).toBe(testValue);
  });
});

const COUNTDOWN_EMITS = ["change", "finish"];

describe.each(COUNTDOWN_EMITS)("%s event", event => {
  it(`should emit ${event} when HtCountdown triggers it`, async () => {
    const wrapper = mount(HtCountdown, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElCountdown).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});

describe("HtCountdown 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtCountdown, {
      slots: {
        title: "<span>自定义默认内容</span>",
        prefix: "<span>自定义前缀内容</span>",
        suffix: "<span>自定义后缀内容</span>"
      },
      ...defaultOptions
    });

    expect(wrapper.find("span").exists()).toBe(true);
  });
});
