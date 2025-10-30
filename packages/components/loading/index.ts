import { Loading } from "./src/loading";
import type { App } from "vue";

export const HtLoading = {
  install(app: App) {
    app.config.globalProperties.$loading = Loading as any;
  },
  service: Loading
};

export { type LoadingOptionsResolved, type LoadingOptions, type LoadingParentElement } from "element-plus";

export default HtLoading;
