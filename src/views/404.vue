<script setup lang="ts">
import {useTitle} from "@vueuse/core";

useTitle('未找到页面');
</script>

<template>
<div id="code404-main" class="d-flex align-items-center justify-content-center">
  <div>
    <strong>未找到指定页面</strong>
  </div>
</div>
</template>

<style scoped lang="scss">
#code404-main{
  height: 100vh;
}
</style>