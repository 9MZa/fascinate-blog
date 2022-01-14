import tw from "twin.macro";
import Big from "../components/Card/Big";
import { Container } from "../components/Container";
import { gql } from "@apollo/client";
import client from "../apolloClient";
import RecentPost from "../components/Secton/RecentPost";
import Image from "next/image";

const Index = ({ posts }) => {

  return (
    <>

      <div tw="bg-gray-50 relative pt-10 pb-5">
        <Container >
          <Big post={posts.slice(0, 1)} />
        </Container>
      </div>
      <div tw="relative w-full h-20 mb-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F5F6F7" d="M0,96L1440,32L1440,0L0,0Z">
        </path></svg>
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
