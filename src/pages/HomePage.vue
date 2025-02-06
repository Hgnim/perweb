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
        <div class="col-12 mb-2" >
          <div class="row" style="position: relative">
            <div class="col-10 offset-1" style="border: 2px solid var(--bs-border-color);border-radius: 20px;position: absolute;height: 100%"><!--边框--></div>
            <div class="col-11 offset-1">
              <h6 style="color:var(--bs-border-opacity);opacity: 0.006;position: absolute;">用过不代表精通</h6>
              <h5 style="color:var(--bs-border-opacity);text-align: left;margin-top: 8px">技能：</h5>
            </div>
            <div class="col-10 offset-1" style="position: relative;">
              <div style="position: absolute;width: 100%;height: 100%;z-index: 1;" class="div-left-center"></div>
              <dl class="title-and-content unSelectable">
                <dt>使用的语言/涉及的领域：</dt>
                <dd>
                  <div class="div-left-center">
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
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Markdown-Dark.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Webpack-Dark.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/CPP.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/C.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/NodeJS-Dark.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Nginx.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Bash-Dark.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Docker.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Bootstrap.svg',
                    ]"
                        :style="{
                      conveyorBeltWidth:'100%',
                      conveyorBeltHeight:'50px',
                      animTime: '10s',
                    }"
                    />
                  </div>
                </dd>
              </dl>
            </div>
            <div class="col-10 offset-1" style="position: relative;">
              <div style="position: absolute;width: 100%;height: 100%;z-index: 1;" class="div-left-center"></div>
              <dl class="title-and-content unSelectable">
                <dt>使用的平台/工具：</dt>
                <dd>
                  <div class="div-left-center">
                    <conveyorBelt
                        :images="[
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/VisualStudio-Dark.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/VSCode-Dark.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/WebStorm-Dark.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Github-Dark.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Npm-Dark.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Photoshop.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Premiere.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/VIM-Dark.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Audition.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Blender-Dark.svg',
                    ]"
                        :style="{
                      conveyorBeltWidth:'100%',
                      conveyorBeltHeight:'50px',
                      animTime: '18s',
                    }"
                        :obj-num-id="1"
                    />
                  </div>
                </dd>
              </dl>
            </div>
            <div class="col-10 offset-1" style="position: relative;">
              <div style="position: absolute;width: 100%;height: 100%;z-index: 1;" class="div-left-center"></div>
              <dl class="title-and-content unSelectable">
                <dt>使用的操作系统：</dt>
                <dd>
                  <div class="div-left-center">
                    <conveyorBelt
                        :images="[
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Windows-Dark.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Linux-Dark.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Debian-Dark.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/RaspberryPi-Dark.svg',
                      'https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/Ubuntu-Dark.svg',
                    ]"
                        :style="{
                      conveyorBeltWidth:'100%',
                      conveyorBeltHeight:'50px',
                      animTime: '25s',
                    }"
                        :obj-num-id="2"
                        :wait-next-time="2000"
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