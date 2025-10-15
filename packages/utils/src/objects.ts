export const keysOf = <T extends object>(arr: T) => Object.keys(arr) as Array<keyof T>;
const hasOwnProperty = Object.prototype.hasOwnProperty;
export const hasOwn = (val: object, key: string | symbol | number): key is keyof typeof val => hasOwnProperty.call(val, key);
/**
 * 对象重新赋值
 * @param oldObj
 * @param newObj
 */
export const resetObject = (oldObj: Record<string, any>, newObj: Record<string, any>) => {
  for (const [key, value] of Object.entries(newObj)) {
    if (hasOwn(oldObj, key)) {
      Reflect.set(oldObj, key, value);
    }
  }
};
