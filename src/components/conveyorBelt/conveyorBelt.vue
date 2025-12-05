<template>
  <div :style="styleObject" class="conveyor-belt">
  </div>
</template>
<script lang="ts" src="./ts/conveyorBelt.ts"></script>

<!--<style scoped lang="scss">-->
<style lang="scss">
$conveyorBeltWidth: var(--conveyorBeltWidth);
$conveyorBeltHeight: var(--conveyorBeltHeight);
$conveyorBelt_anim-time: var(--conveyorBelt_anim-time);
:export {
  conveyorBeltWidth: $conveyorBeltWidth;
  conveyorBeltHeight: $conveyorBeltHeight;
  conveyorBelt_anim-time: $conveyorBelt_anim-time;
}
@import './scss/conveyorBelt';
</style>