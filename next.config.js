const { promises: fs } = require('fs');

module.exports = {
  exportTrailingSlash: true,

  webpack: cfg => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['body'] }
    });
    return cfg;
  },

  exportPathMap: async () => {
    const paths = {
      '/': { page: '/home' },
      '/about': { page: '/about' },
      '/posts': { page: '/posts' }
    };

    const files = await fs.readdir('./_content/posts');
    files.forEach(file => {
      const fileSlug = file.replace('.md', '');
      console.log(`/post/${fileSlug}`);
      paths[`/post/${fileSlug}`] = {
        page: '/post/[slug]',
        query: { slug: fileSlug }
      };
    });

    console.log(paths);

    return paths;
  }
};
