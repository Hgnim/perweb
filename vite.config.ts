import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import postcssPrefixwrap from 'postcss-prefixwrap';
import renderMode from "./src/ts/env/renderMode.node.ts";
import {isDev, isProd, mode} from "./src/ts/env/packMode.node.ts";
import fs from 'fs';
import {createHtmlPlugin} from "vite-plugin-html";
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";

const distPath=path.resolve(__dirname, 'dist');

// https://vite.dev/config/
export default defineConfig(({}) => {
    console.log(`当前模式：${mode}\nisDev: ${isDev}\nisProd: ${isProd}`);
    console.log(`当前渲染模式：${renderMode}`);

    return {
        plugins: [
            vue(),
            createHtmlPlugin({
                minify: true,
            }),
            createSvgIconsPlugin({
                iconDirs: [//获取svg的目录
                    path.resolve(__dirname, 'src/assets/_svg'),
                ],
                symbolId: 'svg-[dir]-[name]',
                customDomId: '__svg__icons__dom__',
            }),
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            }
        },
        base: '',
        build: {
            outDir: 'dist',
        },
        css: {
            preprocessorOptions: {
                scss: {
                    //静默警告，避免bootstrap报一大堆警告
                    quietDeps: true,//静默所有依赖警告
                    silenceDeprecations: [
                        'import',//静默@import的警告
                        'color-functions',//静默red()/blue()的警告
                        'global-builtin',//静默mix()等函数的警告
                        'if-function',//静默if()的警告
                    ]
                }
            },
            postcss: {
                plugins: [
                    postcssPrefixwrap(//https://terminalcss.xyz/
                        '.terminal-wrap',
                        {
                            //@ts-expect-error 其支持正则表达式，但类型定义为string[]，故可忽略
                            whitelist: [/node_modules[\\\/]terminal\.css/] //as unknown as string[]
                        }
                    ),
                    postcssPrefixwrap(//https://animate.style/
                        '.animate-wrap',
                        {
                            //@ts-expect-error 其支持正则表达式，但类型定义为string[]，故可忽略
                            whitelist: [/node_modules[\\\/]animate\.css/]
                        }
                    ),
                    postcssPrefixwrap(//http://ianlunn.github.io/Hover/
                        '.hover-wrap',
                        {
                            //@ts-expect-error 其支持正则表达式，但类型定义为string[]，故可忽略
                            whitelist: [/node_modules[\\\/]hover\.css/]
                        }
                    ),
                ],
            },
        },
        ssgOptions: renderMode == 'ssg' ? {
            onFinished() {
                {
                    const targetPath = path.join(distPath, '.vite');
                    if (fs.existsSync(targetPath)) {
                        fs.rmSync(targetPath, {recursive: true, force: true});
                        console.log(`[vite.config.ts] 已删除${targetPath}`);
                    }
                }
            }
        } : {},
    }
})