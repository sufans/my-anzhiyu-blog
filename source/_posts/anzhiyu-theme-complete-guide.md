---
title: 【安知鱼主题完全指南】博客编辑、美化与高级自定义
date: 2026-05-21 16:00:00
categories: 建站
tags: [Hexo, 安知鱼主题, 博客美化, 教程]
cover: https://picsum.photos/seed/anzhiyu-guide/800/400
---

> **阅读前提**：本文基于最新稳定版安知鱼主题编写，所有主题配置均在博客根目录的 `_config.anzhiyu.yml` 中进行，**不要修改主题目录下的 `_config.yml`**。
>
> 官方文档：[https://docs.anheyu.com/](https://docs.anheyu.com/)

---

## 一、基础内容编辑

### 1.1 文章创建与管理

#### 创建新文章

```bash
# 创建新文章
hexo new "文章标题"

# 创建草稿（不会在首页显示）
hexo new draft "草稿标题"

# 发布草稿
hexo publish draft "草稿标题"
```

文章文件会生成在 `source/_posts/文章标题.md`，草稿在 `source/_drafts/` 目录。

#### Markdown 基本语法

安知鱼主题完整支持 Markdown 语法，以下是常用格式：

```markdown
## 二级标题
### 三级标题

**加粗文本** 和 *斜体文本*

- 无序列表项 1
- 无序列表项 2

1. 有序列表项 1
2. 有序列表项 2

> 引用文本

[链接文字](https://example.com)

![图片描述](https://example.com/image.png)

`行内代码`

​```javascript
// 代码块（指定语言可获得语法高亮）
console.log("Hello World");
​```
```

### 1.2 文章 Front-matter 配置

Front-matter 是文章开头的 YAML 配置区域，用 `---` 包裹。

#### 必选参数

```yaml
---
title: 文章标题
date: 2026-05-21 10:00:00
---
```

#### 常用参数

```yaml
---
title: 文章标题
date: 2026-05-21 10:00:00
updated: 2026-05-22 15:00:00   # 更新日期
tags:
  - Hexo
  - 教程
categories:
  - 建站
description: 文章的简短描述，用于 SEO 和文章摘要
keywords: 关键词1, 关键词2, 关键词3
---
```

#### 安知鱼特有参数

以下参数是安知鱼主题提供的**文章级专属配置**：

```yaml
---
# 文章封面图片（首页卡片和文章页顶部显示）
cover: https://picsum.photos/seed/example/800/400

# 文章主色调（影响标签、链接等元素颜色）
main_color: "#42b983"

# 启用 AI 文章摘要（需要开启全局 AI 功能）
ai: true

# 文章置顶（数值越大越靠前）
top: 10

# 隐藏侧边栏
aside: false

# 隐藏文章页顶部大图
top_img: false

# 关闭评论
comments: false

# 文章密码保护（访问需要输入密码）
password: your-password

# 设置文章为原创（显示版权声明）
copyright: true

# 设置文章为转载
copyright_author: 原作者名
copyright_author_href: https://original-author.com
copyright_url: https://original-post-url.com
copyright_info: 转载声明内容

# 自定义文章页顶部图片（优先级高于 cover）
top_img: https://example.com/banner.jpg

# 文章排序权重（数值越大越靠前，默认按日期）
sticky: 100
---
```

#### 完整示例

```yaml
---
title: 使用 Docker 部署 Node.js 应用
date: 2026-05-21 10:00:00
tags:
  - Docker
  - Node.js
  - 运维
categories:
  - 技术分享
description: 详细介绍如何使用 Docker 容器化部署 Node.js 应用，包括 Dockerfile 编写、docker-compose 配置和生产环境优化。
keywords: Docker, Node.js, 容器化, 部署
cover: https://picsum.photos/seed/docker-node/800/400
main_color: "#2496ED"
ai: true
top: 5
copyright: true
---

## 前言

本文将介绍...

## 正文内容

...
```

### 1.3 页面创建与管理

#### 创建独立页面

```bash
# 创建关于页面
hexo new page about

# 创建标签页面
hexo new page tags

# 创建分类页面
hexo new page categories
```

页面文件位于 `source/页面名称/index.md`。

#### 特殊页面配置

**重要**：特殊页面必须在 Front-matter 中添加 `type` 参数才能正常工作。

| 页面类型 | type 值 | 创建命令 |
|----------|---------|----------|
| 标签页 | `tags` | `hexo new page tags` |
| 分类页 | `categories` | `hexo new page categories` |
| 友链页 | `link` | `hexo new page link` |
| 留言板 | `comments` | `hexo new page comments` |
| 相册集 | `album` | `hexo new page album` |
| 音乐馆 | `music` | `hexo new page music` |
| 追番页 | `bangumis` | `hexo new page bangumis` |
| 朋友圈 | `fcircle` | `hexo new page fcircle` |

#### 标签页配置

编辑 `source/tags/index.md`：

```yaml
---
title: 标签
date: 2026-05-21 10:00:00
type: tags
comments: false
---
```

#### 分类页配置

编辑 `source/categories/index.md`：

```yaml
---
title: 分类
date: 2026-05-21 10:00:00
type: categories
comments: false
---
```

#### 友链页配置

编辑 `source/link/index.md`：

```yaml
---
title: 友情链接
date: 2026-05-21 10:00:00
type: link
comments: false
---
```

友链数据在 `_config.anzhiyu.yml` 的 `link` 部分配置：

```yaml
link:
  - class_name: 推荐博客
    class_desc: 值得关注的博客
    link_list:
      - name: 博客名称
        link: https://example.com
        avatar: https://example.com/avatar.png
        descr: 博客简介
      - name: 另一个博客
        link: https://another.com
        avatar: https://another.com/avatar.png
        descr: 另一个博客简介
```

#### 关于页面配置

编辑 `source/about/index.md`：

```yaml
---
title: 关于我
date: 2026-05-21 10:00:00
---

## 关于我

这里是关于页面的内容，支持完整的 Markdown 语法。

### 技能

- 前端开发
- 后端开发
- 运维部署

### 联系方式

- GitHub: [你的GitHub](https://github.com/yourname)
- 邮箱: your@email.com
```

---

## 二、全局配置美化

> **以下所有配置均在根目录 `_config.anzhiyu.yml` 中修改。**

### 2.1 站点基本信息

编辑根目录 `_config.yml`：

```yaml
# 网站标题
title: 我的博客

# 副标题
subtitle: 记录学习与生活

# 网站描述（用于 SEO）
description: 一个分享技术、生活和思考的个人博客

# 作者名
author: 你的名字

# 网站语言
language: zh-CN

# 时区
timezone: Asia/Shanghai

# 网站地址
url: https://yourdomain.com

# 网站根目录（如果部署在子目录则修改，如 /blog/）
root: /
```

#### 配置网站图标

在 `_config.anzhiyu.yml` 中：

```yaml
# 网站 favicon
favicon: https://your-avatar-url.png

# 作者头像
avatar:
  img: https://your-avatar-url.png
  effect: false    # 关闭头像旋转动画
```

### 2.2 导航菜单配置

在 `_config.anzhiyu.yml` 的 `menu` 部分修改：

```yaml
menu:
  首页: / || anzhiyu-icon-home
  文章:
    归档: /archives/ || anzhiyu-icon-box-archive
    分类: /categories/ || anzhiyu-icon-shapes
    标签: /tags/ || anzhiyu-icon-tags
  关于:
    关于: /about/ || anzhiyu-icon-paper-plane
    友链: /link/ || anzhiyu-icon-link
```

**格式说明**：`名称: /路径/ || 图标类名`

- 支持多级菜单（使用缩进表示层级）
- 图标使用安知鱼内置图标或 Font Awesome 图标
- Font Awesome 图标格式：`fas fa-home`、`fab fa-github`

#### 社交链接

```yaml
social:
  GitHub: https://github.com/yourname || fab fa-github
  邮箱: mailto:your@email.com || fab fa-envelope
  Bilibili: https://space.bilibili.com/yourid || fab fa-bilibili
  知乎: https://www.zhihu.com/people/yourid || fab fa-zhihu
```

### 2.3 主题颜色与样式

在 `_config.anzhiyu.yml` 中：

```yaml
# 主题颜色
theme_color:
  main: "#425AEF"           # 浅色模式主色调
  dark_main: "#faa729"      # 深色模式主色调

# 暗色模式配置
autoChangeMode:
  enable: true               # 启用自动切换
  mode: 1                    # 1 = 跟随系统，2 = 按时间段

# 按时间段切换暗色模式
darkModeTime:
  start: 19                  # 开始时间（小时）
  end: 7                     # 结束时间（小时）
```

**可选主色调参考**：

| 颜色 | 色值 | 效果 |
|------|------|------|
| 蓝色 | `#425AEF` | 经典科技感 |
| 绿色 | `#42b983` | 清新自然 |
| 紫色 | `#8B5CF6` | 优雅神秘 |
| 橙色 | `#F97316` | 活力温暖 |
| 粉色 | `#EC4899` | 时尚个性 |

### 2.4 首页美化

#### 顶部轮播图

```yaml
home_top:
  enable: true               # 启用首页顶部区域
  swiper:
    enable: true             # 启用轮播图
    list:
      - img: https://picsum.photos/seed/slide1/1920/500
        url: /2026/05/21/my-post/    # 点击跳转链接
        title: 第一篇文章
      - img: https://picsum.photos/seed/slide2/1920/500
        url: /categories/技术/
        title: 技术分类
```

#### 首页文章列表样式

```yaml
# 双栏卡片布局
article_double_row: true

# 首页文章摘要
index_post_content:
  method: 2                  # 1 = 描述，2 = 自动截取，3 = 自定义
  length: 200                # 摘要长度（字符数）

# 文章封面图
cover:
  index_enable: true         # 首页显示封面
  aside_enable: true         # 侧边栏显示封面
  position: both             # 封面位置：left / right / both
```

#### 侧边栏配置

```yaml
aside:
  enable: true
  hide: false                # 移动端是否隐藏
  button: true               # 显示/隐藏按钮
  mobile: true               # 移动端显示

# 侧边栏显示的卡片（按顺序）
widgets:
  - card_author              # 作者卡片
  - card_announcement        # 公告栏
  - card_webinfo             # 网站信息
  - card_recent_post         # 最新文章
  - card_categories          # 分类
  - card_tags                # 标签
  - card_archives            # 归档
```

#### 公告栏

```yaml
notice:
  enable: true
  content: 欢迎访问我的博客！这里是我的公告内容，支持 <a href="/about">HTML</a> 标签。
```

### 2.5 文章页美化

#### 代码高亮配置

```yaml
# 代码高亮（highlight 和 prismjs 二选一）
highlight:
  enable: true
  line_number: true          # 显示行号
  auto_detect: true          # 自动检测语言
  tab_replace: "    "        # Tab 替换为空格

prismjs:
  enable: false
  preprocess: true
  line_number: true
  tab_replace: "    "

# 代码块高度限制（超出显示滚动条）
highlight_height_limit: 300  # 单位：像素，false 为不限制
```

#### 文章分页

```yaml
# 文章底部上一篇/下一篇
post_pagination:
  enable: true
  sort_order: 1              # 1 = 下一篇是旧文章，2 = 下一篇是新文章
```

#### 打赏功能

```yaml
reward:
  enable: true
  text: 请作者喝杯咖啡 ☕
  QR_code:
    - img: https://example.com/wechat-pay.png
      link:
      text: 微信
    - img: https://example.com/alipay.png
      link:
      text: 支付宝
```

#### 文章版权信息

```yaml
post_copyright:
  enable: true
  decode: false              # 解码 base64 链接
  license: CC BY-NC-SA 4.0
  license_url: https://creativecommons.org/licenses/by-nc-sa/4.0/
```

### 2.6 功能开关

在 `_config.anzhiyu.yml` 中控制各项功能：

```yaml
# 全局中控台
centerConsole:
  enable: true               # 显示右下角控制台按钮

# 音乐球
musicball:
  enable: false              # 关闭音乐球

# 本地搜索
search:
  enable: true
  path: search.xml
  field: post                # 搜索范围：post / page / all
  content: true              # 搜索文章内容

# AI 文章摘要
ai:
  enable: true               # 全局启用 AI 摘要
  model: deepseek            # AI 模型
  key: your-api-key          # API Key
  # 也可使用本地大模型
  # local: true
  # local_api: http://localhost:11434

# 评论系统（以 Artalk 为例）
comments:
  use: Artalk
  text: true                 # 评论框占位文字
  lazyload: true             # 懒加载
  count: true                # 评论计数
  Artalk:
    server: https://your-artalk-server.com
    site: your-site-name

# 访问统计
analytics:
  google_analytics: G-XXXXXXXXXX
  baidu_analytics: your-baidu-id
```

#### 关闭不需要的功能

```yaml
# 关闭微信卡片
wechat:
  enable: false

# 关闭音乐功能
music:
  enable: false

# 关闭看板娘
live2d:
  enable: false

# 关闭页面动效
dynamicEffect:
  flutter: false             # 飘落动效
  bubble: false              # 气泡动效
```

---

## 三、高级自定义美化

### 3.1 自定义 CSS 样式

#### 创建自定义 CSS 文件

在 `source/css/` 目录下创建 `custom.css`：

```css
/* ============================================
   自定义样式
   ============================================ */

/* 全局字体 */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
}

/* 文章内容区行间距 */
#article-container {
  line-height: 1.8;
  font-size: 16px;
}

/* 文章标题样式 */
#article-container h2 {
  font-size: 1.5rem;
  font-weight: 700;
  border-left: 4px solid #425AEF;
  padding-left: 16px;
  margin-top: 2.5rem;
}

#article-container h3 {
  font-size: 1.25rem;
  color: #425AEF;
}

/* 引用块美化 */
#article-container blockquote {
  border-left: 4px solid #425AEF;
  background: rgba(66, 90, 239, 0.05);
  border-radius: 0 12px 12px 0;
  padding: 16px 24px;
}

/* 代码块圆角 */
#article-container pre {
  border-radius: 12px;
}

/* 表格美化 */
#article-container table th {
  background: #425AEF;
  color: #fff;
}

/* 图片圆角 */
#article-container img {
  border-radius: 8px;
}

/* 链接样式 */
#article-container a {
  color: #425AEF;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s;
}

#article-container a:hover {
  border-bottom-color: #425AEF;
}
```

#### 引入自定义 CSS

在 `_config.anzhiyu.yml` 的 `inject` 部分引入：

```yaml
inject:
  head:
    - <link rel="stylesheet" href="/css/custom.css">
```

### 3.2 自定义 JavaScript

#### 创建自定义 JS 文件

在 `source/js/` 目录下创建 `custom.js`：

```javascript
// 页面加载完成后的自定义脚本
document.addEventListener('DOMContentLoaded', function () {

  // 示例1：为所有外部链接添加 target="_blank"
  document.querySelectorAll('#article-container a').forEach(function (link) {
    if (link.href.startsWith('http') && !link.href.includes(location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

  // 示例2：文章阅读进度条
  var progressBar = document.createElement('div');
  progressBar.style.cssText = 'position:fixed;top:0;left:0;height:3px;background:#425AEF;z-index:9999;transition:width 0.2s;';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var progress = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = progress + '%';
  });
});
```

#### 引入自定义 JS

在 `_config.anzhiyu.yml` 中：

```yaml
inject:
  bottom:
    - <script src="/js/custom.js"></script>
```

### 3.3 自定义 CDN 资源

在 `_config.anzhiyu.yml` 的 `CDN` 部分修改，可替换为国内 CDN 提高访问速度：

```yaml
CDN:
  css:
    - name: animate.css
      url: https://cdn.staticfile.net/animate.css/4.1.1/animate.min.css
    - name: fontawesome
      url: https://cdn.staticfile.net/font-awesome/6.5.1/css/all.min.css
  js:
    - name: pjax
      url: https://cdn.staticfile.net/pjax/0.2.8/pjax.min.js
```

### 3.4 右键菜单自定义

在 `_config.anzhiyu.yml` 中：

```yaml
right_menu:
  enable: true
  limit: 5                  # 最多显示条数

  # 自定义菜单项
  custom:
    - name: 回到顶部
      icon: fas fa-arrow-up
      url: javascript:scrollToTop()
      id: toTop

    - name: 复制本文链接
      icon: fas fa-link
      url: javascript:copyPageUrl()
      id: copyUrl

    - name: 访问 GitHub
      icon: fab fa-github
      url: https://github.com/yourname
      id: github
```

### 3.5 页脚自定义

```yaml
footer:
  owner:
    enable: true
    since: 2026
  custom_text: <a href="https://beian.miit.gov.cn/" target="_blank">备案号</a>
  copyright: true             # 显示版权信息
```

---

## 四、常用命令速查

### 4.1 核心命令

```bash
# 创建新文章
hexo new "文章标题"

# 创建新页面
hexo new page "页面名称"

# 创建草稿
hexo new draft "草稿标题"

# 发布草稿
hexo publish draft "草稿标题"

# 本地预览（清除缓存后启动）
hexo clean && hexo server

# 生成静态文件
hexo clean && hexo generate

# 部署到服务器
hexo clean && hexo deploy

# 同时生成并部署
hexo clean && hexo g -d
```

### 4.2 命令简写

| 完整命令 | 简写 |
|----------|------|
| `hexo server` | `hexo s` |
| `hexo generate` | `hexo g` |
| `hexo deploy` | `hexo d` |
| `hexo clean` | `hexo cl` |

### 4.3 调试命令

```bash
# 详细调试模式（排查配置错误）
hexo g --debug

# 查看当前 Hexo 版本
hexo version

# 查看所有可用命令
hexo help
```

---

## 五、注意事项与常见问题

### 5.1 配置修改后不生效？

```bash
# 每次修改配置后，务必清除缓存再重新生成
hexo clean && hexo server
```

### 5.2 配置优先级

- **根目录 `_config.anzhiyu.yml`**（高优先级）→ 主题目录 `_config.yml`（低优先级）
- **单篇文章 Front-matter**（最高优先级）→ 全局配置

### 5.3 主题更新注意事项

主题更新时可能会有配置变更：

1. 查看官方 [更新日志](https://github.com/anzhiyu-c/hexo-theme-anzhiyu/releases)
2. 对比新旧配置文件差异
3. 同步修改 `_config.anzhiyu.yml`

### 5.4 常见问题排查

| 问题 | 解决方案 |
|------|----------|
| 文章不显示 | 检查文件是否在 `source/_posts/` 目录，Front-matter 格式是否正确 |
| 主题不生效 | 确认 `_config.yml` 中 `theme: anzhiyu`，运行 `hexo clean` |
| 样式错乱 | 清除浏览器缓存，检查自定义 CSS 是否有语法错误 |
| 图片不显示 | 检查图片 URL 是否可访问，确认 `cover` 配置正确 |
| 配置不生效 | 运行 `hexo g --debug` 查看详细错误信息 |
| 部署失败 | 检查 Git Token、仓库地址和分支配置 |

### 5.5 最佳实践建议

1. **定期备份**：使用 Git 管理博客源码，推送到 GitHub 私有仓库
2. **图片管理**：使用图床（如 GitHub + jsDelivr、阿里云 OSS）存储图片
3. **SEO 优化**：每篇文章都填写 `description` 和 `keywords`
4. **性能优化**：启用图片懒加载，压缩资源文件
5. **安全建议**：不要在公开仓库中暴露 API Key 等敏感信息

---

## 结语

本文涵盖了安知鱼主题从基础内容编辑到高级自定义美化的完整流程。核心要点：

- ✅ 所有主题配置在 `_config.anzhiyu.yml` 中修改
- ✅ 修改配置后务必 `hexo clean` 清除缓存
- ✅ 单篇文章可通过 Front-matter 覆盖全局配置
- ✅ 自定义 CSS/JS 放在 `source/` 目录下通过 `inject` 引入

遇到问题时，优先查阅 [安知鱼官方文档](https://docs.anheyu.com/)，或在 [GitHub Issues](https://github.com/anzhiyu-c/hexo-theme-anzhiyu/issues) 中搜索解决方案。

Happy Blogging! 🎉
