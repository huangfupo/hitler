import { withInstallFunction } from "@hitler/utils";
import Notify from "./src/notification";

export const HtNotification = withInstallFunction(Notify, "$notify");

export default HtNotification;
