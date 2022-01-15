import Link from "next/link";
import tw from "twin.macro";
import SEO from "next-seo.config";
import { Heading, Text } from "@/elements/Title";

const Logo = () => {

    const { title } = SEO;

    return (
        <div>
            <Link href="/" passHref>
                <a tw="flex items-baseline space-x-1 font-semibold">
                    <Heading size={4}> {title} </Heading>
                    <Text size={2}>Blog</Text>
                </a>
            </Link>
        </div>

    );
};

export default Logo;
