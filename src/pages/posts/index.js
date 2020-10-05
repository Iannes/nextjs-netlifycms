import React from 'react';
import Link from 'next/link';
import postsServices from '../../services/posts';

import HeaderNav from '../../shared/layout/HeaderNav';

const Posts = ({ posts }) => {
  return (
    <>
      <HeaderNav />

      {posts.map(({ document, slug }) => (
        <section key={slug}>
          <h2>{document.attributes.title}</h2>
          <span>
            leia mais em
            <Link href="/post/[slug]" as={`/post/${slug}`}>
              <a>{slug}</a>
            </Link>
          </span>
        </section>
      ))}
    </>
  );
};

Posts.getInitialProps = () => {
  return postsServices.getAll();
};

export default Posts;
