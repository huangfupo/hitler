import { type AppContext, isVNode } from "vue";
import { ElNotification } from "element-plus";
import type { Notify, NotifyFn } from "element-plus";

export const notificationTypes = ["success", "info", "warning", "error"] as const;

const notify: NotifyFn & Partial<Notify> & { _context: AppContext | null } = options => {
  return ElNotification(options);
};
notificationTypes.forEach(type => {
  notify[type] = (options = {}) => {
    if (typeof options === "string" || isVNode(options)) {
      options = {
        message: options
      };
    }
    return notify({
      ...options,
      type
    });
  };
});

notify.closeAll = ElNotification.closeAll;
notify._context = ElNotification._context;
notify.updateOffsets = ElNotification.updateOffsets;

export default notify as Notify;
