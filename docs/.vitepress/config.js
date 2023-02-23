/**
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Nick.
 * @Date: 2022-08-29 13:21:19
 * @LastEditors: Nick.
 * @LastEditTime: 2023-02-23 12:09:13
 */
export default {
    lang: 'zh-CN',
    title: '基石编程笔记',
    titleTemplate: '努力让技术创造价值',
    description: '记录基石项目诞生开发全过程',
    head: [
        // ico
        ["link", {rel: "icon", href: "/favicon.ico"}],
        // meta
        ["meta", {name: "robots", content: "all"}],
        ["meta", {name: "author", content: "NickNiu"}],
        ["meta", {name: "keywords", content: "PHP 全栈知识体系, PHP体系, PHP知识体系, PHP框架,PHP详解,PHP学习路线, PHP面试, 知识体系, PHP技术体系, PHP编程, PHP编程指南,PHP开发体系, PHP开发,PHP教程,PHP,PHP数据结构, 算法, 开发基础"}],
        ["meta", {name: "apple-mobile-web-app-capable", content: "yes"}]
    ],
    themeConfig: {
        logo: "/logo.png",
        // 展示搜索框
        algolia: {
            appId: 'M9KOQX6ZL7',
            apiKey: '4b516cc60eebdb39b866d4314a2f1be9',
            // appKey: '4b516cc60eebdb39b866d4314a2f1be9',
            indexName: 'footstone-wiki',
            searchParameters: {
                // faeFilters: ['tags:php,app,arco_pro']
            }
        },
        nav: getNavList(),
        sidebar: {
            '/app/': getAppSidebarList(),
            '/arco_pro/': getArcoProSidebarList()
        },
        footer: {
            message: '努力让技术创造价值',
            copyright: '<a class="message" target="_blank" href="https://beian.miit.gov.cn/">豫ICP备2021031152号</a>  Copyright © 2022 NickNiu.'
        }
    }
  }
  
  function getNavList() {
    return [
        { text: '基石诞生记', link: '/app/' },
        { text: 'Arco Pro', link: '/arco_pro/' },
    ]
  }

  function getAppSidebarList() {
    return [
        {
            text: '系统开篇',
            items: [
                { text: '基石的初衷', link: '/app/'}
            ]
        },
        {
            text: '技术方案',
            items: [
                { text: '总体架构', link: '/app/system-structure' },// /app/system-structure.md
            ]
        },{
            text: '关于我们',
            items: [
                { text: '关于我们', link: '/app/abort-me.md' }
            ]
        }
    ]
  }

  function getArcoProSidebarList() {
    return [
        {
            text: 'Acro Pro 二次开发笔记',
            items: [
                { text: '前言', link: '/arco_pro/' },
                { text: '状态管理Pinia', link: '/arco_pro/arco_pro_pinia' },
                { text: 'TypeScript', link: '/arco_pro/arco_ts_assignment' }
            ]
        }
    ]
  }