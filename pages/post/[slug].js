import tw from "twin.macro";
import { gql } from "@apollo/client";
import client from "../../apolloClient";
import Image from "next/image";

const Content = tw.article`


`;

const PostSlug = ({ post }) => {

    const { title, categories: { name: category }, thumbnail: { url: thumbnail },
        content: { html: content },


    } = post;


    return (
        <div tw="max-w-3xl mx-auto py-10 space-y-5">
            <p tw="text-sm"> <span tw="text-primary-500" > {category} </span>  • 5 min read</p>
            <h1 tw="text-5xl font-semibold">{title}</h1>
            <p>By Arden Huels Published Oct 8, 2021 </p>
            <div tw="relative rounded-md overflow-hidden bg-cover h-96 w-full mx-auto ">
                <Image objectFit="cover" src={thumbnail}
                    layout="fill" alt={title} />

            </div>
            <article dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export default PostSlug;

export async function getStaticPaths() {
    const { data } = await client.query({
        query: gql`query { 
            posts {
            slug
        }
        }`
    });
    const { posts } = data;
    const paths = posts.map(posts => ({
        params: { slug: posts.slug }
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {

    const slug = params.slug;

    const { data } = await client.query({
        query: gql`query getPostBySlug ($slug: String!) {
        post(where: {slug: $slug}) {
          title
          content{
            html
          }
          thumbnail{
              url
          }
          categories {
            name
          }
        }
      }`,
        variables: { slug }
    });

    const { post } = data;

    return {
        props: {
            post
        }
    };
}
