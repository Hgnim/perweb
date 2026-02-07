import renderMode from "@/ts/env/renderMode.ts";

export const createApp:any=async ()=>{
    switch (renderMode){
        case 'spa':
        case 'spa-hash': {
            const module = await import("@/main-spa.ts");
            return module.default();
        }
        case 'ssg': {
            const module = await import("@/main-ssg.ts");
            return await module.default().createApp();
        }
        default:
            throw new Error(`Unknown RENDER_MODE: ${renderMode}`);
    }
};
createApp();