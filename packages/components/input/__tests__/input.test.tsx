import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtInput } from "@hitler/components";
import { ElInput } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElInput
    }
  }
};

/** HtInput */
const INPUT_PROPS = [
  {
    label: "type",
    value: "text"
  },
  {
    label: "maxlength",
    value: 100
  }
];

describe.each(INPUT_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtInput`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtInput, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elInput = wrapper.findComponent(ElInput);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elInput.props() as any)[prop.label]).toBe(testValue);
  });
});

const INPUT_EMITS = ["change", "input", "focus", "blur"];

describe.each(INPUT_EMITS)("%s event", event => {
  it(`should emit ${event} when HtInput triggers it`, async () => {
    const wrapper = mount(HtInput, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElInput).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});

describe("HtInput 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtInput, {
      slots: {
        prefix: "<span>前缀内容</span>",
        suffix: "<span>后缀内容</span>",
        prepend: "<span>前缀内容</span>",
        append: "<span>后缀内容</span>"
      },
      ...defaultOptions
    });
    expect(wrapper.html()).toContain("前缀内容");
    expect(wrapper.html()).toContain("后缀内容");
  });
});
