# rollup 打包

- rollup 【文件名】

- 打包 js/ts 等入口文件无需后缀

- 如果入口文件引入了 ts 文件，会报错，需要先使用 tsc 将 ts 文件转译为 js 文件

## tsc 转译

- 默认转译为 cjs

- 添加 tsconfig.json 配置为 es module

- 执行 tsc 即可完成 .ts 文件转译

### 再执行 rollup main 即可打包

## 实现工程化打包方式

## rollup 打包

### 可以添加 [rollup.config.mjs](/rollup.config.mjs) 文件，设置完善的打包配置,可参考[rollupd 配置](https://cn.rollupjs.org/configuration-options/)

### 创建 package.json

scripts 中配置 build 命令：tsc && rollup --config tsc（将 ts 转译为 js 文件之后，执行 rollup 打包）

## 一步到位 ✨

此时运行 npm run build 即可完成打包(tsc + rollup)
