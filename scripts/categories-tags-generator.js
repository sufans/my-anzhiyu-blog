// 分类+标签聚合页面生成器
hexo.extend.generator.register('categories-tags-page', function (locals) {
  const tags_page_list = hexo.extend.helper.get('tags_page_list').bind(hexo);

  return {
    path: 'categories-tags/index.html',
    data: {
      title: '分类 & 标签',
      date: hexo.config.date ? Date.now() : undefined,
      aside: false,
      top_img: false,
      comments: false,
      content: `
        <style>
          .categories-tags-page {
            text-align: center;
            max-width: 1400px;
            margin: 0 auto;
            padding: 30px 20px;
          }
          .categories-tags-page h2 {
            font-size: 2.2rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 30px;
          }
          .categories-tags-page .category-lists,
          .categories-tags-page .tag-cloud-list {
            margin-bottom: 60px;
            padding: 35px;
            border-radius: 18px;
            background: var(--card-bg, #fff);
            box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          }

          /* 胶囊容器 - 横向排列 */
          .categories-tags-page .category-lists ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 22px;
          }
          .categories-tags-page .tag-cloud-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 22px;
          }
          .categories-tags-page .category-lists li {
            display: inline-block;
          }

          /* 胶囊主体 - 深色胶囊 + 浅色文本 */
          .categories-tags-page .category-lists li a,
          .categories-tags-page .tag-cloud-list a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            font-size: 1.15rem;
            font-weight: 500;
            padding: 10px 22px;
            background: #2a2d3a;
            color: #f4f6fb !important;
            border: 1px solid #3a3d4e;
            border-radius: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            transition: transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease, color 0.25s ease;
            text-decoration: none;
            line-height: 1;
            white-space: nowrap;
          }
          .categories-tags-page .category-lists li a:hover,
          .categories-tags-page .tag-cloud-list a:hover {
            background: #3a3d4e;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            color: #fff !important;
          }

          /* 分类页 - 通过CSS添加 # 号前缀 */
          .categories-tags-page .category-lists li a::before {
            content: "#";
            font-weight: 700;
            color: #a8b0c7;
            margin-right: 4px;
          }

          /* 标签页 - 模板已自带 # 号，不需要CSS重复 */
          .categories-tags-page .tag-cloud-list .tags-punctuation {
            font-weight: 700;
            color: #a8b0c7;
            margin-right: 2px;
          }

          /* 数字徽章 - 胶囊中的数字小标签 */
          .categories-tags-page .category-list-count,
          .categories-tags-page .tagsPageCount {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 28px;
            height: 26px;
            padding: 0 10px;
            border-radius: 8px;
            background: #3a3d4e;
            color: #e8ebf5;
            font-size: 0.85rem;
            font-weight: 700;
            margin-left: 4px;
            line-height: 1;
          }

          /* 亮色模式适配 - 保持深色胶囊统一风格 */
          [data-theme="light"] .categories-tags-page .category-lists li a,
          [data-theme="light"] .categories-tags-page .tag-cloud-list a {
            background: #2a2d3a;
            color: #f4f6fb !important;
            border-color: #3a3d4e;
          }
          [data-theme="light"] .categories-tags-page .category-lists li a:hover,
          [data-theme="light"] .categories-tags-page .tag-cloud-list a:hover {
            background: #3a3d4e;
          }
          [data-theme="light"] .categories-tags-page .category-list-count,
          [data-theme="light"] .categories-tags-page .tagsPageCount {
            background: #4a4d5e;
            color: #fff;
          }
        </style>
        <div class="categories-tags-page">
          <div class="category-lists">
            <h2>分类</h2>
            ${tags_page_list('categories')}
          </div>
          <div class="tag-cloud-list is-center">
            <h2>标签</h2>
            ${tags_page_list('tags')}
          </div>
        </div>
      `
    },
    layout: 'page'
  };
});