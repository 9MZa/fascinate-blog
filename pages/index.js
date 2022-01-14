import tw from "twin.macro";
import Big from "../components/Card/Big";
import { Container } from "../components/Container";
import { gql } from "@apollo/client";
import client from "../apolloClient";
import RecentPost from "../components/Secton/RecentPost";

const Index = ({ posts }) => {

  return (
    <>

      <div tw="bg-gray-50 py-10">
        <Container >
          <Big post={posts.slice(0, 1)} />
        </Container>
      </div>

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
