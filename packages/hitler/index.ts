import installer from "./defaults";

export * from "@hitler/components";
export * from "@hitler/constants";
export * from "@hitler/directives";
export * from "@hitler/hooks";

export const install = installer.install;
export const version = installer.version;
export default installer;
