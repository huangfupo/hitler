import { withInstall, withNoopInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Tabs from "./src/tabs.vue";
import TabPane from "./src/tab-pane.vue";

export const HtTabs: SFCWithInstall<typeof Tabs> & {
  TabPane: typeof TabPane;
} = withInstall(Tabs, {
  TabPane
});

export const HtTabPane: SFCWithInstall<typeof TabPane> = withNoopInstall(TabPane);

export type TabsInstance = InstanceType<typeof Tabs> & unknown;
export type TabPaneInstance = InstanceType<typeof TabPane> & unknown;

export default HtTabs;

export * from "./src/tabs";
export * from "./src/tab-pane";
