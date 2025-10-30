import { withInstallFunction } from "@hitler/utils";
import Message from "./src/message";

export const HtMessage = withInstallFunction(Message, "$message");
export default HtMessage;

export * from "./src/message";
