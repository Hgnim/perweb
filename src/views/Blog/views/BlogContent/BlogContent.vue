<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, ref, type Ref} from "vue";
import blogDataBaseUrl from "@/ts/env/blogDataBaseUrl.ts";

const route = useRoute();

const blogContent:Ref<HTMLDivElement|null>=ref(null);

onMounted(async ()=>{
  if (blogContent.value){
    blogContent.value.innerText=await (await fetch(`${blogDataBaseUrl}/blogs/${route.params.id}/content.md`)).text();
  }
});
</script>

<template>
  <div>ID：{{ route.params.id }}</div>
  <div ref="blogContent"></div>
</template>

<style scoped lang="scss">

</style>