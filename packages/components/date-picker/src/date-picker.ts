import { datePickerProps as elDatePickerProps } from "element-plus";
import type { DatePickType } from "element-plus";
import type { ExtractPropTypes, PropType } from "vue";

export type SingleOrRange<T> = T | [T, T];
export type DateModelType = number | string | Date;
export type ModelValueType = SingleOrRange<DateModelType>;

export const datePickerProps = {
  ...elDatePickerProps,
  type: {
    type: String as PropType<DatePickType>,
    default: "date" as const
  },
  shortcuts: {
    type: Array
  }
};

export const elDatePickerEmits = {
  "update:modelValue": (...args: any[]) => args,
  change: (...args: any[]) => args,
  focus: (...args: any[]) => args,
  blur: (...args: any[]) => args,
  "calendar-change": (...args: any[]) => args,
  "panel-change": (...args: any[]) => args,
  "visible-change": (...args: any[]) => args
};
export const datePickerEmits = {
  ...elDatePickerEmits
};

export type DatePickerProps = ExtractPropTypes<typeof datePickerProps>;
