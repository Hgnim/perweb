<template>
  <side-navbar />
  <div id="view">
  <router-view />
  </div>
</template>
<script setup lang="ts">
import sideNavbar from "@/components/sideNavbar/sideNavbar.vue";

if (!import.meta.env.SSR) {
  import('pace-js').then((module) => {
    const Pace = module.default;
    Pace.start();
  });
}
</script>

<style scoped lang="css" src='pace-js/themes/black/pace-theme-minimal.css'></style>
<style scoped lang="scss">
#app{
}
</style>
<style lang="scss">
#app{
  text-align: center;
}
</style>