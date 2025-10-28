import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtCarousel } from "@hitler/components";
import { ElCarousel } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElCarousel
    }
  }
};

/** HtCarousel */
const CAROUSEL_PROPS = [
  {
    label: "trigger",
    value: "hover"
  },
  {
    label: "autoplay",
    value: true
  }
];

const CAROUSEL_EMITS = ["change"];

describe.each(CAROUSEL_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtCarousel`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtCarousel, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elCarousel = wrapper.findComponent(ElCarousel);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elCarousel.props() as any)[prop.label]).toBe(testValue);
  });
});

describe.each(CAROUSEL_EMITS)("%s event", event => {
  it(`should emit ${event} when HtCarousel triggers it`, async () => {
    const wrapper = mount(HtCarousel, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElCarousel).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});

describe("HtCarousel 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtCarousel, {
      slots: {
        default: "自定义默认内容"
      },
      ...defaultOptions
    });

    expect(wrapper.text()).toContain("自定义默认内容");
  });
});
