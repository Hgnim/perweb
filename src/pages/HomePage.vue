<template>
  <div class="py-4">
    <div class="container">
      <div class="row">
        <div class="col-12 mb-2">
          <div class="row">
            <div class="col-6">
              <div class="div-top-center" style="text-align: right;">
                <p>Hi, I'm Hagnimik.</p>
                <p>我是一名自由的个人开发者</p>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <img src="https://avatars.githubusercontent.com/u/112072873" alt="avatar" class="avatar" />
            </div>
          </div>
        </div>
        <div class="col-12 mb-2">
          <div class="row">
            <div class="col-10 offset-1">
              <dl class="title-and-content">
                <dt>Github 提交图表：</dt>
                <dd>
                  <img class="unSelectable" src="https://ghchart.rshah.org/0045c4/Hgnim" alt="Hagnimik's github chart" style="width: 100%;text-align: center" />
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="col-12 mb-2">
          <div class="row">
            <div class="col-10 offset-1" style="position: relative;">
              <div style="position: absolute;width: 100%;height: 100%;z-index: 1;" class="div-left-center"></div>
              <dl class="title-and-content">
                <dt>使用过的语言/涉及的领域：</dt><!--用过并不代表擅长:)-->
                <dd>
                  <div class="div-left-center unSelectable">
                    <conveyorBelt
                        :images="[
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/CS.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/DotNet.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/VueJS-Dark.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/HTML.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Sass.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/CSS.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/TypeScript.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/JavaScript.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Unity-Dark.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Git.svg',
                    ]"
                        :style="{
                      conveyorBeltWidth:'100%',
                      conveyorBeltHeight:'50px',
                      animTime: '8s',
                    }"
                    />
                    <conveyorBelt
                        :images="[
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Git.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Markdown-Dark.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/CPP.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/C.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/NodeJS-Dark.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Nginx.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Bash-Dark.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Docker.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/CS.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/DotNet.svg',
                    ]"
                        :style="{
                      conveyorBeltWidth:'100%',
                      conveyorBeltHeight:'50px',
                      animTime: '8s',
                    }"
                        :obj-num-id="1"
                    />
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import {defineComponent} from 'vue';
import conveyorBelt from "@/components/conveyorBelt/conveyorBelt.vue";
export default defineComponent({
  components: {
    conveyorBelt
  },
  setup() {
  }
});
</script>

<style scoped lang="scss">
.avatar{
  width: 128px;
  height: 128px;
  border-radius: 50%;
}

.backgroudimg{
  position:relative;
  width: 64px;
  height: 64px;
}
.backgroudimg:before{
  content: "";
  background-image: var(--bgi-src);
  background-size: contain;
  width: 64px;
  height: 64px;
  position: absolute;
  left: -50%;
  top: -50%;
  transform: translate(50%,25%);
  z-index: -1;
}

.div-left-center{
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.div-top-center{
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.title-and-content{
  @extend .div-left-center;
  text-align: left;
}
</style>