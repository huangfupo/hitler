import { INSTALLED_KEY } from "@hitler/constants";
import { provideGlobalConfig } from "@hitler/hooks";

import { version } from "./version";
import type { ConfigProviderContext } from "@hitler/constants";
import type { App, Plugin } from "@vue/runtime-core";

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App, options: ConfigProviderContext) => {
    if (app[INSTALLED_KEY]) return;

    app[INSTALLED_KEY] = true;
    // console.log(components);
    components.forEach(c => app.use(c));
    provideGlobalConfig(options, app, true);
  };

  return {
    version,
    install
  };
};
