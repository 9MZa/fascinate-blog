import Image from "next/image";
import tw, { styled } from "twin.macro";
import Link from "next/link";
import { Heading, Text } from "@/components/Elements/Title";
import Category from "@/elements/Category";
import CalcReadingTime from "@/lib/minuteRead";
import Point from "../Point";

const CommonCard = ({ post, coverSize }) => {

    const { title, excerpt, slug, categories, content: { text },
        thumbnail: { url: thumbnail }
    } = post;


    return (
        <Wrapper>
            <Thumbnail size={coverSize}>
                <Image
                    src={thumbnail}
                    alt={title}
                    objectFit="cover"
                    layout="fill" />
            </Thumbnail>
            <div tw="space-y-3 mt-4">
                <div tw="flex space-x-3 items-baseline">
                    <div>
                        <Text color="category" size={6}>
                            <Category category={categories} />
                        </Text>
                    </div>
                    <Point />
                    <div>
                        <Text size={7}>
                            <CalcReadingTime text={text} />
                        </Text>
                    </div>
                </div>
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

const Thumbnail = styled.div(() => [
    tw`w-full rounded overflow-hidden relative`,
    ({ size = "medium" }) => ThumbnailSize[size],

]);

const ThumbnailSize = {
    "large": tw`h-80`,
    "medium": tw`h-52`,
};