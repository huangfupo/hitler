import { HtLoading } from "@hitler/components/loading";
import { HtMessage } from "@hitler/components/message";
import { HtMessageBox } from "@hitler/components/message-box";
import { HtNotification } from "@hitler/components/notification";

import type { Plugin } from "vue";

export default [HtLoading, HtMessage, HtMessageBox, HtNotification] as Plugin[];
