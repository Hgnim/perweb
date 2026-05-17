//博客数据的基url，用于获取还没有拉取到本地的博客
//批注：预渲染只能渲染已经下载到本地的博客
const blogDataBaseUrl:string|undefined = import.meta.env.VITE_BLOG_DATA_BASE_URL;

export default blogDataBaseUrl;