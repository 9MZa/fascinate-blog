import tw from "twin.macro";
import { gql } from "@apollo/client";
import client from "@/lib/apolloClient";
import Image from "next/image";
import CalcReadingTime from "@/lib/minuteRead";
import Point from "@/elements/Point";
import Category from "@/elements/Category";
import { Heading, Text } from "@/components/Elements/Title";
import dayjs from "dayjs";
import { NextSeo } from "next-seo";

const PostSlug = ({ post }) => {

    const { title, categories, publishedAt, excerpt, slug,
        createdBy: { name: createdName, picture: createdPicture },
        thumbnail: { url: thumbnail },
        content: { html: content, text },
    } = post;

    return (
        <>
            <NextSeo
                title={title}
                description={excerpt}
                openGraph={{
                    url: `https://localhost/${slug}`,
                    title: title,
                    description: excerpt,
                    images: [
                        {
                            url: thumbnail,
                            width: 800,
                            height: 600,
                            alt: title,
                        },
                    ],
                }}
            />
            <div tw="max-w-3xl mx-auto py-10 space-y-5">
                <div tw="flex space-x-3 items-center">
                    <div>
                        <Text color="category"><Category category={categories} /></Text>
                    </div>
                    <div><Point /></div>
                    <Text size={6}><CalcReadingTime text={text} /></Text>
                </div>
                <Heading size={2}>{title}</Heading>
                <div tw="flex space-x-3 items-center">
                    <div tw="rounded-full overflow-hidden relative h-14 w-14">
                        <Image src={createdPicture} layout="fill" objectFit="cover" alt={createdName} />
                    </div>
                    <div>
                        <Text size={6}>By {createdName}</Text>
                        <Text size={7} color="light">Published {dayjs(publishedAt).format("MMM DD, YYYY")}</Text>
                    </div>
                </div>
                <div tw="relative rounded-md overflow-hidden bg-cover h-96 w-full mx-auto ">
                    <Image objectFit="cover" src={thumbnail}
                        layout="fill" alt={title} />

                </div>
                <article dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </>
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
        post(where: {slug: $slug},stage: PUBLISHED) {
          title
          excerpt
          slug
          publishedAt
          content{
            html
            text
          }
          thumbnail{
              url
          }
          categories {
            name
            slug
          }
          createdBy {
              name
              picture
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
