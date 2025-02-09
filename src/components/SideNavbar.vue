<template>
  <!-- 左侧导航栏 -->
  <nav id="sideNavbar" class="navbar navbar-left" :data-bs-theme="theme">
      <div id="side-navbar_toggle-button" v-on:click="sideNavbar_toggleButton_onClick()">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="css" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left svg-center"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
      </div>
    <div class="navbar-collapse">
      <a class="navbar-brand">Hgnim</a>
      <div class="mb-1"></div>
      <ul class="navbar-nav m-lg-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">主页</router-link>
        </li>
        <!--<li class="nav-item">
          <router-link class="nav-link" to="/error">博客</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/demo">测试</router-link>
        </li>-->
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import $ from 'jquery';
import {defineComponent} from 'vue';
import {themeSync} from '@/ts/themeSync';
export default defineComponent({
  setup() {
    let sideNavbar_toggleButton_toggle: boolean = false;
    function sideNavbar_toggleButton_onClick(): void {
      const sn = document.getElementById("sideNavbar");
      const sntb=document.getElementById("side-navbar_toggle-button");
      if (sn == null || sntb == null) {
        return;
      }

      switch (sideNavbar_toggleButton_toggle) {
        case true:
          sn.style.left='0';
          sntb.style.rotate="unset";
          sntb.style.right="0";
          sideNavbar_toggleButton_toggle = false;
          break;
        case false:
          sn.style.left = `-${sn.offsetWidth}px`;
          sntb.style.rotate="180deg";
          sntb.style.right="-44px";
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

    return {theme, toggleTheme,sideNavbar_toggleButton_onClick};
  }
});
</script>

<style lang="css">
.svg-center{
  display: block;margin: auto;
}

.navbar-left {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background-color:   var(--bs-navbar-color);
  border-right: 1px solid var(--bs-border-color);
  padding: 1rem;
  z-index: 500;
}

.navbar-left .navbar-brand{
  color: var(--bs-body-color);
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
  --sn_transition-time: 1s;
  transition: left var(--sn_transition-time) ease;
  overflow: visible;
}

#side-navbar_toggle-button{
  position: absolute;
  width: 24px;
  height: 24px;
  top: 0;
  right: 0;
  margin: 10px;
  stroke: var(--bs-body-color);
  transition: var(--sn_transition-time);
  border-radius: 24px;
}
#side-navbar_toggle-button:hover{
  cursor: pointer;
  background-color: var(--bs-navbar-hover-color);
}
</style>