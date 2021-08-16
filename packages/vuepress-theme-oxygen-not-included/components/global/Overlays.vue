<template>
  <div class="overlays">
    <div class="overlays-controller">
      <span class="overlays-controller-title">概览</span>
      <button><img src="../../asset/overlays/oxygen.png" alt="氧气概览" title="氧气概览"></button>
      <button><img src="../../asset/overlays/power.png" alt="电力概览" title="电力概览"></button>
      <button><img src="../../asset/overlays/temperature.png" alt="温度概览" title="电力概览"></button>
      <button><img src="../../asset/overlays/materials.png" alt="材料概览" title="材料概览"></button>
      <button><img src="../../asset/overlays/lights.png" alt="光照概览" title="光照概览"></button>
      <button><img src="../../asset/overlays/plumbing.png" alt="水管概览" title="水管概览"></button>
      <button><img src="../../asset/overlays/ventilation.png" alt="通风概览" title="通风概览"></button>
      <button><img src="../../asset/overlays/decor.png" alt="装饰概览" title="装饰概览"></button>
      <button><img src="../../asset/overlays/germ.png" alt="病菌概览" title="病菌概览"></button>
      <button><img src="../../asset/overlays/farming.png" alt="耕作概览" title="耕作概览"></button>
      <button><img src="../../asset/overlays/room.png" alt="房间概览" title="房间概览"></button>
      <button><img src="../../asset/overlays/exosuit.png" alt="太空服概览" title="太空服概览"></button>
      <button><img src="../../asset/overlays/automation.png" alt="自动化概览" title="自动化概览"></button>
      <button><img src="../../asset/overlays/conveyor.png" alt="运输概览" title="运输概览"></button>
      <button><img src="../../asset/overlays/radiation.png" alt="辐射概览" title="辐射概览"></button>
    </div>
    <div class="overlays-img" v-for="(value, key) in OverlaysItem">
      <img
        :src="src + key + '.jpg'"
        :alt="'无' + value + '信息'"
        v-show="key === 'default'"
      />
<!--      <img :src="src + 'oxygen.jpg'" alt="无氧气概览" />-->
<!--      <img :src="src + 'power.jpg'" alt="无电力概览" />-->
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, h, ref } from 'vue'
  // import type, { Component, VNode } from 'vue'

  export default defineComponent({
    name: 'Overlays',
    props: {
      src: {
        type: String,
        required: false,
        default: '@#@#@#@###@#@#'
      }
    },

    data() {
      return {
        OverlaysItem: {
          default     : "默认",
          oxygen      : "氧气",
          power       : "电力",
          temperature : "温度",
          materials   : "材料",
          light       : "光照",
          plumbing    : "水管",
          ventilation : "通风",
          decor       : "装饰",
          germ        : "病菌",
          farming     : "耕作",
          rome        : "房间",
          exosuit     : "太空服",
          automation  : "自动化",
          conveyor    : "运输",
          radiation   : "辐射"
        },
      }
    },

    setup(_, { slots }) {
      /**
       * 当前选中项的索引
       * index of current active item
       */
      // const overlayIndex = ref(-1)

      // console.log('@@@@@@@@@@@')

      // return () => {
      //   return 'asd';
      // }
    }
  })
</script>

<style lang="scss">
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
