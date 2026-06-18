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
        <div id="tag">
          <h2 style="text-align:center;">分类</h2>
          <div class="category-lists" id="tag-page-tags">
            ${tags_page_list('categories')}
          </div>
          <h2 style="text-align:center;margin-top:60px;">标签</h2>
          <div class="tag-cloud-list is-center">
            <div id="tag">
              <div id="tag-page-tags">
                ${tags_page_list('tags')}
              </div>
            </div>
          </div>
        </div>
      `
    },
    layout: 'page'
  };
});