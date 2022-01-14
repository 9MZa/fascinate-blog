import { Container } from "../../components/Container";
import { gql } from "@apollo/client";
import client from "../../apolloClient";
import AllPost from "../../components/Secton/AllPost";
import tw from "twin.macro";
import Hero from "../../components/Secton/Hero";

const PostAll = ({ posts }) => {
  return (
    <div>
      <Hero color="secondary" title="All Post" size="small" subtitle="Aliquip incididunt cupidatat laboris enim officia nisi velit culpa in sint eu esse." />
      <Container>
        <AllPost post={posts} />
      </Container>
    </div>
  );
};

export default PostAll;



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
