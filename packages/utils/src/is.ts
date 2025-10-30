const toString = Object.prototype.toString;

/**
 * @description 获取值的toString标签
 * @param value
 * @returns {string}
 */
export function getTag(value: any): string {
  if (value === null) {
    return "[object Null]";
  } else if (value === undefined) {
    return "[object Undefined]";
  }
  return toString.call(value);
}

/**
 * @description 判断是否为类对象
 * @param value
 * @returns {boolean}
 */
export function isObjectLike(value: any): boolean {
  return typeof value === "object" && value !== null;
}

/**
 * @description 判断是否为布尔值
 * @param value
 * @returns {boolean}
 */
export function isBoolean(value: any): value is boolean {
  return value === true || value === false || (isObjectLike(value) && getTag(value) === "[object Boolean]");
}

/**
 * @description 判断是否为字符串
 * @param value
 * @returns {boolean}
 */
export function isString(value: any): value is string {
  return typeof value === "string" || (isObjectLike(value) && getTag(value) === "[object String]");
}

/**
 * @description 判断是否为数字
 * @param value
 * @returns {boolean}
 */
export function isNumber(value: any): value is number {
  return typeof value === "number" || (isObjectLike(value) && getTag(value) === "[object Number]");
}

/**
 * @description 判断是否为symbol
 * @param value
 * @returns {boolean}
 */
export function isSymbol(value: any): value is symbol {
  return typeof value === "symbol" || (isObjectLike(value) && getTag(value) === "[object Symbol]");
}

/**
 * @description 判断是否为日期对象
 * @param value
 * @returns {boolean}
 */
export function isDate(value: any): value is Date {
  return isObjectLike(value) && getTag(value) === "[object Date]";
}

/**
 * @description 判断是否为函数
 * @param val
 * @returns {boolean}
 */
export const isFunction = (val: unknown): val is Function => typeof val === "function";

/**
 * @description 判断是否为整数
 * @param val
 * @returns {boolean}
 */
export function isInteger(val: any): val is number {
  return isNumber(val) && val % 1 === 0;
}

/**
 * @description 判断是否为小数
 * @param val
 * @returns {boolean}
 */
export function isDecimal(val: any): val is number {
  return isNumber(val) && val % 1 !== 0;
}

/**
 * @description 判断是否为负数
 * @param val
 * @returns {boolean}
 */
export function isNegative(val: any): val is number {
  return isNumber(val) && val < 0;
}

/**
 * @description 判断是否为正数
 * @param val
 * @returns {boolean}
 */
export function isPositive(val: any): val is number {
  return isNumber(val) && val > 0;
}

/**
 * @description 判断是否为奇数
 * @param val
 * @returns {boolean}
 */
export function isOdd(val: any): val is number {
  return isNumber(val) && val % 2 !== 0;
}

/**
 * @description 判断是否为偶数
 * @param val
 * @returns {boolean}
 */
export function isEven(val: any): val is number {
  return isNumber(val) && val % 2 === 0;
}

/**
 * @description 判断是否为未定义
 * @param val
 * @returns {boolean}
 */
export function isUndefined(val: any): val is undefined {
  return val === undefined;
}

/**
 * @description 判断是否为null
 * @param val
 * @returns {boolean}
 */
export function isNull(val: any): val is null {
  return val === null;
}

/**
 * @description 判断是否为null或undefined
 * @param val
 * @returns {boolean}
 */
export function isNil(val: any): val is null | undefined {
  return isUndefined(val) || isNull(val);
}

/**
 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
 * `SyntaxError`, `TypeError`, or `URIError` object.
 */
export function isError(value: any): value is Error {
  if (!isObjectLike(value)) {
    return false;
  }
  const tag = getTag(value);
  return (
    tag === "[object Error]" ||
    tag === "[object DOMException]" ||
    (typeof value.message === "string" && typeof value.name === "string" && !isPlainObject(value))
  );
}

/**
 * @description 判断是否为普通对象
 * @param value
 * @returns {boolean}
 */
