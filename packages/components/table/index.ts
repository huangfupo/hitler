import { withInstall, withNoopInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Table from "./src/table.vue";
import TableColumn from "./src/table-column.vue";

export const HtTable: SFCWithInstall<typeof Table> & {
  TableColumn: typeof TableColumn;
} = withInstall(Table, {
  TableColumn
});

export const HtTableColumn: SFCWithInstall<typeof TableColumn> = withNoopInstall(TableColumn);

export type TableInstance = InstanceType<typeof Table> & unknown;
export type TableColumnInstance = InstanceType<typeof TableColumn> & unknown;

export default HtTable;

export * from "./src/table";
export * from "./src/table-column";
