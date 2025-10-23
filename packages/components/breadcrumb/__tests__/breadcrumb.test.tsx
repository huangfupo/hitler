import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtBreadcrumb, HtBreadcrumbItem } from "@hitler/components";
import { ElBreadcrumb, ElBreadcrumbItem } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElBreadcrumb,
      ElBreadcrumbItem
    }
  }
};

/** HtBreadcrumb */
const BREADCRUMB_PROPS = [
  {
    label: "separator",
    value: "/"
  }
];

describe.each(BREADCRUMB_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtBreadcrumb`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtBreadcrumb, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elBreadcrumb = wrapper.findComponent(ElBreadcrumb);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elBreadcrumb.props() as any)[prop.label]).toBe(testValue);
  });
});

/** HtBreadcrumbItem */
const BREADCRUMBITEM_PROPS = [
  {
    label: "replace",
    value: true
  }
];

describe.each(BREADCRUMBITEM_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtBreadcrumbItem`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtBreadcrumbItem, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elBreadcrumbItem = wrapper.findComponent(ElBreadcrumbItem);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elBreadcrumbItem.props() as any)[prop.label]).toBe(testValue);
  });
});

describe("HtBreadcrumbItem 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtBreadcrumbItem, {
      slots: {
        default: "文案描述"
      },
      ...defaultOptions
    });

    expect(wrapper.text()).toContain("文案描述");
  });
});
