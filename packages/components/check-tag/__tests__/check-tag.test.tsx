import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtCheckTag } from "@hitler/components";
import { ElCheckTag } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElCheckTag
    }
  }
};

/** HtCheckTag */
const CHECKTAG_PROPS = [
  {
    label: "disabled",
    value: true
  },
  {
    label: "type",
    value: "success"
  }
];

const CHECKTAG_EMITS = ["change"];

describe.each(CHECKTAG_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtCheckTag`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtCheckTag, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elCheckTag = wrapper.findComponent(ElCheckTag);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elCheckTag.props() as any)[prop.label]).toBe(testValue);
  });
});

describe.each(CHECKTAG_EMITS)("%s event", event => {
  it(`should emit ${event} when HtCheckTag triggers it`, async () => {
    const wrapper = mount(HtCheckTag, {
      ...defaultOptions
    });
    await wrapper.findComponent(ElCheckTag).vm.$emit(event);
    expect(wrapper.emitted(event)).toBeTruthy();
  });
});

describe("HtCheckTag 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtCheckTag, {
      slots: {
        default: "自定义默认内容"
      },
      ...defaultOptions
    });

    expect(wrapper.text()).toContain("自定义默认内容");
  });
});
