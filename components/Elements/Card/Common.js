import Image from "next/image";
import tw from "twin.macro";
import Link from "next/link";
import { Heading, Text } from "@/components/Elements/Title";
import Category from "@/elements/Category";
const CommonCard = ({ post }) => {

    const { title, excerpt, slug, categories, thumbnail: { url: thumbnail } } = post;

    return (
        <Wrapper>
            <div tw="w-full rounded overflow-hidden  h-52 relative">
                <Image
                    src={thumbnail}
                    alt={title}
                    objectFit="cover"
                    layout="fill" />
            </div>
            <div tw="space-y-3 mt-4">
                <Text color="category" size={6}><Category category={categories} /></Text>
                <div>
                    <Link href={`/post/${slug}`} passHref>
                        <a>
                            <Heading size={5}>{title}</Heading>
                        </a>
                    </Link>
                </div>
                <Text>{excerpt}</Text>
            </div>
        </Wrapper>
    );
};

export default CommonCard;


const Wrapper = tw.div`
 w-full hover:-translate-y-1 transition duration-300
`;