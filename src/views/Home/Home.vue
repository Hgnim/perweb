<template>
  <div id="view">
    <div
        class="section-container with-transition"
        ref="sectionContainer"
        :style="{ transform: `translateY(${-(currentSection * 100)}vh)` }"
    >
      <section id="section0">
        <div class="container">
          <div class="row row0">
            <div class="col-5">
              <div class="avatar">
                <img :ref="(e:HTMLElement|null)=>animElem_import(e,0,0)" src="https://avatars.githubusercontent.com/u/112072873" alt="avatar"/><!--class="roll-in-2"-->
              </div>
            </div>
            <div class="col-7">
              <div class="terminal-wrap ter_def-color">
                <h4 :ref="(e:HTMLElement|null)=>animElem_import(e,0,1)" class="title terminal-prompt underline terminal-border">简于壳，精于核，致力于自由</h4>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="animate-wrap hover-wrap">
              <button :ref="(e:HTMLElement|null)=>animElem_import(e,0,2)" @click="section0Continue_click()"
                      class="continue hvr-sink animate__animated animate__fast">
                <span>向下滑动或点击以继续</span><br>
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

      <section>
        <div class="animate-wrap">
          <h2 class="animate__animated animate__bounce">test</h2>
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