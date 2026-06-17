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
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }
          .categories-tags-page h2 {
            font-size: 2.2rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 30px;
          }
          .categories-tags-page .category-lists,
          .categories-tags-page .tag-cloud-list {
            margin-bottom: 50px;
            padding: 30px;
            border: 2px solid var(--border-color, #e3e8f7);
            border-radius: 16px;
            background: var(--card-bg, #fff);
            box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          }
          .categories-tags-page .category-lists ul,
          .categories-tags-page .tag-cloud-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 16px;
            list-style: none;
            padding: 0;
          }
          .categories-tags-page .category-lists li {
            display: inline-block;
          }
          .categories-tags-page .category-lists li a,
          .categories-tags-page .tag-cloud-list a {
            font-size: 1.15rem;
            padding: 8px 22px;
            border: 1px solid var(--border-color, #e3e8f7);
            border-radius: 30px;
            display: inline-block;
            transition: all 0.3s ease;
            background: var(--secondbg, #f7f9ff);
          }
          .categories-tags-page .category-lists li a:hover,
          .categories-tags-page .tag-cloud-list a:hover {
            background: var(--theme-color, #425AEF);
            color: #fff !important;
            border-color: var(--theme-color, #425AEF);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(66,90,239,0.3);
          }
          .categories-tags-page .category-lists .category-list-count {
            margin-left: 4px;
            font-size: 0.9rem;
            opacity: 0.7;
          }
          [data-theme="dark"] .categories-tags-page .category-lists,
          [data-theme="dark"] .categories-tags-page .tag-cloud-list {
            border-color: var(--border-color, #2c2c2c);
            background: var(--card-bg, #1e1e1e);
          }
          [data-theme="dark"] .categories-tags-page .category-lists li a,
          [data-theme="dark"] .categories-tags-page .tag-cloud-list a {
            border-color: var(--border-color, #444);
            background: var(--secondbg, #2a2a2a);
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