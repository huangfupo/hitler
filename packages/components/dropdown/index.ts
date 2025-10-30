import { withInstall, withNoopInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Dropdown from "./src/dropdown.vue";
import DropdownItem from "./src/dropdown-item.vue";
import DropdownMenu from "./src/dropdown-menu.vue";

export const HtDropdown: SFCWithInstall<typeof Dropdown> & {
  DropdownItem: typeof DropdownItem;
  DropdownMenu: typeof DropdownMenu;
} = withInstall(Dropdown, {
  DropdownItem,
  DropdownMenu
});

export const HtDropdownItem: SFCWithInstall<typeof DropdownItem> = withNoopInstall(DropdownItem);
export const HtDropdownMenu: SFCWithInstall<typeof DropdownMenu> = withNoopInstall(DropdownMenu);

export type DropdownInstance = InstanceType<typeof HtDropdown> & unknown;
export type DropdownItemInstance = InstanceType<typeof HtDropdownItem> & unknown;
export type DropdownMenuInstance = InstanceType<typeof HtDropdownMenu> & unknown;

export default HtDropdown;

export * from "./src/dropdown";
export * from "./src/dropdown-item";
export * from "./src/dropdown-menu";
