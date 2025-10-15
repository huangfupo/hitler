import type { Router } from "vue-router";
import type { InjectionKey, Ref } from "vue";

// Add this import or declare the type if not available
interface ImportMetaEnv {
  [key: string]: string | boolean | undefined;
}

export interface ConfigProviderContext {
  // 用户端环境变量
  env: ImportMetaEnv;
  //   用户端路由
  router?: Router;
  disabledLoginDialog?: boolean;
  disabledRectSelect?: boolean;
  /**对消息进行配置 */
  message?: {
    plain?: boolean;
  };
}

export const configProviderContextKey: InjectionKey<Ref<ConfigProviderContext>> = Symbol();

export const INSTALLED_KEY = Symbol("INSTALLED_KEY");

export const ImportMetaEnvKey: InjectionKey<ImportMetaEnv> = Symbol("ImportMetaEnvKey");

export const resetEnvMode = "VITE_GIIME_MODE";
