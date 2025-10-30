import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtInputNumber } from "@hitler/components";
import { ElInputNumber } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElInputNumber
    }
  }
};

/** ElInputNumber */
const INPUT_NUMBER_PROPS = [
  {
    label: "step",
    value: 10
  },
  {
    label: "precision",
    value: 2
  }
];

describe.each(INPUT_NUMBER_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtInputNumber`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtInputNumber, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elInputNumber = wrapper.findComponent(ElInputNumber);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elInputNumber.props() as any)[prop.label]).toBe(testValue);
  });
});

const INPUT_EMITS = ["change", "focus", "blur"];

describe.each(INPUT_EMITS)("%s event", event => {
  it(`should emit ${event} when HtInputNumber triggers it`, async () => {
    const wrapper = mount(HtInputNumber, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElInputNumber).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});

describe("HtInputNumber 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtInputNumber, {
      slots: {
        prefix: "<span>前缀内容</span>",
        suffix: "<span>后缀内容</span>"
      },
      ...defaultOptions
    });
    expect(wrapper.html()).toContain("前缀内容");
    expect(wrapper.html()).toContain("后缀内容");
  });
});
