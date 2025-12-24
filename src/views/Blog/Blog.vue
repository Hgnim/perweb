<script setup lang="ts">
import {useTitle} from "@vueuse/core";

useTitle('Hagnimik的博客');
</script>

<template>
  <div style="
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  ">
    <div class="animate-wrap"
         style="
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            "
    >
      <h3 class="animate__animated animate__rubberBand animate__infinite">此页面正在开发中，尽请期待 :)</h3>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>