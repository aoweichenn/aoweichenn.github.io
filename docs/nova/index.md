---
title: Nova 项目介绍
description: Nova 是一个正在迭代的 C++20 AI Agent 工作台。
---

# Nova

Nova 是一个正在迭代的 AI Agent 工作台。它以 C++20 运行时为核心，探索如何把 Agent、会话、工具调用和运行过程连接到网页、终端工作台与脚本 CLI。

> **当前状态：** 设计与原型迭代中。已有代码不等于完整产品，本站的概念图也不是交付界面。

## 项目关心什么

一次任务会经过输入、模型、工具和人的决定。Nova 关心这些过程如何保持上下文，怎样被使用者理解，以及发生中断后如何界定已经完成的工作。

这意味着运行时与界面需要各司其职：核心管理任务状态和执行边界，Web、TUI、CLI 面向不同的使用场景。详细的高层关系见 [设计说明](/design/)。

## 持续记录

- [为什么开始做 Nova](/posts/why-nova)
- [一个运行时，三种入口](/posts/one-runtime-three-surfaces)
- [原型不等于产品](/posts/prototype-is-not-product)

有关已完成与尚未完成的范围，请看 [项目进展](/progress/)。
