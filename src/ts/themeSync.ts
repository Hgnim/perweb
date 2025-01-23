import {ref, watch, onMounted, onUnmounted} from 'vue';

export function themeSync() {
    const theme = ref(document.documentElement.getAttribute('data-bs-theme') || 'light'); //从全局<html>标签获取主题状态

    //切换主题函数
    const toggleTheme = () => {
        const newTheme = theme.value === 'light' ? 'dark' : 'light';
        theme.value = newTheme;
        document.documentElement.setAttribute('data-bs-theme', newTheme);//同步到全局<html>标签
    };

    // 监听主题变化并同步到全局 <html> 标签
    watch(theme, (newTheme) => {
        document.documentElement.setAttribute('data-bs-theme', newTheme);
    });


    //使用MutationObserver监听html标签属性变化
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'data-bs-theme') {
                theme.value = (mutation.target as Element).getAttribute('data-bs-theme') || 'light';
            }
        });
    });
    //挂载时启动监听
    onMounted(() => {
        observer.observe(document.documentElement, {attributes: true, attributeFilter: ['data-bs-theme']});
    });
    //卸载时停止监听
    onUnmounted(() => {
        observer.disconnect();
    });

    return {theme, toggleTheme};
}