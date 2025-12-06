<template>
  <side-navbar />
  <div id="app">
  <router-view />
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import sideNavbar from "@/components/sideNavbar/sideNavbar.vue";

import Pace from 'pace-js';
import 'pace-js/themes/black/pace-theme-minimal.css'
export default defineComponent({
  components: {
    sideNavbar
  },
  setup() {
    Pace.start();
  }
});
</script>
<style>
#app{
  text-align: center
}
</style>