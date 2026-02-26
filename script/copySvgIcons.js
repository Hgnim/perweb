const logHeader='[copySvgIcons.js] ';

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const iconsName = [//需要复制的图标名
    'arrow-bar-left'
];
const sourceDir = path.resolve(__dirname, '../node_modules/bootstrap-icons/icons');
const targetDir = path.resolve(__dirname, '../src/assets/_svg/bsi');

if (!fs.existsSync(targetDir)) {//检查目录是否存在
    fs.mkdirSync(targetDir, { recursive: true });//递归创建目标目录
    console.log(`${logHeader}'${targetDir}'目标目录不存在，已创建`);
}else console.log(`${logHeader}'${targetDir}'目标目录存在`);

iconsName.forEach(iconName => {
    const sourceFile = path.join(sourceDir, `${iconName}.svg`);
    const targetFile = path.join(targetDir, `${iconName}.svg`);

    if (fs.existsSync(sourceFile)) {
        try {
            fs.copyFileSync(sourceFile, targetFile);
            console.log(`${logHeader}文件复制成功'${sourceFile}'->'${targetFile}'`)
        } catch (error) {
            console.error(`${logHeader}文件复制失败'${sourceFile}'-/>'${targetFile}'，错误：${error.message}`)
        }
    }
    else console.warn(`${logHeader}源文件'${sourceFile}'未找到`);
})

console.log(`${logHeader}任务完成`)