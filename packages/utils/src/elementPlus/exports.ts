import { computed } from "vue";
import type { Ref, UnwrapRef } from "vue";

export type TupleToUnion<ArrayType> = ArrayType extends readonly unknown[] ? ArrayType[number] : never;

/**
 * 导出组件实例的属性和方法
 * @param elRef 可以是组件 或ref
 * @param exposeNames 要导出的属性和方法名称
 */
export const getExports = <T extends Ref<any>, U extends readonly string[] = []>(elRef: T, exposeNames: U) => {
  type CurInstance = NonNullable<UnwrapRef<T>>;
  const exposeFns = exposeNames.reduce<Pick<CurInstance, TupleToUnion<typeof exposeNames>>>((acc, cur) => {
    return { ...acc, [cur]: computed(() => elRef.value?.[cur]) };
  }, {} as any);
  return {
    exposeFns
  };
};
