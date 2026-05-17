<script setup lang="ts">
import {useTitle} from "@vueuse/core";
import {type BlogInfo, blogListGeter} from "@/views/Blog/ts/blog.ts";
import {onMounted, ref, type Ref} from "vue";
import {getFromNowTime} from "@/utils/date.ts";
import {useRoute} from "vue-router";

useTitle('Hagnimik的博客');

const route = useRoute();

const {init:blgInit,getBlogList,reset:resetBlg}=blogListGeter();

let blogTypesFilter:string[]=['all'];
//更改blogTypesFilter的函数，对值进行处理
function blogTypesFilter_set(value:string|undefined){
  if (value!=undefined && value!=''){
    const source= value.toString().split(',');
    const ret:string[]=[];
    source.forEach((s)=>{
      ret.push(s.trim());//去掉开头与末尾的空格
    });
    blogTypesFilter = ret;
  }else blogTypesFilter = ['all'];
}

const blogList:Ref<BlogInfo[]>=ref([]);
const blogTypeInput:Ref<HTMLInputElement|null> = ref(null);
//const blogTypeInputApply:Ref<HTMLInputElement|null> = ref(null);

function getBL(){
  getBlogList(10,blogTypesFilter).then((val)=>{
    if (val!=null){
      val.forEach((v)=>{
        blogList.value.push(v);//使用push减小性能开销
      });
    }
  });
}

function resetBlogList(){
  resetBlg();
  blogList.value=[];
}

onMounted(()=>{
  blogTypesFilter_set(route.query.types?.toString());//获取url参数
  blgInit().then(()=>{//初始化与获取列表
    getBL();
  });
  if (blogTypeInput.value){
    let output='';
    for (let i=0;i<blogTypesFilter.length;i++){
      output+=blogTypesFilter[i]!.toString();
      if (i+1<blogTypesFilter.length)
        output+=', ';
    }
    blogTypeInput.value.value=output;
  }
});

function blogTypeInputApply_click(){
  resetBlogList();
  blogTypesFilter_set(blogTypeInput.value?.value);
  getBL();
}
</script>

<template>
  <div class="container">
    <div class="row mt-1">
      <div class="col-4">
      </div>
      <div class="col-4 text-center">
        <h1>博客</h1>
      </div>
      <div class="col-4 d-flex align-items-center">
        <div class="input-group">
          <input ref="blogTypeInput" @keyup.enter="blogTypeInputApply_click"
                 type="text" class="form-control" placeholder="博客类型输入">
          <button class="btn btn-outline-secondary" type="button"
                  @click="blogTypeInputApply_click" >类型筛选</button><!--ref="blogTypeInputApply"-->
        </div>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-10 mx-auto">
        <div class="list-group">
          <router-link v-for="(bi,index) in blogList" :key="index"
                       :to="{ name: `blogContent-${bi.id}` }" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{{bi.title}}</h5>
            </div>
            <p class="mb-1">{{bi.summary}}</p>
            <div class="d-flex w-100 justify-content-end">
              <small class="text-body-secondary">{{getFromNowTime(bi.time)}}</small>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>