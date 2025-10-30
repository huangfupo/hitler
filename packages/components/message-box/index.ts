import MessageBox from "./src/message-box";
import type { SFCWithInstall } from "@hitler/utils";
import type { App } from "vue";

const _MessageBox = MessageBox as SFCWithInstall<typeof MessageBox>;

_MessageBox.install = (app: App) => {
  _MessageBox._context = app._context;
  app.config.globalProperties.$msgbox = _MessageBox;
  app.config.globalProperties.$messageBox = _MessageBox;
  app.config.globalProperties.$alert = _MessageBox.alert;
  app.config.globalProperties.$confirm = _MessageBox.confirm;
  app.config.globalProperties.$prompt = _MessageBox.prompt;
};

export default _MessageBox;
export const HtMessageBox = _MessageBox;
