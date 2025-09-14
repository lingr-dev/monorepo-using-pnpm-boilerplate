# monorepo-using-pnpm-biolerplate
---
[中文](README.zh-cn.md) | [English](README.md)

这是一个模板项目，用于快速搭建一个基于 pnpm 管理的 monorepo 项目。

## 项目依赖
> - `pnpm` 作为包管理器
> - `vite` 作为应用的构建工具
> - `eslint` 作为应用的代码规范工具
> - `prettier` 作为应用的代码格式化工具

## 项目结构
```
packages
  ├── apps
  │   ├── demo
  ├── packages
  │   ├── demo-lib
```

## 项目说明
- `apps` 目录下是项目的应用，每个应用都是一个独立的项目，应用可以引用 `packages` 目录下的库。
- `packages` 目录下是项目的公共库，每个库都是一个独立的项目，库之间可以相互引用。

## 更新日志
- 2025-09-15 初始版本

## 系列文章
- TODO: 系列文章链接

## 关于我
- **作者**：[戈伊](https://github.com/lingr-dev)
- **邮箱**：[lingerer_dev@163.com](mailto:lingerer_dev@163.com)
- **主页**：[https://lingerer.cn](https://lingerer.cn)
- **微信公众号**:
  
  ![微信公众号](https://img-xs.lingerer.cn/info/qrcode_for_offcial_account.jpg)


## 许可证
- 本项目基于 MIT 许可证开源，你可以在遵守许可证的前提下自由使用、修改和分发本项目的代码。

## 贡献
- 欢迎提交 `issue` 或 `pull request` 来改进这个项目。
