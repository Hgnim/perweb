<template>
  <side-navbar />
  <div id="main-page_mainDiv">
  <router-view/>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import sideNavbar from "@/components/SideNavbar.vue";
export default defineComponent({
  components: {
    sideNavbar
  },
  setup() {
  }
});
</script>
<style>
#main-page_mainDiv{
  text-align: center
}
</style>