export const blogData_rootPath:string = "/src/assets/_blogData";
//在构建时扫描文件
export const blogData = import.meta.glob('@/assets/_blogData/**/*.{json,md}', {
    eager: true,//一次性加载，构建时被加载并内联到模块中
    query: '?raw',//纯文本加载
    import: 'default'//默认导出
});