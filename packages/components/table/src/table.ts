import elTableProps from "element-plus/es/components/table/src/table/defaults";

export const tableProps = {
  ...elTableProps
};

export const elTableEmits = {
  select: (...arg: any[]) => !!arg,
  "select-all": (...arg: any[]) => !!arg,
  "selection-change": (...arg: any[]) => !!arg,
  "cell-mouse-enter": (...arg: any[]) => !!arg,
  "cell-mouse-leave": (...arg: any[]) => !!arg,
  "cell-click": (...arg: any[]) => !!arg,
  "cell-dblclick": (...arg: any[]) => !!arg,
  "cell-contextmenu": (...arg: any[]) => !!arg,
  "row-click": (...arg: any[]) => !!arg,
  "row-contextmenu": (...arg: any[]) => !!arg,
  "row-dblclick": (...arg: any[]) => !!arg,
  "header-click": (...arg: any[]) => !!arg,
  "header-contextmenu": (...arg: any[]) => !!arg,
  "sort-change": (...arg: any[]) => !!arg,
  "filter-change": (...arg: any[]) => !!arg,
  "current-change": (...arg: any[]) => !!arg,
  "header-dragend": (...arg: any[]) => !!arg,
  "expand-change": (...arg: any[]) => !!arg,
  scroll: (...arg: any[]) => !!arg
};

export const tableEmits = {
  ...elTableEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
