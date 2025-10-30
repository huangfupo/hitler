import { ElLoading } from "element-plus";
import type { LoadingOptions } from "element-plus";
export const Loading = function (options: LoadingOptions = {}) {
  return ElLoading.service(options);
};
