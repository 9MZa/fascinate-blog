import { gql } from "@apollo/client";
import client from "@/lib/apolloClient";
import ThreeColumns from "@/elements/PostTemplate/ThreeColumns";
import tw from "twin.macro";
import { Container } from "@/elements/Container";
import Hero from "@/components/Section/Hero";
import { NextSeo } from "next-seo";
import SEO from "next-seo.config";

const CategorySlug = ({ posts }) => {

    const { categories: { name: categoryName, description, slug } } = posts[0];

    const { title, url } = SEO;

    return (
        <>
            <NextSeo
                title={`${categoryName} Posts | ${title}`}
                description={description}
                openGraph={{
                    url: `${url}/category/${slug}`,
                    title: categoryName,
                    description: description,
                }}
            />
            <Hero color="secondary" title={`${categoryName} Posts`} subtitle={description} />
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
          content{
              text
          }
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


