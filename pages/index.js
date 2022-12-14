import { gql } from "@apollo/client";
import client from "@/lib/apolloClient";
import { FirstRecents, SecondRecents } from "@/components/Section/RecentPost";
import FeaturePost from "@/section/FeaturePost";

import Subscribe from "@/section/Subscribe";
import { NextSeo } from "next-seo";
import SEO from "next-seo.config";

const Index = ({ posts }) => {

  const { title, description, url } = SEO;

  return (
    <>
      <NextSeo
        title={`${title} Blog`}
        description={description}
        openGraph={{
          url: `${url}/`,
          title: title,
          description: description,
        }}
      />
      <FeaturePost post={posts.slice(0, 1)} />
      <FirstRecents post={posts.slice(1, 7)} />
      <SecondRecents post={posts.slice(0, 4)} />
      <Subscribe />
    </>
  );
};

export default Index;


export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`query {
        posts(orderBy: createdAt_DESC) {
          title
          slug
          excerpt
          content {
            text
          }
          thumbnail {
            url
          }
          categories {
            name
            slug
          }
        }
      }      
  `
  });

  const { posts } = data;


  return {
    props: {
      posts
    }
  };
}
