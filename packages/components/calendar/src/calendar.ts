import {
  type CalendarDateType as ElCalendarDateType,
  calendarEmits as elCalendarEmits,
  calendarProps as elCalendarProps
} from "element-plus";

export const calendarProps = {
  ...elCalendarProps
};

export const calendarEmits = {
  ...elCalendarEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};

export type CalendarDateType = ElCalendarDateType;
