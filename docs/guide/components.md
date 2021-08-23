# 内置组件

::: tip
开发中的功能
:::

除 VuePress2 默认主题的 [内置组件](https://vuepress2.netlify.app/zh/reference/default-theme/components.html) 外，
本主题还提供以下内置组件。

## 概览（`<Overlays>`）

像在游戏中一样提供多视图概览：

- Props:
  + `dir`
    * 类型：`string`
    * 默认值：`''`（空字符串）
    * 合法值：
      一个可用的 URL 或一个目录。
  + `none` |
    `oxygen` |
    `power` |
    `temperature` |
    `materials` |
    `light` |
    `plumbing` |
    `ventilation` |
    `decor` |
    `germ` |
    `farming` |
    `room` |
    `exosuit` |
    `automation` |
    `conveyor`
    * 类型：`string`
    * 默认值：无（`undefined`）
    * 合法值：
      文件路径、文件名或 URL。

**输入：**

```vue
<!-- 对齐只是为了好看 233333 -->
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
```

**输出：**

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
