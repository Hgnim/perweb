import {marked} from "marked";
import blogDataBaseUrl from "@/ts/env/blogDataBaseUrl.ts";

export default async function (sourceStr:string){
    return marked(
        sourceStr
            .replace('%%%viteBlogDataBaseUrl%%%',blogDataBaseUrl!)//将markdown中的变量字符串替换成值
    );
}