import { withInstall, withNoopInstall } from "@hitler/utils";
import Container from "./src/container.vue";
import Aside from "./src/aside.vue";
import Footer from "./src/footer.vue";
import Header from "./src/header.vue";
import Main from "./src/main.vue";

import type { SFCWithInstall } from "@hitler/utils";

export const HtContainer: SFCWithInstall<typeof Container> & {
  Aside: typeof Aside;
  Footer: typeof Footer;
  Header: typeof Header;
  Main: typeof Main;
} = withInstall(Container, {
  Aside,
  Footer,
  Header,
  Main
});

export default HtContainer;

export const HtAside: SFCWithInstall<typeof Aside> = withNoopInstall(Aside);
export const HtFooter: SFCWithInstall<typeof Footer> = withNoopInstall(Footer);
export const HtHeader: SFCWithInstall<typeof Header> = withNoopInstall(Header);
export const HtMain: SFCWithInstall<typeof Main> = withNoopInstall(Main);

export type ContainerInstance = InstanceType<typeof Container> & unknown;
export type AsideInstance = InstanceType<typeof Aside> & unknown;
export type FooterInstance = InstanceType<typeof Footer> & unknown;
export type HeaderInstance = InstanceType<typeof Header> & unknown;
export type MainInstance = InstanceType<typeof Main> & unknown;
