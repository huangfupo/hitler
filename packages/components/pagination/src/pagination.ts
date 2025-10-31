import { paginationEmits as elPaginationEmits, paginationProps as elPaginationProps } from "element-plus";

export const paginationProps = {
  ...elPaginationProps
};

export const paginationEmits = {
  ...elPaginationEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
