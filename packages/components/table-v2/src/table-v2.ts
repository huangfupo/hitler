import { tableV2Props as elTableV2Props } from "element-plus";

export const tableV2Props = {
  ...elTableV2Props
};

export const elTableV2Emits = {
  "column-sort": (...arg: any[]) => !!arg,
  "expended-rows-change": (...arg: any[]) => !!arg,
  "end-reached": (...arg: any[]) => !!arg,
  scroll: (...arg: any[]) => !!arg,
  "rows-rendered": (...arg: any[]) => !!arg,
  "row-expand": (...arg: any[]) => !!arg,
  "row-event-handlers": (...arg: any[]) => !!arg
};

export const tableV2Emits = {
  ...elTableV2Emits
  // 自定义事件
  // submit: (value: any) => !!value,
};