export function isPlainObject(value: any): value is object {
  if (!isObjectLike(value) || getTag(value) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(value) === proto;
}

/**
 * @description 判断是否为HTTPS
 * @returns {boolean}
 */
export const isHttps = () => {
  return window.location.protocol.startsWith("https");
};

/**
 * @description 判断是否为浏览器环境
 * @returns {boolean}
 */
export const isClient = typeof window !== "undefined" && typeof document !== "undefined";

/**
 * 判断是否为IOS设备
 * @returns {boolean}
 */
export const isIOS = /* #__PURE__ */ getIsIOS();

function getIsIOS() {
  return (
    isClient &&
    window?.navigator?.userAgent &&
    (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) ||
      // The new iPad Pro Gen3 does not identify itself as iPad, but as Macintosh.
      // https://github.com/vueuse/vueuse/issues/3577
      (window?.navigator?.maxTouchPoints > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent)))
  );
}

/**
 * 文件类型枚举
 */
export enum FileType {
  Video = "Video",
  Image = "Image",
  Pdf = "Pdf",
  Word = "Word",
  Excel = "Excel",
  Ppt = "Ppt",
  Text = "Text",
  Psd = "Psd",
  Zip = "Zip"
}

/**
 * 不同文件类型的扩展名配置
 */
export const FILE_EXTENSIONS: Record<FileType, readonly string[]> = {
  [FileType.Video]: ["mp4", "avi", "rmvb", "rm", "wmv", "mpg", "mpeg", "mov", "mkv", "flv"],
  [FileType.Image]: ["jpg", "jpeg", "png", "gif", "webp", "svg", "bmp"],
  [FileType.Pdf]: ["pdf"],
  [FileType.Word]: ["doc", "docx"],
  [FileType.Excel]: ["xls", "xlsx"],
  [FileType.Ppt]: ["ppt", "pptx"],
  [FileType.Text]: ["txt"],
  [FileType.Psd]: ["psd"],
  [FileType.Zip]: ["zip", "rar", "7z"]
} as const;

/**
 * 创建用于匹配文件扩展名的正则表达式
 * @param extensions 文件扩展名数组
 * @returns 用于匹配文件扩展名的正则表达式
 */
const createExtensionRegex = (extensions: readonly string[]): RegExp => {
  return new RegExp(`\\.(${extensions.join("|")})$`, "i");
};

/**
 * 通用函数，用于检查URL是否匹配特定文件扩展名
 * @param url 要检查的文件URL或文件名
 * @param type 要检查的文件类型
 * @returns 布尔值，表示URL是否匹配该文件类型
 */
const isFileType = (url: string, type: FileType): boolean => {
  if (!isString(url)) return false;
  // 首先通过URL去除查询参数和哈希值
  const baseUrl = url.split("?")[0];
  const regex = createExtensionRegex(FILE_EXTENSIONS[type]);
  return regex.test(baseUrl);
};

/**
 * @description 判断是否为视频
 * @param url 文件链接 或 文件名
 * @returns {boolean}
 */
export const isVideoUrl = (url: string): boolean => isFileType(url, FileType.Video);

/**
 * @description 判断是否为图片
 * @param url 文件链接 或 文件名
 * @returns {boolean}
 */
export const isImageUrl = (url: string): boolean => isFileType(url, FileType.Image);

/**
 * @description 判断是否为PDF
 * @param url 文件链接 或 文件名
 * @returns {boolean}
 */
export const isPDF = (url: string): boolean => isFileType(url, FileType.Pdf);

/**
 * @description 是否为Word文档
 * @param url 文件链接 或 文件名
 * @returns {boolean}
 */
export const isWord = (url: string): boolean => isFileType(url, FileType.Word);

/**
 * @description 是否为Excel文件
 * @param url 文件链接 或 文件名
 * @returns {boolean}
 */
export const isExcel = (url: string): boolean => isFileType(url, FileType.Excel);

/**
 * @description 是否为PPT文件
 * @param url 文件链接 或 文件名
 * @returns {boolean}
 */
export const isPPT = (url: string): boolean => isFileType(url, FileType.Ppt);

/**
 * @description 是否为文本文件
 * @param url 文件链接 或 文件名
 * @returns {boolean}
 */
export const isText = (url: string): boolean => isFileType(url, FileType.Text);

/**
 * @description 是否为PSD文件
 * @param url 文件链接 或 文件名
 * @returns {boolean}
 */
export const isPSD = (url: string): boolean => isFileType(url, FileType.Psd);

/**
 * @description 判断是否为压缩包
 * @param url 文件链接 或 文件名
 * @returns {boolean}
 */
export const isZip = (url: string): boolean => isFileType(url, FileType.Zip);
