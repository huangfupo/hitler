import { computed, getCurrentInstance, inject, provide, ref, unref } from "vue";
import { ImportMetaEnvKey, configProviderContextKey } from "@hitler/constants";
import { keysOf } from "@hitler/utils";
import type { ConfigProviderContext } from "@hitler/constants";
import type { App, MaybeRef, Ref } from "vue";

const globalConfig = ref<ConfigProviderContext>();

export function useGlobalConfig<K extends keyof ConfigProviderContext, D extends ConfigProviderContext[K]>(
  key: K,
  defaultValue?: D
): Ref<Exclude<ConfigProviderContext[K], undefined> | D>;
export function useGlobalConfig(): Ref<ConfigProviderContext>;
export function useGlobalConfig(key?: keyof ConfigProviderContext, defaultValue = undefined) {
  const config = getCurrentInstance() ? inject(configProviderContextKey, globalConfig) : globalConfig;
  if (key) {
    return computed(() => config.value?.[key] ?? defaultValue);
  } else {
    return config;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const provideGlobalConfig = (config: MaybeRef<Partial<ConfigProviderContext>>, app?: App, global = false) => {
  const inSetup = !!getCurrentInstance();
  const oldConfig = inSetup ? useGlobalConfig() : undefined;
  const provideFn = app?.provide ?? (inSetup ? provide : undefined);
  if (!provideFn) {
    return;
  }
  const context = computed(() => {
    const cfg = unref(config) ?? {};
    if (!oldConfig?.value) return cfg as ConfigProviderContext;
    return mergeConfig(oldConfig.value, cfg);
  });
  if (app?.provide) {
    app.provide(configProviderContextKey, context);
  } else if (inSetup) {
    provide(configProviderContextKey, context);
  }
  // provideFn?.(configProviderContextKey, context);

  if (global || !globalConfig.value) {
    globalConfig.value = context.value;
  }

  if (app?.provide) {
    app.provide(ImportMetaEnvKey, context.value.env);
  } else if (inSetup) {
    provide(ImportMetaEnvKey, context.value.env);
  }
  // provideFn(ImportMetaEnvKey, context.value.env);
  return context;
};

const mergeConfig = (a: ConfigProviderContext, b: Partial<ConfigProviderContext>) => {
  const keys = [...new Set([...keysOf(a), ...keysOf(b)])];
  const obj: Record<string, any> = {};
  for (const key of keys) {
    obj[key] = b[key] ?? a[key];
  }
  return obj as ConfigProviderContext;
};
