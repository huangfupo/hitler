import { uploadProps as elUploadProps } from "element-plus";

export const uploadProps = {
  ...elUploadProps
};

export const uploadEmits = {
  "update:fileList": (...args: any[]) => args
};
