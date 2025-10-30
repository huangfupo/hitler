import { type AppContext, isVNode } from "vue";
import { isFunction } from "@vue/shared";
import { isString } from "@hitler/utils";
import { ElMessage } from "element-plus";
import { useGlobalConfig } from "@hitler/hooks";
import type { Message, MessageFn, MessageOptions, MessageParams, MessageParamsNormalized } from "element-plus";

export const messageTypes = ["success", "info", "warning", "error"] as const;

export const normalizeMessageOptions = (params?: MessageParams) => {
  const normalized: MessageOptions =
    !params || isString(params) || isVNode(params) || isFunction(params) ? { message: params } : params;
  return normalized;
};

const message: MessageFn & Partial<Message> & { _context: AppContext | null } = (options = {}, context) => {
  const normalized = normalizeMessageOptions(options);
  const messageGlobalConfig = useGlobalConfig("message") ?? {};
  return ElMessage(
    {
      grouping: true,
      plain: messageGlobalConfig.value?.plain,
      //   duration: 5 * 1000,
      ...normalized
    },
    context
  );
};

message.closeAll = ElMessage.closeAll;
message.closeAllByPlacement = ElMessage.closeAllByPlacement;
message._context = ElMessage._context;
messageTypes.forEach(type => {
  message[type] = (options = {}, appContext) => {
    const normalized = normalizeMessageOptions(options);
    return message({ ...(normalized as MessageParamsNormalized), type }, appContext);
  };
});

export default message as Message;
