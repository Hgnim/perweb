<template>
  <div id="home">
    <div id="sect-prog" class="home-const animate-wrap">
      <div ref="sectionProgress" class="progress animate__animated animate__fadeInDown animate__delay-1s"
           role="progressbar" aria-label="Example with label"
           aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar" style="width: 0">0/4</div>
      </div>
    </div>
    <div
        class="section-container home-const"
        ref="sectionContainer"
        :style="{ transform: `translateY(${-(currentSection * 100)-100}vh)`/*-100用于兼容负数层*/ }"
    >
      <section id="section-1">
        <div class="container container-main">
          <div class="row animate-wrap">
            <div class="col-12 mb-3 col0">
              <div :ref="(e)=>animElem_import(e as HTMLElement|null,0,4)"
                   class="animate__animated"
              >
                <div class="spinner-border" role="status"></div>
              </div>
              <h3 class="animate__animated"
                  :ref="(e)=>animElem_import(e as HTMLElement|null,0,5)"
              >资源加载中</h3>
            </div>
            <div class="col-12 col1">
              <button type="button" class="btn btn-secondary animate__animated" @click="skipLoadClick()"
                      :ref="(e)=>animElem_import(e as HTMLElement|null,0,6)"
              >后台加载</button>
            </div>
          </div>
        </div>
      </section>
      <section id="section0">
        <div class="container">
          <div class="row row0">
            <div class="avatar-col col-xs-12 col-sm-5">
              <div class="avatar unSelectable">
                <div :ref="(e)=>animElem_import(e as HTMLElement|null,0,0)"
                     class="img-loader"
                >
                  <div class="img-loader-animation"></div>
                  <div class="img-box">
                    <img alt="avatar" draggable="false"
                         @load="il_imgLoad" @error="il_imgError"
                         style="background-color: white"
                         src="https://fastly.jsdelivr.net/gh/Hgnim/Hgnim@latest/avatar/Hgnim.svg"/><!--class="roll-in-2"--><!-- https://raw.githubusercontent.com/Hgnim/Hgnim/master/avatar/Hgnim.svg -->
                  </div>
                </div>
              </div>
            </div>
            <div class="title-col col-xs-12 col-sm-7">
              <div class="terminal-wrap ter_def-color">
                <h4 :ref="(e)=>animElem_import(e as HTMLElement|null,0,1)" class="title terminal-prompt underline terminal-border"></h4>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="animate-wrap hover-wrap">
              <button :ref="(e)=>animElem_import(e as HTMLElement|null,0,2)" @click="section0Continue_click()"
                      class="continue hvr-sink animate__animated">
                <span>向下滑动或点击以继续</span><br>
                <!--suppress HtmlDeprecatedAttribute -->
                <svg :ref="(e)=>animElem_import(e as HTMLElement|null,0,3)" class=""
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" preserveAspectRatio="none">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section1">
        <div class="container container-main">
          <div class="row row-main">
            <div class="col-12 col-lg-6">
              <div class="row row0 animate-wrap">
                <div class="lang-used col-6 col-lg-12 unSelectable">
                  <div :ref="(e)=>animElem_import(e as HTMLElement|null,1,0)"
                       class="img-loader
                              animate__animated animate__delay-1s"
                  >
                    <div class="img-loader-animation"></div>
                    <div class="img-box">
                      <img alt="Language used" draggable="false"
                           @load="il_imgLoad" @error="il_imgError"
                           src="https://fastly.jsdelivr.net/gh/Hgnim/Hgnim@latest/profile-summary-card-output/transparent/2-most-commit-language.svg"/><!-- https://raw.githubusercontent.com/Hgnim/Hgnim/refs/heads/main/profile-summary-card-output/transparent/2-most-commit-language.svg -->
                    </div>
                  </div>
                </div>
                <div class="skill col-6 col-lg-12 unSelectable">
                  <div :ref="(e)=>animElem_import(e as HTMLElement|null,1,1)"
                       class="img-loader
                              animate__animated animate__delay-1s"
                  >
                    <div class="img-loader-animation"></div>
                    <div class="img-box">
                      <img alt="Skill" draggable="false"
                           @load="il_imgLoad" @error="il_imgError"
                           src="https://skillicons.dev/icons?perline=6&theme=dark&i=cs,ts,js,scss,css,vue,html,md,dotnet,bootstrap,docker,nginx,git,github,webpack,nodejs,npm,sqlite,visualstudio,vscode,webstorm,vim,bash,linux,windows,debian,raspberrypi,ubuntu"/>
                    </div>
                </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="row row1">
                <div class="col-6">
                  <div :ref="(e)=>animElem_import(e as HTMLElement|null,1,2)" class="card">
                    <div class="card-header">
                      <h5 class="card-header- n0">关于我</h5>
                    </div>
                    <div class="card-body" data-allow-wheel data-allow-keydown data-allow-touch>
                    <span>自由软件开发者，热爱计算机技术。熟练使用Windows/Linux操作系统，能独立完成从桌面到移动端的应用开发。</span>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div :ref="(e)=>animElem_import(e as HTMLElement|null,1,3)" class="card">
                    <div class="card-header">
                      <h5 class="card-header- n1">技术专长</h5>
                    </div>
                    <div class="card-body" data-allow-wheel data-allow-keydown data-allow-touch>
                    <span><strong>主攻 C# 生态：</strong></span>
                    <ul>
                      <li>桌面开发：WinForm、WPF</li>
                      <li>跨平台开发：Linux、Xamarin.Android</li>
                      <li>游戏开发：Godot-dotnet、Unity</li>
                      <li>Web开发：ASP.NET Core MVC</li>
                    </ul>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div :ref="(e)=>animElem_import(e as HTMLElement|null,1,4)" class="card">
                    <div class="card-header">
                      <h5 class="card-header- n2">Web技能</h5>
                    </div>
                    <div class="card-body" data-allow-wheel data-allow-keydown data-allow-touch>
                      <ul>
                        <li>掌握HTML5、CSS3、JavaScript</li>
                        <li>熟悉Sass预处理器与js的超集TypeScript</li>
                        <li>熟练使用Vue.js构建响应式界面</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div :ref="(e)=>animElem_import(e as HTMLElement|null,1,5)" class="card">
                    <div class="card-header">
                      <h5 class="card-header- n3">工程能力</h5>
                    </div>
                    <div class="card-body" data-allow-wheel data-allow-keydown data-allow-touch>
                      <ul>
                        <li>熟练使用Git进行版本控制（分支管理、冲突解决）</li>
                        <li>具备基础的计算机硬件维护能力</li>
                        <li>主导多个小型开源项目并积极参与社区贡献</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section2">
        <div class="container container-main">
          <div class="row">
            <div class="col-12 col0 animate-wrap">
              <h2 :ref="(e)=>animElem_import(e as HTMLElement|null,2,0)"
                  class="title animate__animated animate__delay-1s"
              >精选产品</h2>
            </div>
            <div class="col-12 col1">
              <div class="accordion" id="accordionExample">
                <div :ref="(e)=>animElem_import(e as HTMLElement|null,2,1)" class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                      <span><strong>谧静幽原</strong> Minecraft多人游戏平台</span>
                    </button>
                  </h2>
                  <div id="collapse1" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body"
                         data-allow-wheel data-allow-keydown data-allow-touch>
                      <div class="img-loader
                                  inset-image mb-3"
                      >
                        <div class="img-loader-animation"></div>
                        <div class="img-box">
                          <!--suppress HttpUrlsUsage -->
                          <img alt="img"
                               @load="il_imgLoad" @error="il_imgError"
                               src="http://cdnjson.com/images/2025/01/15/main2-dark-lowe179e1b3cf5a8293.jpg">
                        </div>
                      </div>
                      <span>
                        Minecraft多人游戏平台，前往<a href="https://mjyy.top">官网</a>以查看详情。
                      </span>
                    </div>
                  </div>
                </div>
                <div :ref="(e)=>animElem_import(e as HTMLElement|null,2,2)" class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                      <span>定时电源 (TimedPower)</span>
                    </button>
                  </h2>
                  <div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body"
                         data-allow-wheel data-allow-keydown data-allow-touch>
                      <div class="img-loader
                                  inset-image mb-3"
                      >
                        <div class="img-loader-animation"></div>
                        <div class="img-box">
                          <!--suppress HttpUrlsUsage -->
                          <img alt="img"
                               @load="il_imgLoad" @error="il_imgError"
                               src="http://cdnjson.com/images/2025/02/12/Hgnim_TimedPower_wiki__image13.png">
                        </div>
                      </div>
                      <span>
                        Windows平台下简约、高效、多功能的定时电源操作工具。<br/>
                        <a href="https://github.com/Hgnim/TimedPower">前往该项目</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div :ref="(e)=>animElem_import(e as HTMLElement|null,2,3)" class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                      <span>按键输入宏 (KeyInputMacro)</span>
                    </button>
                  </h2>
                  <div id="collapse3" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body"
                         data-allow-wheel data-allow-keydown data-allow-touch>
                      <span>
                        Windows平台下通过脚本对指定窗口进行按键操作。<br>
                        <a href="https://github.com/Hgnim/KeyInputMacro">前往该项目</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div :ref="(e)=>animElem_import(e as HTMLElement|null,2,4)" class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                      <span>我的世界服务器玩家数据文件管理器 (MinecraftServerPlayerDataManager)</span>
                    </button>
                  </h2>
                  <div id="collapse4" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body"
                         data-allow-wheel data-allow-keydown data-allow-touch>
                      在多个平台帮助所有者更好的管理服务端中玩家的数据文件。<br/>
                      <a href="https://github.com/Hgnim/MinecraftServerPlayerDataManager">前往该项目</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section3">
        <div class="container container-main">
          <div class="row">
            <div class="col-12 col0 unSelectable animate-wrap">
              <div :ref="(e)=>animElem_import(e as HTMLElement|null,3,0)"
                   class="img-loader
                          animate__animated animate__delay-1s"
              >
                <div class="img-loader-animation"></div>
                <div class="img-box">
                  <img alt="snake" draggable="false"
                       @load="il_imgLoad" @error="il_imgError"
                       src="https://fastly.jsdelivr.net/gh/Hgnim/Hgnim@latest/snake/github-snake-dark.svg" /><!-- https://raw.githubusercontent.com/Hgnim/Hgnim/refs/heads/main/snake/github-snake-dark.svg -->
                </div>
              </div>
            </div>
            <div class="col-12 col1 animate-wrap hover-wrap">
              <div :ref="(e)=>animElem_import(e as HTMLElement|null,3,1)"
                   class="card animate__animated animate__delay-1s hvr-round-corners"
              >
                <div class="card-body" data-allow-wheel data-allow-keydown data-allow-touch>
                  <h5><strong>联系我</strong></h5>
                  <span>电子邮箱：<a href="mailto:hgn1m@outlook.com">hgn1m@outlook.com</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import {il_imgLoad, il_imgError} from "./ts/imgLoader";
import {pageScrollPublicVar, pageScroll} from './ts/pageScroll';
import {elementAnimationAction, elementAnimation} from "./ts/elementAnimation.ts";
import {useTitle} from "@vueuse/core";

const {loadDone,currentSection,sectionProgress}=pageScrollPublicVar();
const {doAnim,animElem_import}=elementAnimationAction(currentSection);
const {scrollToPage}=pageScroll(loadDone,currentSection,sectionProgress,doAnim);
const {skipLoadClick,section0Continue_click}=elementAnimation(doAnim,loadDone,scrollToPage);

useTitle('Hagnimik的个人网页');
</script>

<style scoped lang="scss" src="./scss/Home.scss"></style>
<style scoped lang="scss" src="./scss/view-animation.scss"></style>

<style scoped lang="scss" src="./scss/imgLoader.scss"></style>