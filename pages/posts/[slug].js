import Head from "next/head";
import React from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

function PostDetailPage(props) {
  const { post } = props;

  return (
    <React.Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </React.Fragment>
  );
}

export async function getStaticProps(context) {
  const postSlug = context.params.slug;

  const loadedPost = getPostData(postSlug);
  return {
    props: { post: loadedPost },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const postFileNames = getPostsFiles();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
