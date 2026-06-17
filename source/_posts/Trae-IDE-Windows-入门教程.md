---
title: Trae IDE 完全上手指南：Windows 端 AI 编程从入门到进阶
date: 2026-05-24 12:00:00
categories: 开发工具
tags: [Trae IDE, AI编程, Windows, 开发工具, 入门教程, Claude, DeepSeek, Agent, MCP]
description: 基于 Trae IDE v3.5.x 最新版本，为初学者提供从安装到进阶的完整教程。涵盖 Agent 模式、Chat 模式、SOLO Agent、MCP 协议、Slash 命令、Skills 技能等核心功能，图文并茂，循序渐进。
keywords: Trae IDE, AI编程工具, Windows开发, AI辅助开发, Agent智能体, MCP协议, SOLO模式, 编程入门
cover: https://picsum.photos/seed/trae-ide-guide-2026/800/400
swiper_index: 1
---

## 前言

2026 年，AI 编程工具已经从"代码补全助手"进化到了"全流程开发 Agent"。字节跳动推出的 **Trae IDE**（目前最新稳定版 v3.5.x）正是这一变革的代表作。

与第一代 AI 编程工具（如 GitHub Copilot 仅做行级补全）不同，Trae 的核心能力在于：

- **Agent 智能体**：AI 主动理解需求、拆解任务、编写代码、调试运行，形成一个完整的开发闭环
- **多模态输入**：支持图片转代码、语音指令、设计稿解析
- **MCP 协议**：通过工具链生态连接数据库、API、设计工具等外部系统
- **完全免费**：国内版内置 DeepSeek、豆包等国产模型，无需订阅付费

本文基于 **Trae IDE v3.5.x**（2026 年 5 月版本），从零开始带你成为 Trae 高手。

---

## 一、下载与安装

### 1.1 系统要求

| 项目 | 最低要求 | 推荐配置 |
|------|----------|----------|
| 操作系统 | Windows 10 64 位 | Windows 11 64 位 |
| 内存 | 8 GB | 16 GB 及以上 |
| 磁盘空间 | 2 GB 可用空间 | SSD 固态硬盘 |
| 网络 | 宽带连接 | 稳定的网络环境 |

### 1.2 下载安装

前往 Trae 官网下载：

