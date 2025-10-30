import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtInputTag } from "@hitler/components";
import { ElInputTag } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElInputTag
    }
  }
};

/** HtInputTag */
const INPUT_TAG_PROPS = [
  {
    label: "max",
    value: 10
  },
  {
    label: "tagType",
    value: "info"
  }
];

describe.each(INPUT_TAG_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtInputTag`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtInputTag, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elInputTag = wrapper.findComponent(ElInputTag);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elInputTag.props() as any)[prop.label]).toBe(testValue);
  });
});

const INPUT_TAG_EMITS = ["change", "input", "focus", "blur"];

describe.each(INPUT_TAG_EMITS)("%s event", event => {
  it(`should emit ${event} when HtInputTag triggers it`, async () => {
    const wrapper = mount(HtInputTag, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElInputTag).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});

describe("HtInputTag 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtInputTag, {
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
