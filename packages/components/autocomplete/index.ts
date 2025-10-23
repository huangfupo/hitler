import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Autocomplete from "./src/autocomplete.vue";

export const HtAutocomplete: SFCWithInstall<typeof Autocomplete> = withInstall(Autocomplete);

export type AutocompleteInstance = InstanceType<typeof Autocomplete> & unknown;

export default HtAutocomplete;

export * from "./src/autocomplete";
