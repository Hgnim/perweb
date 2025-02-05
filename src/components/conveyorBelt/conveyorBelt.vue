<template>
  <div :style="styleObject" class="conveyor-belt">
    <div class="conveyor">
    </div>
    <div class="conveyor g2">
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent,ref} from 'vue';
export default defineComponent({
  name: 'conveyorBelt',
  props: {
    images:{
      type: Object,
      required: true,
      default: []//图片，数量需为偶数
    },
    style:{
      type: Object,
      required: false,
      default:{
        conveyorBeltWidth:'800px',//传送带宽度
        conveyorBeltHeight:'100px',//传送带高度
        animTime: '16s',//传送带速度
      }
    },
    objNumId:{
      type: Number,
      required: false,
      default:0 //添加目标时寻找指定类的元素时的序号ID，用于多个组件
    }
  },
  methods: {
  },
  computed: {
    styleObject():object {
      return {
        '--conveyorBelt_anim-time': this.style.animTime,
        '--conveyorBeltWidth': this.style.conveyorBeltWidth,
        '--conveyorBeltHeight': this.style.conveyorBeltHeight,
      };
    }
  },
  setup(props) {},
  mounted(){
    for (let i = 0; i < 2; i++) {
      let itemObjs :HTMLElement[]=[];

      for (let j=(this.images.length*i)/2 ;j<this.images.length/(2-i);j++) {
        const itemE:HTMLElement=(()=>{
          const element = document.createElement('div');
          element.className = 'item';
          return element;
        })();
        itemE.append(
            (()=>{
              const element=document.createElement("img");
              element.src = this.images[j];
              return element;
            })()
        );
        itemObjs.push(itemE);
      }
      itemObjs.reverse();//倒转数组，让其按参数中的数组顺序

      const objClass:string= i==0?'.conveyor':'.conveyor.g2';
      itemObjs.forEach(obj => {
        document.querySelectorAll(".conveyor-belt")[this.objNumId]?.querySelectorAll(objClass)[0].append(obj);
      })
    }
  }
});
</script>

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
@import './style.scss';
</style>