import { withInstall, withNoopInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Menu from "./src/menu.vue";
import MenuItem from "./src/menu-item.vue";
import MenuItemGroup from "./src/menu-item-group.vue";
import SubMenu from "./src/sub-menu.vue";

export const HtMenu: SFCWithInstall<typeof Menu> & {
  MenuItem: typeof MenuItem;
  MenuItemGroup: typeof MenuItemGroup;
  SubMenu: typeof SubMenu;
} = withInstall(Menu, {
  MenuItem,
  MenuItemGroup,
  SubMenu
});

export const HtMenuItem: SFCWithInstall<typeof MenuItem> = withNoopInstall(MenuItem);
export const HtMenuItemGroup: SFCWithInstall<typeof MenuItemGroup> = withNoopInstall(MenuItemGroup);
export const HtSubMenu: SFCWithInstall<typeof SubMenu> = withNoopInstall(SubMenu);

export type MenuInstance = InstanceType<typeof Menu> & unknown;
export type MenuItemInstance = InstanceType<typeof MenuItem> & unknown;
export type MenuItemGroupInstance = InstanceType<typeof MenuItemGroup> & unknown;
export type SubMenuInstance = InstanceType<typeof SubMenu> & unknown;

export default HtMenu;

export * from "./src/menu";
export * from "./src/menu-item";
export * from "./src/menu-item-group";
export * from "./src/sub-menu";
