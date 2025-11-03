import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtStatistic } from "@hitler/components";
import { ElStatistic } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElStatistic
    }
  }
};

/** HtStatistic */
const STATISTIC_PROPS = [
  {
    label: "title",
    value: "title"
  },
  {
    label: "prefix",
    value: "prefix"
  },
  {
    label: "suffix",
    value: "suffix"
  },
  {
    label: "precision",
    value: 3
  }
];

describe.each(STATISTIC_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtStatistic`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtStatistic, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elStatistic = wrapper.findComponent(ElStatistic);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elStatistic.props() as any)[prop.label]).toBe(testValue);
  });
});

describe("HtStatistic 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtStatistic, {
      slots: {
        title: "<span>自定义默认内容</span>",
        prefix: "<span>自定义默认内容</span>",
        suffix: "<span>自定义默认内容</span>"
      },
      ...defaultOptions
    });
    expect(wrapper.html()).toContain("自定义默认内容");
  });
});
