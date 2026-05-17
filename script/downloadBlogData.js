const logHeader='[downloadBlogData.js] ';

//import degit from "degit";
//批注：使用tiged或degit时会在home目录中留下.degit缓存文件夹，目前暂无解决方案禁止缓存目录的生成或改变缓存路径
// ~/.degit缓存文件夹可以删除
import tiged from "tiged";
import path from "path";
import {fileURLToPath} from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const outputDir = path.resolve(__dirname, '../src/assets/_blogData');

/*const emitter = degit('Hgnim/perweb_blog-data#main', {
    cache: false,//禁用缓存
    force: true,//强制覆盖本地已存在的文件
    verbose: true,//使用详细日志
});*/

console.log(`${logHeader}开始下载博客数据`);

const emitter = tiged('Hgnim/perweb_blog-data/blogs#main', {
    cache: false,
    disableCache: true,//禁用缓存
    force: true,//强制覆盖本地已存在的文件
    verbose: true,//使用详细日志
});

function infoHandler(info){
    console.log(`${logHeader}}${info.message}`);
}

emitter.on('info', infoHandler);

let isSuccess=false;
//重试次数
let restartNum=0;
while (!(isSuccess || restartNum > 50)) {//重试次数过多将跳出
    try {
        await emitter.clone(outputDir);
        isSuccess = true;
    } catch (err) {
        restartNum++;
        console.error(`${logHeader} 下载时发生错误：`, err);
        console.log(`${logHeader} 重新尝试下载，重试次数：${restartNum}`);
    }
}

//emitter.off('info', infoHandler);
if (isSuccess) {
    console.log(`${logHeader}博客数据下载完成`);
}else{
    console.error(`${logHeader}博客数据下载失败`);
}