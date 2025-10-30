import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtPageHeader } from "@hitler/components";
import { ElPageHeader } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElPageHeader
    }
  }
};

/** HtPageHeader */
const PAGE_HEADER_PROPS = [
  {
    label: "title",
    value: "title"
  },
  {
    label: "content",
    value: "content"
  }
];

describe.each(PAGE_HEADER_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtPageHeader`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtPageHeader, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elPageHeader = wrapper.findComponent(ElPageHeader);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elPageHeader.props() as any)[prop.label]).toBe(testValue);
  });
});

const PAGE_HEADER_EMITS = ["back"];

describe.each(PAGE_HEADER_EMITS)("%s event", event => {
  it(`should emit ${event} when HtPageHeader triggers it`, async () => {
    const wrapper = mount(HtPageHeader, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElPageHeader).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});

describe("HtPageHeader 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtPageHeader, {
      slots: {
        title: "<span>自定义默认内容</span>",
        content: "<span>自定义默认内容</span>",
        breadcrumb: "<span>自定义默认内容</span>",
        default: "<span>自定义默认内容</span>"
      },
      ...defaultOptions
    });
    expect(wrapper.html()).toContain("自定义默认内容");
  });
});
