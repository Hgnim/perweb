export function il_imgLoad(e: Event){
    (e.target as HTMLElement).parentElement?.parentElement?.classList.add('loaded');
}

export function il_imgError(e: Event){
    (e.target as HTMLElement).parentElement?.parentElement?.classList.add('error');
}