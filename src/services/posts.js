const getData = (keys, values) => keys.map((key, index) => {
  // Create slug from filename
  const slug = key.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
  const value = values[index];
  // Parse document
  const document = value;
  return {
      document,
      slug
  };
});

const posts = {
  getAll: () => {
    const posts = (ctx => {
      const keys = ctx.keys();
      const values = keys.map(ctx);
      const data = getData(keys, values);
        return data;
    })(require.context('../../_content/posts', true, /\.md$/));
    return { posts };
  }
}
export default posts;