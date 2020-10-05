import React from 'react';
import ReactMarkdown from 'react-markdown';
import HeaderNav from '../../shared/layout/HeaderNav';

const Post = ({ attributes, content }) => {
  return (
  <>
    <HeaderNav />
    <h2>{ attributes.title }</h2>
    <ReactMarkdown source={ content } />
  </>
  )
};

Post.getInitialProps = async ({ query }) => {
  const mkp = await import(`../../../_content/posts/${query.slug}.md`);
  console.log(mkp);
  const { attributes, body: content } = mkp;
  return { attributes, content };
}

export default Post;