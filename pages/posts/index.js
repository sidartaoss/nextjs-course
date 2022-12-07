import Head from "next/head";
import React from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage(props) {
  const { posts } = props;
  return (
    <React.Fragment>
      <Head>
        <title>All My Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts."
        />
      </Head>
      <AllPosts posts={posts} />
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: { posts: allPosts },
  };
}

export default AllPostsPage;
