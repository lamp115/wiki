# 状态管理 Pinia

前言:
全局状态管理是一个大型系统不可避免的存在，因为经常有一些需要全局共享的信息需要存储，比如用户信息，所以 PRO 中内置了 Pinia 用于信息共享。
使用 Pinia ，目录更加简洁明了。 同时对Typescript的支持更加友好，具有无可比拟的优越性。

## 为什么用Pinia

Pinia 是 Vue 的存储库，它允许您跨组件/页面共享状态。 如果您熟悉 Composition API，您可能会认为您已经可以通过一个简单的 export const state = reactive({}). 这对于单页应用程序来说是正确的，但如果它是服务器端呈现的，会使您的应用程序暴露于安全漏洞。 但即使在小型单页应用程序中，您也可以从使用 Pinia 中获得很多好处：
- dev-tools 支持
    - 跟踪动作、突变的时间线
    - Store 出现在使用它们的组件中
    - time travel 和 更容易的调试
- 热模块更换
    - 在不重新加载页面的情况下修改您的 Store
    - 在开发时保持任何现有状态
- 插件：使用插件扩展 Pinia 功能
- 为 JS 用户提供适当的 TypeScript 支持或 autocompletion
- 服务器端渲染支持

## Pinia 使用方法

``` ts
import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id (main)
export const useStore = defineStore('main', {
  // other options...
})
```