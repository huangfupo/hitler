import dayjs from "dayjs";
/**
 * 日期快捷选项
 * @param type
 * @returns
 */
export const getDateShortcuts = (type: string) => {
  const daterangeShortcutValue = [
    {
      text: "本周",
      value: () => {
        const start = dayjs().startOf("week").toDate(); // 本周开始日期
        const end = dayjs().endOf("week").toDate(); // 本周结束日期
        return [start, end];
      }
    },
    {
      text: "本月",
      value: () => {
        const start = dayjs().startOf("month").toDate(); // 本周开始日期
        const end = dayjs().endOf("month").toDate(); // 本周结束日期
        return [start, end];
      }
    },
    {
      text: "上月",
      value: () => {
        // 获取当前日期
        const now = dayjs();

        // 获取当前月份的第一天
        const startOfThisMonth = now.startOf("month");

        // 获取上个月的最后一天（即这个月的第一天的前一天）
        const endOfLastMonth = startOfThisMonth.subtract(1, "day");

        // 获取上个月的第一天
        const startOfLastMonth = endOfLastMonth.startOf("month");
        return [startOfLastMonth.toDate(), endOfLastMonth.toDate()];
      }
    },
    {
      text: "近3天",
      value: () => {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 2);
        return [start, end];
      }
    },

    {
      text: "近7天",
      value: () => {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 6);
        return [start, end];
      }
    },
    {
      text: "近15天",
      value: () => {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 14);
        return [start, end];
      }
    },

    {
      text: "近30天",
      value: () => {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 29);
        return [start, end];
      }
    },
    {
      text: "近60天",
      value: () => {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 59);
        return [start, end];
      }
    },
    {
      text: "近90天",
      value: () => {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 89);
        return [start, end];
      }
    }
  ];
  const shortcuts = [
    {
      type: "date",
      values: [
        {
          text: "今天",
          value: () => new Date()
        },
        {
          text: "昨天",
          value: () => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            return date;
          }
        },
        {
          text: "一周前",
          value: () => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            return date;
          }
        }
      ]
    },
    {
      type: "daterange",
      values: daterangeShortcutValue
    },
    {
      type: "datetimerange",
      values: daterangeShortcutValue
    }
  ];
  return shortcuts.find(it => it.type === type)?.values ?? [];
};
