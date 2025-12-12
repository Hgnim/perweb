<template>
  <div id="home">
    <div
        class="section-container with-transition"
        ref="sectionContainer"
        :style="{ transform: `translateY(${-(currentSection * 100)-100}vh)`/*-100用于兼容负数层*/ }"
    >
      <section id="section-1">
        <div class="container container-main">
          <div class="row animate-wrap">
            <div class="col-12 mb-3 col0">
              <div :ref="(e:HTMLElement|null)=>animElem_import(e,0,4)"
                   class="animate__animated"
              >
                <div class="spinner-border" role="status"></div>
              </div>
              <h3 class="animate__animated"
                  :ref="(e:HTMLElement|null)=>animElem_import(e,0,5)"
              >资源加载中</h3>
            </div>
            <div class="col-12 col1">
              <button type="button" class="btn btn-secondary animate__animated" @click="skipLoadClick()"
                      :ref="(e:HTMLElement|null)=>animElem_import(e,0,6)"
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
                <img :ref="(e:HTMLElement|null)=>animElem_import(e,0,0)" alt="avatar图像加载中" draggable="false"
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
                  <img :ref="(e:HTMLElement|null)=>animElem_import(e,1,0)" alt="Language used图像加载中" draggable="false"
                       class="animate__animated animate__delay-1s"
                       src="https://raw.githubusercontent.com/Hgnim/Hgnim/refs/heads/main/profile-summary-card-output/transparent/2-most-commit-language.svg"/>
                </div>
                <div class="skill col-6 col-lg-12 unSelectable">
                  <img :ref="(e:HTMLElement|null)=>animElem_import(e,1,1)" alt="Skill图像加载中" draggable="false"
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

      <section id="section2">
        <div class="container container-main">
          <div class="row">
            <div class="col-12 col0">
              <div class="title-par animate-wrap">
                <h2 :ref="(e:HTMLElement|null)=>animElem_import(e,2,0)"
                    class="title animate__animated animate__delay-1s"
                >精选产品</h2>
              </div>
              <div class="accordion" id="accordionExample">
                <div :ref="(e:HTMLElement|null)=>animElem_import(e,2,1)" class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                      <span><strong>谧静幽原</strong> Minecraft多人游戏平台</span>
                    </button>
                  </h2>
                  <div id="collapse1" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body"
                         data-allow-wheel data-allow-keydown data-allow-touch>
                      <img alt="图像加载中" class="inset-image mb-3" src="http://cdnjson.com/images/2025/01/15/main2-dark-lowe179e1b3cf5a8293.jpg"><br/>
                      <span>
                        Minecraft多人游戏平台，前往<a href="https://mjyy.top">官网</a>以查看详情。
                      </span>
                    </div>
                  </div>
                </div>
                <div :ref="(e:HTMLElement|null)=>animElem_import(e,2,2)" class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                      <span>定时电源 (TimedPower)</span>
                    </button>
                  </h2>
                  <div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body"
                         data-allow-wheel data-allow-keydown data-allow-touch>
                      <img alt="图像加载中" class="inset-image mb-3" src="http://cdnjson.com/images/2025/02/12/Hgnim_TimedPower_wiki__image13.png"><br/>
                      <span>
                        Windows平台下简约、高效、多功能的定时电源操作工具。<br/>
                        <a href="https://github.com/Hgnim/TimedPower">前往该项目</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div :ref="(e:HTMLElement|null)=>animElem_import(e,2,3)" class="accordion-item">
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
                <div :ref="(e:HTMLElement|null)=>animElem_import(e,2,4)" class="accordion-item">
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
            <div class="col-12 col1 animate-wrap">
              <div :ref="(e:HTMLElement|null)=>animElem_import(e,2,5)"
                   class="card animate__animated animate__delay-1s"
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

<script lang="ts" src="./ts/Home.ts"></script>

<style scoped lang="scss" src="./scss/Home.scss"></style>
<style scoped lang="scss" src="./scss/view-animation.scss"></style>