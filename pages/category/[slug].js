import { gql } from "@apollo/client";
import client from "../../apolloClient";
import Image from "next/image";
import ThreeColumns from "../../components/PostTemplate/ThreeColumns";
import tw from "twin.macro";
import { Container } from "../../components/Container";
import Hero from "../../components/Secton/Hero";
const CategorySlug = ({ posts }) => {

    const { categories: { name: categoryName, description } } = posts[0];

    return (
        <>
            <Hero color="secondary" title={`${categoryName} Post`} subtitle={description} />
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
            description
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


