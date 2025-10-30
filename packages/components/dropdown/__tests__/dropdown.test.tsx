import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtDropdown } from "@hitler/components";
import { ElDropdown } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElDropdown
    }
  }
};

/** HtDropdown */
const DROPDOWN_PROPS = [
  {
    label: "type",
    value: "primary"
  },
  {
    label: "size",
    value: "large"
  }
];

describe.each(DROPDOWN_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtDropdown`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtDropdown, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elDropdown = wrapper.findComponent(ElDropdown);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elDropdown.props() as any)[prop.label]).toBe(testValue);
  });
});

const DROPDOWN_EMITS = ["click", "command"];

describe.each(DROPDOWN_EMITS)("%s event", event => {
  it(`should emit ${event} when HtDropdown triggers it`, async () => {
    const wrapper = mount(HtDropdown, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElDropdown).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});

describe("HtDropdown 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtDropdown, {
      slots: {
        default: "<span>下拉菜单内容</span>"
      },
      ...defaultOptions
    });
    expect(wrapper.html()).toContain("下拉菜单内容");
  });
});
