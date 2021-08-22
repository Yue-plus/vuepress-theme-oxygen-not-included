<template>
  <div class="overlays">
    <div class="overlays-controller">
      <span class="overlays-controller-title">概览</span>
      <button><img src="../../asset/overlays/oxygen.png" alt="无氧气概览" title="氧气概览"></button>
      <button><img src="../../asset/overlays/power.png" alt="无电力概览" title="电力概览"></button>
      <button><img src="../../asset/overlays/temperature.png" alt="无温度概览" title="电力概览"></button>
      <button><img src="../../asset/overlays/materials.png" alt="无材料概览" title="材料概览"></button>
      <button><img src="../../asset/overlays/lights.png" alt="无光照概览" title="光照概览"></button>
      <button><img src="../../asset/overlays/plumbing.png" alt="无水管概览" title="水管概览"></button>
      <button><img src="../../asset/overlays/ventilation.png" alt="无通风概览" title="通风概览"></button>
      <button><img src="../../asset/overlays/decor.png" alt="无装饰概览" title="装饰概览"></button>
      <button><img src="../../asset/overlays/germ.png" alt="无病菌概览" title="病菌概览"></button>
      <button><img src="../../asset/overlays/farming.png" alt="无耕作概览" title="耕作概览"></button>
      <button><img src="../../asset/overlays/room.png" alt="无房间概览" title="房间概览"></button>
      <button><img src="../../asset/overlays/exosuit.png" alt="无太空服概览" title="太空服概览"></button>
      <button><img src="../../asset/overlays/automation.png" alt="无自动化概览" title="自动化概览"></button>
      <button><img src="../../asset/overlays/conveyor.png" alt="无运输概览" title="运输概览"></button>
      <button><img src="../../asset/overlays/radiation.png" alt="无辐射概览" title="辐射概览"></button>
    </div>
    <div class="overlays-img">
      <img :src="actionImg"  alt="无概览" />
<!--      <template v-for="(value, key) in items">-->
<!--        <img-->
<!--            :class="key"-->
<!--            :src="actionImg"-->
<!--            :alt="'无' + value + '概览'"-->
<!--            :title="value + '概览'"-->
<!--        />-->
<!--      </template>-->
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, toRef } from 'vue'

  export default defineComponent({
    name: 'Overlays',

    props: {
      dir: {
        type: String,
        default: ''
      },
      items: {
        type: Object,
        default: {}
      }
    },

    data() {
      return {
        actionImg: '/OverlaysExample/default.jpg',
        items: {
          oxygen       : '氧气',
          power        : '电力',
          temperature  : '温度',
          materials    : '材料',
          light        : '光照',
          plumbing     : '水管',
          ventilation  : '通风',
          decor        : '装饰',
          germ         : '病菌',
          farming      : '耕作',
          rome         : '房间',
          exosuit      : '太空服',
          automation   : '自动化',
          conveyor     : '运输',
          radiation    : '辐射'
        }
      }
    }
  })
</script>

<style scoped lang="scss">
.overlays-controller {
  background-color: #494949;
  text-align: right;
  padding: 0 16px;
  button {
    width: 42px;
    height: 42px;
    background-color: transparent;
    border: none;
    border-radius: 0;
    &:hover {
      background-color: #e2e0d9;
    }
    img {
      height: 32px;
    }
  }
  .overlays-controller-title {
    color: white;
    line-height: 42px;
    font-size: 18px;
    vertical-align: top;
    padding-right: 10px;
  }
}
</style>