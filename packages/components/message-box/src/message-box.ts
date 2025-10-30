import { isVNode } from "vue";
import { isObject } from "@vue/shared";
import { isString, isUndefined } from "@hitler/utils";
import { ElMessageBox } from "element-plus";
import type { ElMessageBoxOptions, ElMessageBoxShortcutMethod, IElMessageBox, MessageBoxData } from "element-plus";
import type { AppContext, VNode } from "vue";

async function MessageBox(options: ElMessageBoxOptions, appContext?: AppContext | null): Promise<MessageBoxData>;

function MessageBox(options: ElMessageBoxOptions | string | VNode, appContext: AppContext | null = null) {
  if (isString(options) || isVNode(options)) {
    options = {
      message: options
    };
  }
  return ElMessageBox(options, appContext);
}

const MESSAGE_BOX_VARIANTS = ["alert", "confirm", "prompt"] as const;
const MESSAGE_BOX_DEFAULT_OPTS: Record<(typeof MESSAGE_BOX_VARIANTS)[number], Partial<ElMessageBoxOptions>> = {
  alert: { closeOnPressEscape: false, closeOnClickModal: false },
  confirm: { showCancelButton: true },
  prompt: { showCancelButton: true, showInput: true }
};

MESSAGE_BOX_VARIANTS.forEach(boxType => {
  (MessageBox as IElMessageBox)[boxType] = messageBoxFactory(boxType) as ElMessageBoxShortcutMethod;
});

function messageBoxFactory(boxType: (typeof MESSAGE_BOX_VARIANTS)[number]) {
  return (
    message: string | VNode,
    title: string | ElMessageBoxOptions,
    options?: ElMessageBoxOptions,
    appContext?: AppContext | null
  ) => {
    let titleOrOpts = "";
    if (isObject(title)) {
      options = title as ElMessageBoxOptions;
      titleOrOpts = "";
    } else if (isUndefined(title)) {
      titleOrOpts = "";
    } else {
      titleOrOpts = title as string;
    }

    return MessageBox(
      Object.assign(
        {
          title: titleOrOpts,
          message,
          type: "",
          ...MESSAGE_BOX_DEFAULT_OPTS[boxType]
        },
        options,
        {
          boxType
        }
      ),
      appContext
    );
  };
}

MessageBox.close = ElMessageBox.close;
(MessageBox as IElMessageBox)._context = ElMessageBox._context;

export default MessageBox as IElMessageBox;
