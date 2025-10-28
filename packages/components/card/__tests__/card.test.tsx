import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { HtCard } from "@hitler/components";
import { ElCard } from "element-plus";

const defaultOptions = {
  global: {
    components: {
      ElCard
    }
  }
};

/** HtCard */
const CARD_PROPS = [
  {
    label: "header",
    value: "header"
  },
  {
    label: "footer",
    value: "footer"
  },
  {
    label: "shadow",
    value: "hover"
  }
];

describe.each(CARD_PROPS)("%s prop", prop => {
  it(`should pass ${prop.label} to HtCard`, async () => {
    const testValue = prop.value;
    const wrapper = mount(HtCard, {
      props: { [prop.label]: testValue },
      ...defaultOptions
    });
    const elCard = wrapper.findComponent(ElCard);
    // access props as an object and index with a dynamic key to satisfy TypeScript
    expect((elCard.props() as any)[prop.label]).toBe(testValue);
  });
});

describe("HtCard 插槽验证", () => {
  it("应渲染插槽内容", () => {
    const wrapper = mount(HtCard, {
      slots: {
        default: "<span>自定义默认内容</span>",
        header: "<span>卡片标题内容</span>",
        footer: "<span>卡片页脚内容</span>"
      },
      ...defaultOptions
    });

    expect(wrapper.find("span").exists()).toBe(true);
  });
});
