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
      content: `
        <div class="category-lists">
          <h2>分类</h2>
          ${tags_page_list('categories')}
        </div>
        <div class="tag-cloud-list is-center">
          <h2>标签</h2>
          ${tags_page_list('tags')}
        </div>
      `
    },
    layout: 'page'
  };
});