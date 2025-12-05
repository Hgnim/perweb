<template>
  <side-navbar />
  <div id="app">
  <router-view />
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import sideNavbar from "@/components/sideNavbar/sideNavbar.vue";
export default defineComponent({
  components: {
    sideNavbar
  },
  setup() {
  }
});
</script>
<style>
#app{
  text-align: center
}
</style>