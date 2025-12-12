<template>
  <div id="home">
    <div
        class="section-container with-transition"
        ref="sectionContainer"
        :style="{ transform: `translateY(${-(currentSection * 100)-100}vh)`/*-100用于兼容负数层*/ }"
    >
      <section id="section-1">
        <button @click="skipLoadClick()">跳过加载</button>
      </section>
      <section id="section0">
        <div class="container">
          <div class="row row0">
            <div class="avatar-col col-xs-12 col-sm-5">
              <div class="avatar unSelectable">
                <img :ref="(e:HTMLElement|null)=>animElem_import(e,0,0)" alt="avatar" draggable="false"
                     src="https://avatars.githubusercontent.com/u/112072873"/><!--class="roll-in-2"-->
              </div>
            </div>
            <div class="title-col col-xs-12 col-sm-7">
              <div class="terminal-wrap ter_def-color">
                <h4 :ref="(e:HTMLElement|null)=>animElem_import(e,0,1)" class="title terminal-prompt underline terminal-border"></h4>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="animate-wrap hover-wrap">
              <button :ref="(e:HTMLElement|null)=>animElem_import(e,0,2)" @click="section0Continue_click()"
                      class="continue hvr-sink animate__animated">
                <span>向下滑动或点击以继续</span><br>
                <!--suppress HtmlDeprecatedAttribute -->
                <svg :ref="(e:HTMLElement|null)=>animElem_import(e,0,3)" class=""
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
                  <img :ref="(e:HTMLElement|null)=>animElem_import(e,1,0)" alt="Language used" draggable="false"
                       class="animate__animated animate__delay-1s"
                       src="https://raw.githubusercontent.com/Hgnim/Hgnim/refs/heads/main/profile-summary-card-output/transparent/2-most-commit-language.svg"/>
                </div>
                <div class="skill col-6 col-lg-12 unSelectable">
                  <img :ref="(e:HTMLElement|null)=>animElem_import(e,1,1)" alt="Skill" draggable="false"
                       class="animate__animated animate__delay-1s"
                       src="https://skillicons.dev/icons?perline=6&theme=dark&i=cs,ts,js,scss,css,vue,html,md,dotnet,bootstrap,docker,nginx,git,github,webpack,nodejs,npm,sqlite,visualstudio,vscode,webstorm,vim,bash,linux,windows,debian,raspberrypi,ubuntu"/>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="row row1">
                <div class="col-6">
                  <div :ref="(e:HTMLElement|null)=>animElem_import(e,1,2)" class="card">
                    <div class="card-header">
                      <h5 class="card-header- n0">关于我</h5>
                    </div>
                    <div class="card-body" data-allow-wheel data-allow-keydown data-allow-touch>
                    <span>自由软件开发者，热爱计算机技术。熟练使用Windows/Linux操作系统，能独立完成从桌面到移动端的应用开发。</span>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div :ref="(e:HTMLElement|null)=>animElem_import(e,1,3)" class="card">
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
                  <div :ref="(e:HTMLElement|null)=>animElem_import(e,1,4)" class="card">
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
                  <div :ref="(e:HTMLElement|null)=>animElem_import(e,1,5)" class="card">
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

      <section>
      </section>

      <section>
      </section>
    </div>
  </div>
</template>

<script lang="ts" src="./ts/Home.ts"></script>

<style scoped lang="scss" src="./scss/Home.scss"></style>
<style scoped lang="scss" src="./scss/view-animation.scss"></style>