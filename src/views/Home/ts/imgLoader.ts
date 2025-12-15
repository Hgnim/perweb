export function imgLoad(e: Event){
    (e.target as HTMLElement).classList.add('loaded');
}

export function imgError(e: Event){
    (e.target as HTMLElement).classList.add('error');
}