import { gql } from "@apollo/client";
import client from "../../apolloClient";
import Image from "next/image";
import ThreeColumns from "../../components/PostTemplate/ThreeColumns";
import tw from "twin.macro";
import { Container } from "../../components/Container";
const CategorySlug = ({ posts }) => {

    const { categories: { name } } = posts[0];

    return (
        <>
            <div tw="max-w-6xl mx-auto py-10 space-y-5" >
                <h1 tw="text-5xl font-semibold "> {name} Posts </h1>
                <p>Dicta nihil ratione corrupti. Aut dolorem dolores omnis laboriosam ratione sequi. Provident ad sed velit. Est ea ab.</p>
            </div>
            <Container>
                <ThreeColumns post={posts} />
            </Container>
        </>
    );
};

export default CategorySlug;


export async function getStaticPaths() {
    const { data } = await client.query({
        query: gql`query { 
            categories {
            slug
            name
        }
        }`
    });
    const { categories } = data;

    const paths = categories.map(item => ({
        params: { slug: item.slug }
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {

    const slug = params.slug;

    const { data } = await client.query({
        query: gql`query getPostBySlug ($slug: String!) {
        posts(where: {categories: {slug: $slug}}) {
          title
          slug
          excerpt
          categories{
            name
            slug
          }
          thumbnail{
              url
          }
        }
      }`,
        variables: { slug }
    });

    const { posts } = data;

    return {
        props: {
            posts
        }
    };
}


