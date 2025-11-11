import { HtAlert } from "@hitler/components/alert";
import { HtAffix } from "@hitler/components/affix";
import { HtAnchor, HtAnchorLink } from "@hitler/components/anchor";
import { HtAside, HtContainer, HtFooter, HtHeader, HtMain } from "@hitler/components/container";
import { HtAutocomplete } from "@hitler/components/autocomplete";
import { HtAvatar } from "@hitler/components/avatar";
import { HtBacktop } from "@hitler/components/backtop";
import { HtBadge } from "@hitler/components/badge";
import { HtBreadcrumb, HtBreadcrumbItem } from "@hitler/components/breadcrumb";
import { HtButton, HtButtonGroup } from "@hitler/components/button";
import { HtCalendar } from "@hitler/components/calendar";
import { HtCard } from "@hitler/components/card";
import { HtCarousel, HtCarouselItem } from "@hitler/components/carousel";
import { HtCascader } from "@hitler/components/cascader";
import { HtCascaderPanel } from "@hitler/components/cascader-panel";
import { HtCheckTag } from "@hitler/components/check-tag";
import { HtCheckbox, HtCheckboxButton, HtCheckboxGroup } from "@hitler/components/checkbox";
import { HtCol } from "@hitler/components/col";
import { HtCollapse, HtCollapseItem } from "@hitler/components/collapse";
import { HtCollapseTransition } from "@hitler/components/collapse-transition";
import { HtColorPicker } from "@hitler/components/color-picker";
import { HtConfigProvider } from "@hitler/components/config-provider";
import { HtCountdown } from "@hitler/components/countdown";
import { HtDatePicker } from "@hitler/components/date-picker";
import { HtDescriptions, HtDescriptionsItem } from "@hitler/components/descriptions";
import { HtDialog } from "@hitler/components/dialog";
import { HtDivider } from "@hitler/components/divider";
import { HtDrawer } from "@hitler/components/drawer";
import { HtDropdown, HtDropdownItem, HtDropdownMenu } from "@hitler/components/dropdown";
import { HtEmpty } from "@hitler/components/empty";
import { HtForm, HtFormItem } from "@hitler/components/form";
import { HtIcon } from "@hitler/components/icon";
import { HtImage } from "@hitler/components/image";
import { HtImageViewer } from "@hitler/components/image-viewer";
import { HtInput } from "@hitler/components/input";
import { HtInputNumber } from "@hitler/components/input-number";
import { HtInputTag } from "@hitler/components/input-tag";
import { HtLink } from "@hitler/components/link";
import { HtMention } from "@hitler/components/mention";
import { HtMenu, HtMenuItem, HtMenuItemGroup, HtSubMenu } from "@hitler/components/menu";
import { HtPageHeader } from "@hitler/components/page-header";
import { HtPagination } from "@hitler/components/pagination";
import { HtPopconfirm } from "@hitler/components/popconfirm";
import { HtPopover } from "@hitler/components/popover";
import { HtPopper } from "@hitler/components/popper";
import { HtProgress } from "@hitler/components/progress";
import { HtRadio, HtRadioButton, HtRadioGroup } from "@hitler/components/radio";
import { HtRate } from "@hitler/components/rate";
import { HtResult } from "@hitler/components/result";
import { HtRow } from "@hitler/components/row";
import { HtScrollbar } from "@hitler/components/scrollbar";
import { HtSegmented } from "@hitler/components/segmented";
import { HtSelect, HtOption, HtOptionGroup } from "@hitler/components/select";
import { HtSelectV2 } from "@hitler/components/select-v2";
import { HtSkeleton, HtSkeletonItem } from "@hitler/components/skeleton";
import { HtSlider } from "@hitler/components/slider";
import { HtSpace } from "@hitler/components/space";
import { HtStatistic } from "@hitler/components/statistic";
import { HtStep, HtSteps } from "@hitler/components/steps";
import { HtSwitch } from "@hitler/components/switch";
import { HtTable, HtTableColumn } from "@hitler/components/table";
import { HtTableV2 } from "@hitler/components/table-v2";
import { HtTabs, HtTabPane } from "@hitler/components/tabs";
import { HtTag } from "@hitler/components/tag";
import { HtText } from "@hitler/components/text";
import { HtTimePicker } from "@hitler/components/time-picker";
import { HtTimeSelect } from "@hitler/components/time-select";
import { HtTimeline, HtTimelineItem } from "@hitler/components/timeline";
import { HtTooltip } from "@hitler/components/tooltip";
import { HtTour, HtTourStep } from "@hitler/components/tour";
import { HtTransfer } from "@hitler/components/transfer";
import { HtTree } from "@hitler/components/tree";
import { HtTreeSelect } from "@hitler/components/tree-select";
import { HtTreeV2 } from "@hitler/components/tree-v2";
import { HtUpload } from "@hitler/components/upload";
import { HtWatermark } from "@hitler/components/watermark";

import type { Plugin } from "vue";

export default [
  HtAlert,
  HtAffix,
  HtAnchor,
  HtAnchorLink,
  HtAside,
  HtContainer,
  HtFooter,
  HtHeader,
  HtMain,
  HtAutocomplete,
  HtAvatar,
  HtBacktop,
  HtBadge,
  HtBreadcrumb,
  HtBreadcrumbItem,
  HtButton,
  HtButtonGroup,
  HtCalendar,
  HtCard,
  HtCarousel,
  HtCarouselItem,
  HtCascader,
  HtCascaderPanel,
  HtCheckTag,
  HtCheckbox,
  HtCheckboxButton,
  HtCheckboxGroup,
  HtCol,
  HtCollapse,
  HtCollapseItem,
  HtCollapseTransition,
  HtColorPicker,
  HtConfigProvider,
  HtCountdown,
  HtDatePicker,
  HtDescriptions,
  HtDescriptionsItem,
  HtDialog,
  HtDivider,
  HtDrawer,
  HtDropdown,
  HtDropdownItem,
  HtDropdownMenu,
  HtEmpty,
  HtForm,
  HtFormItem,
  HtIcon,
  HtImage,
  HtImageViewer,
  HtInput,
  HtInputNumber,
  HtInputTag,
  HtLink,
  HtMention,
  HtMenu,
  HtMenuItem,
  HtMenuItemGroup,
  HtSubMenu,
  HtSelect,
  HtOption,
  HtOptionGroup,
  HtPageHeader,
  HtPagination,
  HtPopconfirm,
  HtPopover,
  HtPopper,
  HtProgress,
  HtRadio,
  HtRadioButton,
  HtRadioGroup,
  HtRate,
  HtResult,
  HtRow,
  HtScrollbar,
  HtSegmented,
  HtSelectV2,
  HtSkeleton,
  HtSkeletonItem,
  HtSlider,
  HtSpace,
  HtStatistic,
  HtSteps,
  HtStep,
  HtSwitch,
  HtTabs,
  HtTabPane,
  HtTable,
  HtTableColumn,
  HtTableV2,
  HtTag,
  HtText,
  HtTimePicker,
  HtTimeSelect,
  HtTimeline,
  HtTimelineItem,
  HtTooltip,
  HtTour,
  HtTourStep,
  HtTransfer,
  HtTree,
  HtTreeSelect,
  HtTreeV2,
  HtUpload,
  HtWatermark
] as Plugin[];
