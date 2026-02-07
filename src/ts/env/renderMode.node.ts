import type {RenderMode} from "./renderMode.type.ts";

const renderMode:RenderMode=process.env.VITE_RENDER_MODE as RenderMode;

export default renderMode;