import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import * as dayjs from "dayjs";
// import * as zhCn from 'moment/locale/zh-cn';
import 'dayjs/locale/zh-cn' // ES 2015
import _copy from 'copy-to-clipboard';
import {toast} from "../components/ui/use-toast";

const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function copyClient(text: string) {
  if(_copy(text)) {
    toast({
      title: "拷贝到剪切板成功 (内容如下)",
      description: (!!text && text.length > 100) ? (text.substring(0, 100) + "...") : text,
    })
  }
  else {
    toast({
      title: "拷贝失败",
      description: "未知原因",
    })
  }

}

export function debugMode() {
  return process.env.NODE_ENV == "development";
}
export function prodMode() {
  return process.env.NODE_ENV == "production";
}

export function vercelMode() {
  return process.env.VERCEL == "enabled";
}

export const brownerEnv = () => typeof window !== 'undefined'

export const serverEnv = () => !brownerEnv()


export const momentZh: any = dayjs;



