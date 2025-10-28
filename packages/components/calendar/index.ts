import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Calendar from "./src/calendar.vue";

export const HtCalendar: SFCWithInstall<typeof Calendar> = withInstall(Calendar);

export type CalendarInstance = InstanceType<typeof Calendar> & unknown;

export default HtCalendar;

export * from "./src/calendar";
