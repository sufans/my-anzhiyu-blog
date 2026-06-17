# Stan的自留地

基于 Hexo + AnZhiYu 主题的个人博客。

## 快速开始

```bash
# 安装依赖
npm install

# 本地预览
npx hexo server

# 生成静态文件
npx hexo generate

# 新建文章
npx hexo new post <文章名>
```

## 部署

`npx hexo generate` 生成 `public/` 目录，静态部署到 Cloudflare Pages（自动从 GitHub 仓库拉取）。

## 项目结构

```
source/_posts/      # 文章目录
source/_data/       # 页面数据（about.yml、album.yml）
source/about/       # 关于页
source/album/       # 相册页
source/comments/    # 留言板
scripts/            # Hexo 脚本/生成器
```

## 配置

| 文件 | 说明 |
|------|------|
| `_config.yml` | Hexo 主配置 |
| `_config.anzhiyu.yml` | AnZhiYu 主题配置 |

## 依赖

- Hexo 8.1+
- Node.js 18+
- AnZhiYu 1.7.0