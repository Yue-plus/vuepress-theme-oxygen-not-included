# 内置组件

::: tip
开发中的功能
:::

除 VuePress2 默认主题的 [内置组件](https://vuepress2.netlify.app/zh/reference/default-theme/components.html) 外，
本主题还提供以下内置组件。

## 概览（`Overlays`）

像在游戏中一样提供多视图概览：

```vue
<!-- 概览 -->
<Overlays>
  <Oxygen />      <!-- 氧气 -->
  <Power />       <!-- 电力 -->
  <Temperature /> <!-- 温度 -->
  <Materials />   <!-- 材料 -->
  <Light />       <!-- 光照 -->
  <Plumbing />    <!-- 水管 -->
  <Ventilation /> <!-- 通风 -->
  <Decor />       <!-- 装饰 -->
  <Germ />        <!-- 病菌 -->
  <Farming />     <!-- 耕作 -->
  <Room />        <!-- 房间 -->
  <Exosuit />     <!-- 太空服 -->
  <Automation />  <!-- 自动化 -->
  <Conveyor />    <!-- 运输 -->
  <Radiation />   <!-- 辐射 -->
</Overlays>
```

<Overlays
  dir         = "/OverlaysExample/"
  none        = "default.jpg"
  oxygen      = "oxygen.jpg"
  power       = "power.jpg"
  temperature = "temperature.jpg"
  materials   = "materials.jpg"
  light       = "light.jpg"
  plumbing    = "plumbing.jpg"
  ventilation = "ventilation.jpg"
  decor       = "decor.jpg"
  germ        = "germ.jpg"
  farming     = "farming.jpg"
  room        = "room.jpg"
  exosuit     = "exosuit.jpg"
  automation  = "automation.jpg"
  conveyor    = "conveyor.jpg"
/>

### `<Overlays>`

- Props:
  + dir
    * 类型：`string`
    * 默认值：`'''`（空字符串）
    * 合法值：
      一个可用的 URL，指向一个目录。
