//当前模式
export const mode:string|undefined = process.env.NODE_ENV;
//当前是否为生产模式
export const isProd:boolean|undefined =
    mode!==undefined
        ? mode == 'production'
        : undefined
;
//当前是否为开发模式
export const isDev:boolean|undefined =
    mode!==undefined
        ? mode == 'development'
        : undefined
;