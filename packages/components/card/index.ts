import { withInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Card from "./src/card.vue";

export const HtCard: SFCWithInstall<typeof Card> = withInstall(Card);

export type CardInstance = InstanceType<typeof Card> & unknown;

export default HtCard;

export * from "./src/card";
