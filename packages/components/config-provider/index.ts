import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import ConfigProvider from "./src/config-provider.vue";

export const HtConfigProvider: SFCWithInstall<typeof ConfigProvider> = withInstall(ConfigProvider);

export type ConfigProviderInstance = InstanceType<typeof ConfigProvider> & unknown;

export default HtConfigProvider;

export * from "./src/config-provider";
