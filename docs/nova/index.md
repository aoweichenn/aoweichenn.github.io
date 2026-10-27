---
title: Nova
description: Nova 是一个正在开发的 C++20 Agent 工作台。
---

# Nova

Nova 是一个用 C++20 写的 Agent 工作台。它有 Web、终端工作台和脚本 CLI 三种入口，底层由同一个 Host 管理会话和工具调用。

目前还是原型。项目有目标设计，也有正在迭代的代码，但还没有到完整发布的阶段。

## 我想解决的问题

一次任务可能读文件、执行命令，也可能等人确认。中途取消或断开以后，下一次打开应该能看清已经发生了什么。Nova 的设计主要围绕这些状态和恢复问题展开。

更多技术结构见 [设计页](/design/)。如果想知道现在有哪些东西能跑、哪些仍在补，直接看 [进展页](/progress/)。

## 相关笔记

- [为什么开始做 Nova](/posts/why-nova)
- [Web、TUI、CLI 共用一个 Host](/posts/one-runtime-three-surfaces)
- [Nova 现在到哪一步了](/posts/prototype-is-not-product)
