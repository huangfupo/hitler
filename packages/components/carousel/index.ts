import { withInstall, withNoopInstall } from "@hitler/utils";
import type { SFCWithInstall } from "@hitler/utils";

import Carousel from "./src/carousel.vue";
import CarouselItem from "./src/carousel-item.vue";

export const HtCarousel: SFCWithInstall<typeof Carousel> & {
  CarouselItem: typeof CarouselItem;
} = withInstall(Carousel, {
  CarouselItem
});

export const HtCarouselItem: SFCWithInstall<typeof CarouselItem> = withNoopInstall(CarouselItem);

export type CarouselInstance = InstanceType<typeof Carousel> & unknown;
export type CarouselItemInstance = InstanceType<typeof CarouselItem> & unknown;

export default HtCarousel;

export * from "./src/carousel";
export * from "./src/carousel-item";
