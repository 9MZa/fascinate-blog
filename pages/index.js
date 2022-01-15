import { gql } from "@apollo/client";
import client from "@/lib/apolloClient";
import RecentPost from "@/section/RecentPost";
import FeaturePost from "@/section/FeaturePost";
import Subscribe from "@/section/Subscribe";
import { NextSeo } from "next-seo";
import SEO from "next-seo.config";

const Index = ({ posts }) => {

  const { title, description } = SEO;

  return (
    <>
      <NextSeo
        title={`${title} Blog`}
        description={description}
        openGraph={{
          url: "https://localhost/",
          title: title,
          description: description,
        }}
      />
      <FeaturePost post={posts.slice(0, 1)} />
      <RecentPost post={posts.slice(1, 7)} />
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
