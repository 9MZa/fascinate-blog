import Image from "next/image";
import tw from "twin.macro";
import Link from "next/link";
const CommonCard = ({ post }) => {

    const { title, excerpt, slug,
        categories: { name: categoryName, slug: categorySlug },
        thumbnail: { url: thumbnail }


    } = post;

    return (


        <Wrapper>
            <div tw="w-full bg-gray-500 rounded overflow-hidden  h-52 relative">

                <Image
                    src={thumbnail}
                    alt={title}
                    objectFit="cover"
                    layout="fill" />
            </div>
            <div tw="space-y-3 mt-4">
                <div>
                    <Link href={`/category/${categorySlug}`} passHref>
                        <a tw="text-primary-500 text-sm">{categoryName}</a>
                    </Link>
                </div>
                <div>
                    <Link href={`/post/${slug}`} passHref>
                        <a tw="text-gray-800 text-2xl font-semibold">{title}</a>
                    </Link>
                </div>
                <p tw="text-gray-500"> {excerpt} </p>
            </div>
        </Wrapper>

    );
};

export default CommonCard;


const Wrapper = tw.div`
 w-full hover:-translate-y-1 transition duration-300
`;