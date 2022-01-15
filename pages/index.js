import { gql } from "@apollo/client";
import client from "@/lib/apolloClient";
import RecentPost from "@/section/RecentPost";
import FeaturePost from "@/section/FeaturePost";


const Index = ({ posts }) => {

  return (
    <>
      <FeaturePost post={posts.slice(0, 1)} />
      <RecentPost post={posts.slice(1, 7)} />
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
