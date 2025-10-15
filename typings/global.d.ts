// GlobalComponents for Volar
// https://github.com/vuejs/language-tools/issues/4501#issuecomment-2193697696
type HitlerGlobalRuntimeCore = import("@vue/runtime-core").GlobalComponents;
declare module "vue" {
  export interface GlobalComponents extends HitlerGlobalRuntimeCore {
    HtAlert: (typeof import("hitler"))["HtAlert"];
  }
}

export {};
