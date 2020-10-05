import matter from 'gray-matter';

export default {
  getAll: () => {
    const posts = (ctx => {
        const keys = ctx.keys();
        const values = keys.map(ctx);
        // console.log(values);
        const data = keys.map((key, index) => {
            // Create slug from filename
            const slug = key.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
            const value = values[index];
            // Parse document
            const document = /*matter(value)*/ value;
            return {
                document,
                slug
            };
        });
        return data;
    })(require.context('../../_content/posts', true, /\.md$/));
    return { posts };
  }
}