<template>
  <div class="overlays">
    <div class="overlays-controller">
      <span class="overlays-controller-title">概览</span>
      <button v-if="oxygen" @click.stop="switchAction('oxygen')" :class="action === 'oxygen' ? 'action' : ''">
        <img src="../../asset/overlays/oxygen.png" alt="氧气概览" title="氧气概览">
      </button>
      <button v-if="power" @click.stop="switchAction('power')">
        <img src="../../asset/overlays/power.png" alt="电力概览" title="电力概览">
      </button>
      <button v-if="temperature" @click.stop="switchAction('temperature')">
        <img src="../../asset/overlays/temperature.png" alt="温度概览" title="电力概览">
      </button>
      <button v-if="materials" @click.stop="switchAction('materials')">
        <img src="../../asset/overlays/materials.png" alt="材料概览" title="材料概览">
      </button>
      <button v-if="light" @click.stop="switchAction('light')">
        <img src="../../asset/overlays/lights.png" alt="光照概览" title="光照概览">
      </button>
      <button v-if="plumbing" @click.stop="switchAction('plumbing')">
        <img src="../../asset/overlays/plumbing.png" alt="水管概览" title="水管概览">
      </button>
      <button v-if="ventilation" @click.stop="switchAction('ventilation')">
        <img src="../../asset/overlays/ventilation.png" alt="通风概览" title="通风概览">
      </button>
      <button v-if="decor" @click.stop="switchAction('decor')">
        <img src="../../asset/overlays/decor.png" alt="装饰概览" title="装饰概览">
      </button>
      <button v-if="germ" @click.stop="switchAction('germ')">
        <img src="../../asset/overlays/germ.png" alt="病菌概览" title="病菌概览">
      </button>
      <button v-if="farming" @click.stop="switchAction('farming')">
        <img src="../../asset/overlays/farming.png" alt="耕作概览" title="耕作概览">
      </button>
      <button v-if="room" @click.stop="switchAction('room')">
        <img src="../../asset/overlays/room.png" alt="房间概览" title="房间概览">
      </button>
      <button v-if="exosuit" @click.stop="switchAction('exosuit')">
        <img src="../../asset/overlays/exosuit.png" alt="太空服概览" title="太空服概览">
      </button>
      <button v-if="automation" @click.stop="switchAction('automation')">
        <img src="../../asset/overlays/automation.png" alt="自动化概览" title="自动化概览">
      </button>
      <button v-if="conveyor" @click.stop="switchAction('conveyor')">
        <img src="../../asset/overlays/conveyor.png" alt="运输概览" title="运输概览">
      </button>
      <button v-if="radiation" @click.stop="switchAction('radiation')">
        <img src="../../asset/overlays/radiation.png" alt="辐射概览" title="辐射概览">
      </button>
    </div>
    <div class="overlays-img">
      <img v-show="action === 'none'" v-if="none" :src="dir + none" alt="无概览" title="概览" />
      <img v-show="action === 'oxygen'" v-if="oxygen" :src="dir + oxygen" alt="无氧气概览" title="氧气概览" />
      <img v-show="action === 'power'" v-if="power" :src="dir + power"  alt="无电力概览" title="电力概览" />
      <img v-show="action === 'temperature'" v-if="temperature" :src="dir + temperature"  alt="无温度概览" title="温度概览" />
      <img v-show="action === 'materials'" v-if="materials" :src="dir + materials"  alt="无材料概览" title="材料概览" />
      <img v-show="action === 'light'" v-if="light" :src="dir + light"  alt="无光照概览" title="光照概览" />
      <img v-show="action === 'plumbing'" v-if="plumbing" :src="dir + plumbing"  alt="无水管概览" title="水管概览" />
      <img v-show="action === 'ventilation'" v-if="ventilation" :src="dir + ventilation"  alt="无通风概览" title="通风概览" />
      <img v-show="action === 'decor'" v-if="decor" :src="dir + decor"  alt="无装饰概览" title="装饰概览" />
      <img v-show="action === 'germ'" v-if="germ" :src="dir + farming"  alt="无病菌概览" title="病菌概览" />
      <img v-show="action === 'farming'" v-if="farming" :src="dir + farming"  alt="无耕作概览" title="耕作概览" />
      <img v-show="action === 'room'" v-if="room" :src="dir + room"  alt="无房间概览" title="房间概览" />
      <img v-show="action === 'exosuit'" v-if="exosuit" :src="dir + exosuit"  alt="无太空服概览" title="太空服概览" />
      <img v-show="action === 'automation'" v-if="automation" :src="dir + automation"  alt="无自动化概览" title="自动化概览" />
      <img v-show="action === 'conveyor'" v-if="conveyor" :src="dir + conveyor"  alt="无运输概览" title="运输概览" />
      <img v-show="action === 'radiation'" v-if="radiation" :src="dir + radiation"  alt="无辐射概览" title="辐射概览" />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'Overlays',

    props: {
      dir: {
        type: String,
        default: ''
      },
      none        : String,
      oxygen      : String,
      power       : String,
      temperature : String,
      materials   : String,
      light       : String,
      plumbing    : String,
      ventilation : String,
      decor       : String,
      germ        : String,
      farming     : String,
      room        : String,
      exosuit     : String,
      automation  : String,
      conveyor    : String,
      radiation   : String
    },

    methods: {
      switchAction(S) {
        this.action === S ? this.action='none' : this.action=S
      }
    },

    data() {
      return  {
        action: 'none'
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
      cursor: pointer;
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