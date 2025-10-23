import { autocompleteEmits as elAutocompleteEmits, autocompleteProps as elAutocompleteProps } from "element-plus";

export const autocompleteProps = {
  ...elAutocompleteProps
};

export const autocompleteEmits = {
  ...elAutocompleteEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
