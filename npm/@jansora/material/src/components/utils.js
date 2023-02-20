import * as dayjs from "dayjs";
// import * as zhCn from 'moment/locale/zh-cn';
import 'dayjs/locale/zh-cn' // ES 2015
const relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

export const momentZh = dayjs;



/**
 * <Description> <br>
 *
 * @author zhang.yangyuan (jansora)
 2020/12/17 13:39:33
 */
export const IsNumber = s => /^\d+$/.test(s);

export const COLORS = [
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink',
    'brown',
    'grey',
    'black',
];

export const formatHighlightLanguage = (fileName) => {
    const fileType = fileName.split(".")[fileName.split(".").length - 1]
    switch (fileType) {
        case "svg":
            return "xml";
        case "js":
            return "javascript";
        case "py":
            return "python";
        case "hbs":
            return "html";
        default:
            return fileType;
    }
}