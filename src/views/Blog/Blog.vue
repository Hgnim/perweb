<script setup lang="ts">
import {useTitle} from "@vueuse/core";

useTitle('Hagnimik的博客');
</script>

<template>
  <div class="container">
    <div class="row mt-1">
      <div class="col-12 text-center">
        <h1>博客</h1>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-10 mx-auto">
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">title</h5>
            </div>
            <p class="mb-1">summary</p>
            <div class="d-flex w-100 justify-content-end">
              <small class="text-body-secondary">time</small>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>