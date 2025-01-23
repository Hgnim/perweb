<template>
  <div class="py-4">
    <div class="container">
      <div class="row">
        <div class="col-12 mb-2">
          <img src="https://avatars.githubusercontent.com/u/112072873" alt="avatar" class="avatar" />
        </div>
        <div class="col-12 mb-2">
          <dl class="centerAlign_center">
            <dt>Github 提交图表:</dt>
            <dd>
              <img class="unSelectable" src="https://ghchart.rshah.org/0045c4/Hgnim" alt="Hagnimik's github chart"/>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
  setup() {
  }
});
</script>

<style>
.avatar{
  width: 128px;
  height: 128px;
  border-radius: 50%;
}
.centerAlign_center{
  position: absolute;
  text-align: left;
  left: 50%;
  transform: translateX(-50%);
}
</style>

<style>

</style>