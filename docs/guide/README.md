# 文档：在开始之前

在开始之前请确保依赖环境正常：

- [Node.js v12+](https://nodejs.org/)
- [Yarn v1 classic](https://classic.yarnpkg.com/zh-Hans/) （可选）

::: tip
- 使用 [pnpm](https://pnpm.io/zh/) 时，需要在 [`.npmrc`](https://pnpm.io/zh/npmrc#shamefully-hoist)
  文件中设置 `shamefully-hoist=true`。
- 使用 [yarn 2](https://yarnpkg.com/) 时，需要在 [`.yarnrc.yml`](https://yarnpkg.com/configuration/yarnrc#nodeLinker)
  文件中设置 `nodeLinker: 'node-modules'` 。
:::

# 文档：手动安装


这一章节会帮助你从头搭建一个简单的 VuePress 文档网站。
如果你想在一个现有项目中使用 VuePress 管理文档，从步骤 3 开始。

## **步骤1**: 创建并进入一个新目录

```bash
mkdir vuepress-starter
cd vuepress-starter
```

## **步骤2**: 初始化项目

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
git init
yarn init
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
git init
npm init
```

  </CodeGroupItem>
</CodeGroup>


## **步骤3**: 将 **`vuepress-theme-oxygen-not-included` 主题** 安装为本地依赖

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn add vuepress-theme-oxygen-not-included
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm install vuepress-theme-oxygen-not-included
```

  </CodeGroupItem>
</CodeGroup>

## **步骤4**: 在 `package.json` 中添加一些 [scripts](https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts)

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

## **步骤5**: 将默认的临时目录和缓存目录添加到 `.gitignore` 文件中

```bash
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
```

## **步骤6**: 创建第一篇文档

```bash
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

## **步骤7**: 在本地启动服务器来开发你的文档网站

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn docs:dev
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm run docs:dev
```

  </CodeGroupItem>
</CodeGroup>

VuePress 会在 [http://localhost:8080](http://localhost:8080) 启动一个热重载的开发服务器。
当修改 Markdown 文件时，浏览器中的内容也会自动更新。

现在，应该已经有了一个简单可用的 VuePress 文档网站。
接下来，了解一下 [VuePress 配置](https://vuepress2.netlify.app/zh/guide/configuration.html) 相关的内容。