- **国内版**：[https://www.trae.cn](https://www.trae.cn) —— 内置豆包、DeepSeek 等国产模型，免费使用
- **国际版**：[https://www.trae.ai](https://www.trae.ai) —— 支持 Claude、GPT 等国际模型

![Trae IDE官网下载页面](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20software%20download%20page%20for%20a%20developer%20IDE%20tool%2C%20clean%20design%20with%20prominent%20download%20button%2C%20Windows%20and%20macOS%20icons%2C%20dark%20theme%2C%20professional%20software%20website%20style&image_size=landscape_16_9)

**安装步骤：**

1. 点击官网「免费下载」按钮，下载 Windows 安装包（`.exe` 文件）
2. 双击运行安装程序，选择安装路径（建议保持默认 `C:\Users\用户名\AppData\Local\Programs\Trae`）
3. 勾选「创建桌面快捷方式」，点击「安装」
4. 等待安装完成（约 1-2 分钟），启动 Trae IDE

> **提示**：Trae 内置了 Node.js、Python 等运行环境的检测功能。启动后如果检测到缺少必要环境，会自动弹窗引导安装，非常省心。

### 1.3 导入已有配置

如果你之前使用 VS Code 或 Cursor，Trae 支持一键导入配置：

1. 首次启动时，选择「从 VS Code 导入」
2. 勾选需要导入的内容：扩展插件、快捷键绑定、用户设置、代码片段
3. 点击「导入」即可完成迁移

---

## 二、界面全面解析

### 2.1 整体布局

Trae 的界面基于 VS Code 架构深度定制，如果你用过 VS Code，几乎可以零成本上手。

![Trae IDE 主界面布局](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20AI-powered%20IDE%20interface%20with%20dark%20theme%2C%20code%20editor%20panel%20on%20left%20showing%20TypeScript%20code%2C%20AI%20chat%20assistant%20panel%20on%20right%20side%2C%20file%20explorer%20sidebar%2C%20bottom%20terminal%20panel%2C%20clean%20developer%20workspace&image_size=landscape_16_9)

```
┌─────────────────────────────────────────────────────────┐
│  菜单栏  │ 文件 │ 编辑 │ 选择 │ 视图 │ 转到 │ 运行 │ 帮助  │
├────┬─────┴──────────────────────────────────────────────┤
│ 活 │                                                    │
│ 动 │           编辑器区域（代码编辑）                      │
│ 栏 │                                                    │
│ 📁 │                                                    │
│ 🔍 │                                                    │
│ 🔀 │                                                    │
│ 🧩 │                                                    │
│ 💬 │                                                    │
│ 🧪 │         ┌──────────────────────┐                   │
├────┤         │    AI 对话面板        │                   │
│ 状 │         │  (可拖拽、可固定)      │                   │
│ 态 │         └──────────────────────┘                   │
│ 栏 │  main.tsx  │ UTF-8 │ TypeScript │ Ln 42, Col 15   │
└────┴────────────────────────────────────────────────────┘
```

### 2.2 核心功能区域

| 区域 | 图标 | 功能描述 |
|------|------|----------|
| **活动栏** | 左侧竖排图标 | 切换主侧边栏视图（文件管理器、搜索、源代码管理、扩展、AI 对话、测试） |
| **文件资源管理器** | 📁 | 浏览和管理项目文件，支持拖拽、右键菜单 |
| **搜索** | 🔍 | 全局文件搜索和内容替换 |
| **源代码管理** | 🔀 | Git 版本控制，支持 AI 自动生成 Commit Message |
| **扩展** | 🧩 | 插件市场，兼容 VS Code 扩展生态 |
| **AI 对话** | 💬 | 核心！打开 AI 面板，与 Agent/Chat 交互 |
| **编辑器区域** | 中央 | 代码编辑区，支持多标签页、分屏、差异对比 |
| **终端** | 底部 | 内置终端（PowerShell / Git Bash），支持 AI 命令执行 |
| **状态栏** | 底部横条 | 显示语言模式、编码、行号、Git 分支、AI 状态 |

---

## 三、核心功能一：Chat 模式 —— AI 辅助编程

Chat 模式是日常编程中最常用的交互方式，适合代码解释、Bug 修复、方案咨询等单次任务。

### 3.1 打开 Chat 面板

- 点击左侧活动栏的 💬 图标
- 或使用快捷键 `Ctrl + L`（选中代码后自动带入上下文）

### 3.2 模型选择

在 Chat 面板顶部，点击模型名称可切换：

| 模型 | 擅长场景 | 特点 |
|------|----------|------|
| **Claude 4 Sonnet** | 复杂推理、长文本理解、架构设计 | 逻辑严密 |
| **DeepSeek R1** | 代码生成、中文理解、数学推理 | 国产免费 |
| **DeepSeek V3** | 综合编程、多语言支持 | 速度快 |
| **豆包 1.5 Pro** | 日常问答、中文指令理解 | 字节自研 |
| **Kimi K2.5** | 视频理解、长文档分析 | 多模态 |

> **建议**：日常编程用 DeepSeek V3，架构设计用 Claude 4 Sonnet，中文需求用豆包。所有模型在国内版均可免费使用。

### 3.3 实战场景

#### 场景 1：用自然语言写代码

在 Chat 中输入：

```
写一个 Python 脚本，批量处理当前目录下的所有 .txt 文件：
1. 读取文件内容
2. 去除每行首尾空格和空行
3. 按行排序
4. 保存到原文件（覆盖）
要求有进度条显示处理进度
```

AI 会生成完整代码，点击「应用」直接将代码写入文件。

#### 场景 2：代码解释与学习

在编辑器中选中一段复杂代码，然后在 Chat 中：

```
请逐行解释这段代码的逻辑，并用大白话说明它要解决什么问题
```

AI 会给出带注释的代码和通俗易懂的整体逻辑说明。**非常适合阅读开源项目和学习新技术。**

#### 场景 3：Bug 定位与修复

当代码报错时，有两种方式让 AI 帮你修复：

**方式一**：复制错误信息到 Chat

```
运行时报了这个错：
[粘贴完整错误日志]
请问原因是什么？如何修复？
```

**方式二**：直接让 AI 看终端（推荐）

```
请查看终端中的错误信息，分析原因并在代码中修复
```

AI 会自动读取最近的终端输出，分析后给出修复方案。

#### 场景 4：代码审查与优化

选中代码，输入：

```
请从以下四个维度审查这段代码：
1. 性能：有无 N+1 查询、不必要的循环
2. 安全性：有无注入风险、敏感信息泄露
3. 可读性：命名是否清晰、逻辑是否简洁
4. 健壮性：异常处理是否完善
给出具体改进建议和优化后的代码
```

---

## 四、核心功能二：Agent 模式 —— AI 全自动开发

**Agent 模式是 Trae 最强大的功能。** AI 不再是简单的问答，而是一个能够主动规划、执行、调试的"虚拟程序员"。

### 4.1 Chat 模式 vs Agent 模式

| 对比维度 | Chat 模式 | Agent 模式 |
|----------|-----------|------------|
| 交互方式 | 一问一答 | AI 主动规划多步执行 |
| 代码变更 | 手动应用 | AI 自动创建/修改文件 |
| 终端操作 | 不能执行命令 | AI 可运行终端命令 |
| 多文件操作 | 逐个文件处理 | AI 跨文件协调变更 |
| 适用场景 | 问问题、解释代码 | 开发功能、修复 Bug、重构 |

### 4.2 切换到 Agent 模式

在 AI 对话面板中：

1. 点击顶部的模式切换按钮
2. 选择 **Agent** 模式
3. 也可以在输入框中直接输入 `@Agent` 切换到 Agent 模式

![Trae Agent 模式工作界面](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20coding%20assistant%20agent%20interface%20inside%20an%20IDE%2C%20showing%20a%20split%20view%20with%20code%20diff%20comparison%20on%20the%20left%20and%20an%20agent%20task%20plan%20with%20checkboxes%20on%20the%20right%2C%20dark%20theme%2C%20modern%20developer%20tool&image_size=landscape_16_9)

### 4.3 Agent 实战：从零搭建一个 Web 应用

下面用一个完整案例展示 Agent 的强大能力。

**需求**：开发一个简单的「Markdown 笔记应用」，支持新建笔记、Markdown 实时预览、本地存储。

在 Agent 模式中输入：

```
@Agent 帮我用 React + TypeScript 开发一个 Markdown 笔记应用，要求：

1. 左侧是笔记列表，支持新建和删除
2. 右侧分两栏：编辑区（textarea）和实时预览区
3. 使用 localStorage 持久化存储笔记数据
4. UI 简洁现代，支持暗色模式
5. 使用 Vite 作为构建工具
```

**Agent 的执行过程：**

1. **分析与规划** → AI 自动拆解需求，列出开发步骤
2. **创建项目** → 自动初始化 Vite + React + TypeScript 项目
3. **安装依赖** → 自动安装 `react-markdown` 等必要包
4. **编写代码** → 逐文件生成代码：`main.tsx`、`App.tsx`、`NoteList.tsx`、`MarkdownEditor.tsx`...
5. **运行与调试** → 自动启动开发服务器，检查错误
6. **交付成果** → 一个可运行的项目，可在浏览器中预览

整个流程中，你只需要看着 AI 工作，偶尔确认关键决策即可。

---

## 五、核心功能三：SOLO Agent —— 一键全栈交付

SOLO Agent 是 Trae 的**终极自动化模式**。它整合了需求分析、文档生成、代码编写、部署上线等全流程能力。

### 5.1 什么是 SOLO Agent

SOLO Agent 将以下环节串联成一个自动化流水线：

```
用户描述需求
    │
    ▼
① 需求分析 → 拆解为开发任务
    │
    ▼
② 生成 PRD / 技术方案文档
    │
    ▼
③ 创建项目结构 + 编写代码
    │
    ▼
④ 自动运行 + 调试修复
    │
    ▼
⑤ 一键部署（支持 Vercel / Cloudflare 等平台）
```

### 5.2 SOLO Agent 实战

在 Agent 模式下启动 SOLO 任务：

```
@SOLO 开发一个情绪日记 App：
- 用户可以记录每日心情（emoji 选择 + 文字描述）
- 按日历视图展示历史记录
- 使用 React + Tailwind CSS + IndexedDB
- 部署到 Vercel
```

SOLO Agent 会自动完成全部工作，并在完成后提供一个可访问的线上地址。

### 5.3 SOLO 适用场景

- ✅ 快速原型验证（MVP 开发）
- ✅ 个人工具/小项目开发
- ✅ Hackathon 快速出活
- ❌ 复杂企业级系统（仍需人工参与关键决策）

---

## 六、进阶篇一：MCP 协议 —— 连接 AI 与外部世界

**MCP（Model Context Protocol）** 是 Trae 连接外部工具的开放协议。通过 MCP，AI 可以操作数据库、调用 API、读写文件系统、操作浏览器等，极大扩展 Agent 的能力边界。

### 6.1 MCP 的工作原理

```
┌──────────┐    MCP 协议     ┌──────────────┐
│  Trae    │ ◄──────────────► │  MCP Server   │
│  Agent   │   工具调用        │  ───────────  │
│          │ ◄──────────────► │  PostgreSQL   │
│          │   查询结果        │  GitHub API   │
│          │                  │  Figma API    │
│          │                  │  自定义工具    │
└──────────┘                  └──────────────┘
```

### 6.2 配置 MCP Server

Trae 内置了 **MCP 市场**，提供大量即开即用的 MCP Server：

1. 打开设置 → **MCP 配置**
2. 在市场中浏览可用的 MCP Server
3. 点击「安装」即可添加

**常用 MCP Server 推荐：**

| MCP Server | 功能 | 典型场景 |
|------------|------|----------|
| `@anthropic/postgres` | 数据库操作 | 让 AI 帮你查询数据、建表 |
| `@github/mcp-server` | GitHub API | 创建 Issue、PR、查看仓库 |
| `@figma/mcp` | Figma 设计稿 | 解析设计稿生成前端代码 |
| `@browser/mcp` | 浏览器自动化 | 网页爬虫、自动化测试 |
| `@filesystem/mcp` | 文件系统扩展 | 批量文件处理 |

### 6.3 MCP 实战：AI 连接数据库

假设你需要从 PostgreSQL 数据库中查询用户数据：

1. 在 MCP 市场安装 `@anthropic/postgres`
2. 配置数据库连接信息（Host、Port、用户名、密码、数据库名）
3. 在 Agent 中输入：

```
请连接 PostgreSQL 数据库，查询 users 表中近 30 天注册的用户，
按注册时间降序排列，导出为 CSV 文件
```

Agent 会自动执行 SQL 查询、处理结果、生成 CSV 文件。

![Trae MCP 配置界面](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=IDE%20settings%20panel%20showing%20MCP%20Model%20Context%20Protocol%20server%20configuration%2C%20list%20of%20connected%20servers%20including%20PostgreSQL%20and%20GitHub%2C%20dark%20theme%2C%20clean%20settings%20UI&image_size=landscape_16_9)

---

## 七、进阶篇二：Slash 命令与 Skills —— 定制你的 AI 工作流

### 7.1 Slash 命令

在输入框中输入 `/` 可以呼出命令面板，快速执行预设操作：

| 命令 | 功能 |
|------|------|
| `/explain` | 解释选中的代码 |
| `/fix` | 修复选中的代码 |
| `/test` | 为选中代码生成单元测试 |
| `/doc` | 生成文档注释 |
| `/refactor` | 重构选中代码 |
| `/optimize` | 性能优化建议 |

**自定义 Slash 命令：**

在项目根目录创建 `.trae/commands/` 目录，放入 Markdown 文件：

```
.trae/commands/
├── review.md        # /review → 代码审查命令
├── deploy.md        # /deploy → 部署命令
└── api.md           # /api → 生成 API 接口
```

`review.md` 示例：

```markdown
请从以下角度审查提供的代码：
1. 安全漏洞（注入、XSS、敏感信息泄露）
2. 性能问题（不必要的渲染、内存泄漏）
3. 代码规范（命名、结构、注释）
4. 边界条件处理
给出修改建议和优化代码。
```

使用时输入 `/review` 即可调用该命令。

### 7.2 Skills 技能

Skills 是预先定义好的专业技能模块，用于指导 Agent 的行为。

**目录结构：**

```
.agents/skills/
├── api-designer.md      # API 设计规范
├── database-helper.md   # 数据库操作规范
└── react-patterns.md    # React 最佳实践
```

`react-patterns.md` 示例：

```markdown
# React 开发规范

## 组件规范
- 使用函数组件 + TypeScript
- Props 必须定义 interface
- 使用 React.memo 优化纯展示组件

## 状态管理
- 简单状态用 useState
- 跨组件状态用 Context + useReducer
- 服务端状态优先用 React Query

## 样式方案
- 使用 Tailwind CSS
- 避免内联样式
- 响应式设计使用 sm:/md:/lg: 断点
```

配置后，Agent 在生成 React 代码时会自动遵循这些规范。

### 7.3 Rules 规则

Rules 是给 Agent 设定的行为准则，可以是全局规则或模块级规则。

**全局规则**（`.trae/rules/project_rules.md`）：

```markdown
# 项目全局规则

## 代码风格
- 使用 TypeScript 严格模式
- 所有 public API 必须有 JSDoc 注释
- 禁止使用 `any` 类型

## 框架约定
- 新页面统一放在 src/pages/ 目录
- API 请求统一使用 src/api/ 下的封装函数
- 环境变量统一从 src/config/ 导入

## Git 规范
- commit message 遵循 Conventional Commits
- 每个 commit 只做一件事
```

**模块级规则**（`src/api/.trae/rules/api_rules.md`）：

只在 Agent 操作 `src/api/` 目录内的文件时生效：

```markdown
# API 模块规则
- 所有 API 函数返回 Promise<T>
- 错误统一使用 ApiError 类
- 请求超时默认 10 秒
```

---

## 八、进阶篇三：多模态与 Web 预览

### 8.1 图片转代码

Trae 支持通过图片生成代码：

1. 在 Chat/Agent 输入框中，点击 📎 图标上传图片
2. 输入指令：

```
请基于这个设计稿，生成对应的 HTML + CSS 代码，要求响应式布局
```

![Trae 设计稿转代码](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=design%20to%20code%20workflow%2C%20split%20screen%20showing%20a%20UI%20design%20mockup%20on%20the%20left%20and%20generated%20HTML%20CSS%20code%20on%20the%20right%2C%20modern%20development%20tool%20interface&image_size=landscape_16_9)

> **注意**：确保设计稿图层命名清晰，可获得更高的识别准确率。

### 8.2 语音输入

点击输入框右侧的 🎤 图标，可以语音描述需求：

- 「帮我写一个 Express 后端 API，实现用户注册和登录」
- 「这段代码报类型错误，帮我看看怎么修」

特别适合在需要快速描述复杂需求或在移动端操作时使用。

### 8.3 Web 预览

当 Agent 生成 Web 应用后，Trae 内置了**实时预览**功能：

- Agent 会自动启动开发服务器
- 在 IDE 内嵌浏览器中展示运行效果
- 支持**元素编辑**：在预览窗口圈选元素，输入指令如「把这个按钮颜色改成蓝色」
- AI 自动修改代码并热更新预览

![Trae Web 预览功能](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=IDE%20with%20split%20view%2C%20left%20side%20showing%20React%20JavaScript%20code%20editor%2C%20right%20side%20showing%20live%20preview%20of%20a%20modern%20web%20application%20dashboard%20with%20charts%20and%20tables%2C%20dark%20theme%20developer%20tool&image_size=landscape_16_9)

---

## 九、终端与 Git 集成

### 9.1 智能终端

Trae 的终端有专属的 AI 增强能力：

- **自动错误分析**：终端报错时，AI 自动分析错误并提供修复方案
- **命令补全建议**：根据当前项目上下文推荐命令
- **后台任务管理**：长运行命令（如 `npm run dev`）可以放入后台岛台

**终端快捷键：**

| 快捷键 | 功能 |
|--------|------|
| `` Ctrl + ` `` | 打开/关闭终端 |
| `Ctrl + Shift + ` `` | 新建终端 |
| `Ctrl + Shift + 5` | 分屏终端 |

### 9.2 AI 增强 Git

在左侧活动栏的「源代码管理」面板中，Trae 提供了 AI 增强能力：

**AI 生成 Commit Message：**

1. 暂存你要提交的文件（点击文件旁的 `+` 号）
2. 点击输入框上方的 ✨ 按钮
3. AI 会分析代码变更，自动生成规范的 commit message

```
# AI 生成示例
feat(auth): add JWT-based user authentication

- Implement login and registration endpoints
- Add token refresh mechanism
- Include password hashing with bcrypt
```

**自定义 Commit 规则：**

在 `.trae/rules/` 下创建 `git_commit_rules.md`：

```markdown
# Git Commit 规则
- 遵循 Conventional Commits 格式
- type 使用中文：feat(新功能)/fix(修复)/docs(文档)/refactor(重构)
- scope 使用模块英文名
- subject 50 字以内
```

---

## 十、实用快捷键速查

### 通用快捷键

| 快捷键 | 功能 |
|--------|------|
| `Ctrl + P` | 快速打开文件 |
| `Ctrl + Shift + P` | 命令面板 |
| `` Ctrl + ` `` | 打开/关闭终端 |
| `Ctrl + B` | 切换侧边栏 |
| `Ctrl + W` | 关闭当前标签页 |
| `Ctrl + \` | 分屏编辑 |
| `Ctrl + /` | 注释/取消注释 |
| `Alt + ↑/↓` | 移动当前行 |
| `Ctrl + D` | 选中下一个相同词 |
| `Ctrl + Shift + I` | 格式化代码 |

### AI 专属快捷键

| 快捷键 | 功能 |
|--------|------|
| `Ctrl + L` | 在 AI 面板中提问（带选中代码上下文） |
| `Ctrl + I` | 行内 AI 补全 |
| `Ctrl + K` | AI 改写选中代码 |
| `Ctrl + Shift + L` | 打开 Agent 模式 |
| `Tab` | 接受 AI 代码建议 |
| `Esc` | 拒绝 AI 代码建议 |

---

## 十一、常见问题与最佳实践

### 11.1 AI 生成的代码不对怎么办？

- **补充上下文**：提问时附上相关代码文件或 @ 引用整个项目
- **分步拆解**：复杂需求拆分为多个小任务，逐步推进
- **提供示例**：给出期望的输出格式或参考代码
- **切换模型**：复杂逻辑用 Claude，日常编码用 DeepSeek

### 11.2 AI 提问黄金法则

```
❌ 差：「帮我写个网站」
✅ 好：「用 React + TypeScript + Tailwind CSS 写一个个人博客首页，
   包含顶栏导航、文章卡片列表（左侧封面图 + 右侧标题和摘要）、
   右侧边栏（分类和标签云），配色主色 #2563EB，支持暗色模式切换」

❌ 差：「这段代码有 bug」
✅ 好：「这段代码在用户输入空字符串时会崩溃，错误是
   TypeError: Cannot read property 'length' of undefined
   请定位问题并修复，同时增加防御性编程处理」
```

核心原则：**需求越具体，筛选条件越明确，AI 输出质量越高。**

### 11.3 提升效率的配置建议

1. **配置 Rules**：在项目中创建 `.trae/rules/` 文件，统一代码风格
2. **设置 Skills**：在 `.agents/skills/` 目录下放项目技术栈的开发规范
3. **善用 MCP**：将常用的数据库、API 工具接入 MCP，提升 Agent 能力范围
4. **自定义 Slash 命令**：将高频操作封装为 Slash 命令，一键执行

### 11.4 安全注意事项

- ⚠️ Agent 模式可以执行终端命令，请确保代码审查（Code Review）
- ⚠️ 避免在 Chat 中粘贴敏感信息（API Key、密码等）
- ⚠️ 在 `.trae/rules/` 中明确安全边界规则
- ⚠️ 关键代码（支付、认证等）建议人工把关

---

## 十二、总结

Trae IDE 已经从「AI 辅助编程工具」进化为 **AI 驱动的全流程开发平台**。核心优势总结：

| 能力 | 说明 |
|------|------|
| 🆓 **完全免费** | 国内版内置 DeepSeek/豆包/Kimi 等模型，无需付费 |
| 🤖 **Agent 智能体** | AI 自主规划、编码、调试，具备完整开发能力 |
| 🔌 **MCP 生态** | 通过协议连接数据库、API、设计工具等外部系统 |
| 🎨 **多模态** | 支持图片转代码、语音输入、设计稿解析 |
| 📦 **开放定制** | Slash 命令、Skills、Rules 全开放，按需定制 |
| 🇨🇳 **中文友好** | 中文需求理解精准，网络访问稳定 |

打开 Trae，输入你的第一个需求，开始 AI 驱动的编程之旅吧！

---

*本文基于 Trae IDE v3.5.x（2026.05）编写，部分功能可能随版本更新有所变化。如有问题欢迎在评论区交流～*