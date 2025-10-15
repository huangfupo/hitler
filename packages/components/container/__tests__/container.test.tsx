import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtMain, HtAside, HtContainer, HtHeader, HtFooter } from "@hitler/components";
import { ElMain, ElAside, ElContainer, ElHeader, ElFooter } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElMain, // Registering the component globally
      ElAside,
      ElContainer,
      ElHeader,
      ElFooter
    }
  }
};

/** HtContainer */
const CONTAINER_PROPS = [
  {
    label: "direction",
    value: "horizontal"
  }
];

describe.each(CONTAINER_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtContainer`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtContainer, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elContainer = wrapper.findComponent(ElContainer);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elContainer.props() as any)[prop.label]).toBe(testValue);
  });
});

/** HtAside */
const ASIDE_PROPS = [
  {
    label: "width",
    value: "300px"
  }
];

describe.each(ASIDE_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtAside`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtAside, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elAside = wrapper.findComponent(ElAside);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elAside.props() as any)[prop.label]).toBe(testValue);
  });
});

/** HtHeader */
const HEADER_PROPS = [
  {
    label: "height",
    value: "300px"
  }
];

describe.each(HEADER_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtHeader`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtHeader, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elHeader = wrapper.findComponent(ElHeader);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elHeader.props() as any)[prop.label]).toBe(testValue);
  });
});

/** HtFooter */
const FOOTER_PROPS = [
  {
    label: "height",
    value: "300px"
  }
];

describe.each(FOOTER_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtFooter`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtFooter, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elFooter = wrapper.findComponent(ElFooter);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elFooter.props() as any)[prop.label]).toBe(testValue);
  });
});

describe("HtMain 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtMain, {
      slots: {
        default: "文案描述"
      },
      ...defaultOptions
    });

    expect(wrapper.text()).toContain("文案描述");
  });
});
