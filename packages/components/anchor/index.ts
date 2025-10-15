import { withInstall, withNoopInstall } from "@hitler/utils";

import type { SFCWithInstall } from "@hitler/utils";

import Anchor from "./src/anchor.vue";
import AnchorLink from "./src/anchor-link.vue";

export const HtAnchor: SFCWithInstall<typeof Anchor> & {
  AnchorLink: typeof AnchorLink;
} = withInstall(Anchor, {
  AnchorLink
});

export const HtAnchorLink: SFCWithInstall<typeof AnchorLink> = withNoopInstall(AnchorLink);

export default HtAnchor;

export type AnchorInstance = InstanceType<typeof Anchor> & unknown;
export type AnchorLinkInstance = InstanceType<typeof AnchorLink> & unknown;

export * from "./src/anchor";
