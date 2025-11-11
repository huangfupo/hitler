import type {
  TreeComponentProps,
  AllowDragFunction,
  AllowDropFunction,
  RenderContentFunction,
  TreeData
} from "element-plus/es/components/tree";
import type { PropType } from "vue";
import { iconPropType } from "element-plus/es/utils/vue/icon";
import { definePropType } from "element-plus/es/utils/vue/props/runtime";

export const treeProps = {
  data: {
    type: definePropType<TreeData>(Array),
    default: () => []
  },
  emptyText: {
    type: String
  },
  nodeKey: String,
  props: {
    type: Object as PropType<TreeComponentProps["props"]>,
    default: () => ({
      children: "children",
      label: "label",
      disabled: "disabled"
    })
  },
  renderAfterExpand: {
    type: Boolean,
    default: true
  },
  load: Function as PropType<TreeComponentProps["load"]>,
  renderContent: {
    type: definePropType<RenderContentFunction>(Function)
  },
  highlightCurrent: Boolean,
  defaultExpandAll: Boolean,
  expandOnClickNode: {
    type: Boolean,
    default: true
  },
  checkOnClickNode: Boolean,
  checkOnClickLeaf: {
    type: Boolean,
    default: true
  },
  autoExpandParent: {
    type: Boolean,
    default: true
  },
  defaultExpandedKeys: Array as PropType<TreeComponentProps["defaultExpandedKeys"]>,
  showCheckbox: Boolean,
  checkStrictly: Boolean,
  defaultCheckedKeys: Array as PropType<TreeComponentProps["defaultCheckedKeys"]>,
  currentNodeKey: [String, Number] as PropType<string | number>,
  filterNodeMethod: Function as PropType<TreeComponentProps["filterNodeMethod"]>,
  accordion: Boolean,
  indent: {
    type: Number,
    default: 18
  },
  icon: {
    type: iconPropType
  },
  lazy: Boolean,
  draggable: Boolean,
  allowDrag: {
    type: definePropType<AllowDragFunction>(Function)
  },
  allowDrop: {
    type: definePropType<AllowDropFunction>(Function)
  },
  checkDescendants: Boolean
};

export const elTreeEmits = {
  "node-click": (...arg: any[]) => !!arg,
  "node-contextmenu": (...arg: any[]) => !!arg,
  "check-change": (...arg: any[]) => !!arg,
  check: (...arg: any[]) => !!arg,
  "current-change": (...arg: any[]) => !!arg,
  "node-expand": (...arg: any[]) => !!arg,
  "node-collapse": (...arg: any[]) => !!arg,
  "node-drag-start": (...arg: any[]) => !!arg,
  "node-drag-enter": (...arg: any[]) => !!arg,
  "node-drag-leave": (...arg: any[]) => !!arg,
  "node-drag-over": (...arg: any[]) => !!arg,
  "node-drag-end": (...arg: any[]) => !!arg,
  "node-drop": (...arg: any[]) => !!arg
};

export const treeEmits = {
  ...elTreeEmits
  // 自定义事件
  // submit: (value: any) => !!value,
};
