# 前端

## 项目结构

```
├── config                     // 配置相关
├── public                     // 第三方不打包资源
│   └──favicon.ico             // favicon图标
│   └── Tinymce                // 富文本
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 主题 字体等静态资源
│   ├── components             // 全局公用组件
│   ├── hook                   // hook
│   ├── mock                   // 项目mock 模拟数据
│   ├── router                 // 路由
│   ├── store                  // 全局 store管理
│   ├── styles                 // 全局样式
│   ├── typings                // intface 类型
│   ├── utils                  // 全局公用方法
│   ├── views                   // view
│   ├── App.vue                // 入口页面
│   ├── main.js                // 入口 加载组件 初始化等
│   └── permission.ts          // 权限管理
├── .env                       // 环境配置
├── .env.development           // 开发环境配置
├── .env.production            // 生产环境配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
├── babel.condig.js            // babel-loader 配置
├── index.html                 // html模板
├──package.json                // package.json
└── postcss.config.js          // postcss 配置
```