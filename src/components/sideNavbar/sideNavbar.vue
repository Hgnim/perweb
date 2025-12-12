<template>
  <div id="leftSideNavbar" class="unSelectable">
  <nav ref="sideNavbar" id="sideNavbar" class="navbar navbar-left" :data-bs-theme="theme"
       data-allow-wheel data-allow-touch>
    <div ref="sideNavbar_toggleButton" id="side-navbar_toggle-button" v-on:click="sideNavbar_toggleButton_onClick()">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="css" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left svg-center"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
    </div>
    <div class="navbar-collapse">
      <a class="navbar-brand">Hgnim</a>
      <div class="mb-1"></div>
      <ul class="navbar-nav m-lg-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">主页</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/blog">博客</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/test">测试</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/test2">测试2</router-link>
        </li>
      </ul>
    </div>
  </nav>
  </div>
</template>

<script lang="ts">
import $ from 'jquery';
import {defineComponent, Ref, ref} from 'vue';
import {themeSync} from '@/ts/themeSync';
export default defineComponent({
  setup() {
    const sideNavbar: Ref<HTMLElement | null>=ref(null);
    const sideNavbar_toggleButton: Ref<HTMLElement | null>=ref(null);

    let sideNavbar_toggleButton_toggle: boolean = false;
    function sideNavbar_toggleButton_onClick(): void {
      if (sideNavbar.value == null || sideNavbar_toggleButton.value == null) {
        return;
      }

      switch (sideNavbar_toggleButton_toggle) {
        case true:
          sideNavbar.value.style.width='';
          sideNavbar_toggleButton.value.style.rotate="unset";
          sideNavbar_toggleButton.value.style.left='';
          sideNavbar_toggleButton_toggle = false;
          break;
        case false:
          sideNavbar.value.style.width='0';
          sideNavbar_toggleButton.value.style.rotate="180deg";
          sideNavbar_toggleButton.value.style.left='0';
          sideNavbar_toggleButton_toggle = true;
          break;
      }
    }

    $(function () {
      const windowWidth:number=$(window).width() || -1;
      if (windowWidth<768 && windowWidth !=-1) {
        sideNavbar_toggleButton_onClick();
      }
    });

    const {theme, toggleTheme} = themeSync(); //引入封装的主题逻辑

    return {theme, toggleTheme,sideNavbar_toggleButton_onClick,sideNavbar,sideNavbar_toggleButton};
  }
});
</script>

<style scoped lang="scss">
$navbar-left_width: 5rem;
#leftSideNavbar{
  --sn_transition-time: 1s;
}


.svg-center{
  display: block;margin: auto;
}

.navbar-left {
  position: fixed;
  top: 0;
  left: 0;
  width: $navbar-left_width;
  height: 100vh;
  background-color: var(--bs-navbar-background-color);
  border-right: 2px solid rgba(0,0,0,0.24);
  border-radius: 0 3.82% 61.8% 0;
  box-shadow: 2px 0 10px rgba(0,0,0,0.1);
  z-index: 500;
}


//#region navbar-collapse_scrollbar
//Chrome浏览器的滚动条样式
@mixin navbar-collapse_-webkit-scrollbar{
  width: 5px;//垂直滚动条宽度
  height: 100%;//水平滚动条高度
}
//滚动条滑块
@mixin navbar-collapse_-webkit-scrollbar-thumb{
  background: var(--bs-body-color);
  border-radius: 5px;
  transition: background 0.3s;
}
//滑块悬停
@mixin navbar-collapse_-webkit-scrollbar-thumb_hover{
  background: var(--bs-body-color);
}
//滚动条滑道
@mixin navbar-collapse_-webkit-scrollbar-track{
  background: var(--bs-navbar-active-color);
  border-radius: 5px;
}
//滚动条上下箭头按钮
@mixin navbar-collapse_-webkit-scrollbar-button{
  display: none;//隐藏按钮
}
@mixin navbar-collapse_firefox-scrollbar{
  @-moz-document url-prefix() {//firefox样式隔离，大括号内的样式供firefox浏览器使用
    scrollbar-width: thin; //细滚动条
    scrollbar-color: var(--bs-body-color) transparent; //滑块颜色；滑道颜色
  }
}

.navbar-left .navbar-collapse::-webkit-scrollbar {
  @include navbar-collapse_-webkit-scrollbar;
}
.navbar-left .navbar-collapse::-webkit-scrollbar-thumb {
  @include navbar-collapse_-webkit-scrollbar-thumb;
}
.navbar-left .navbar-collapse::-webkit-scrollbar-thumb:hover {
  @include navbar-collapse_-webkit-scrollbar-thumb_hover;
}
.navbar-left .navbar-collapse::-webkit-scrollbar-track {
  @include navbar-collapse_-webkit-scrollbar-track;
}
.navbar-left .navbar-collapse::-webkit-scrollbar-button {
  @include navbar-collapse_-webkit-scrollbar-button;
}
//#endregion
.navbar-left .navbar-collapse{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: $navbar-left_width;
  margin: calc(24px + 1rem) 0 0 0;
  overflow-x: hidden;
  overflow-y: auto;
  @include navbar-collapse_firefox-scrollbar;
}

.navbar-left .nav-item {
  //margin-right: -2rem;
  text-align: center;
  //padding-right: 1rem;
}

.navbar-left .navbar-brand{
  color: var(--bs-body-color);
  text-align: center;
  width: 100%;
  display: block;
}

.navbar-left .navbar-nav {
  flex-direction: column;
  width: 100%;
}

.navbar-left .nav-link {
  padding: 0.5rem 1rem;
  color:var(--bs-body-color);

  &.router-link-exact-active /*url绝对匹配*/
  {
    background-color: var(--bs-navbar-active-color);
  }
  &.router-link-active /*url父项匹配*/
  {
    background-color: var(--bs-navbar-active-color);
  }
}

.navbar-left .nav-item a{
  text-decoration: none;
}


.navbar-left .nav-link:hover {
  background-color: var(--bs-navbar-hover-color);
}


#sideNavbar{
  transition: width var(--sn_transition-time) ease;
  overflow: hidden;
}

#side-navbar_toggle-button{
  position: fixed;
  width: 24px;
  height: 24px;
  top: 0;
  left: $navbar-left_width;
  margin: 10px;
  stroke: var(--bs-body-color);
  transition: var(--sn_transition-time);
  border-radius: 24px;
  z-index: 501;
}
#side-navbar_toggle-button:hover{
  cursor: pointer;
  background-color: var(--bs-navbar-hover-color);
}

</style>