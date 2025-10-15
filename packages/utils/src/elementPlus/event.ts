export const getEvent = <T extends Record<string, any>>(events: T, emit: (...args: any[]) => any) => {
  return Object.keys(events).reduce((acc, key) => {
    return {
      ...acc,
      [key]: (...args: any[]) => {
        return emit(key, ...args);
      }
    };
  }, {} as T);
};
