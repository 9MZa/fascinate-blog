import tw, { styled } from "twin.macro";
import { Container } from "@/elements/Container";
import SEO from "next-seo.config";
import { LogoTwitter } from "@styled-icons/ionicons-solid/LogoTwitter";
import { LogoFacebook } from "@styled-icons/ionicons-solid/LogoFacebook";
import { LogoLinkedin } from "@styled-icons/ionicons-solid/LogoLinkedin";
import { LogoInstagram } from "@styled-icons/ionicons-solid/LogoInstagram";
import { StyledIconBase } from "@styled-icons/styled-icon";
import Link from "next/link";
import { CategoryList } from "./Navbar";
import { Heading, Text } from "@/elements/Title";
import Logo from "./Logo";
import { SubscribeButton } from "./Elements/Button";

const Footer = () => {

    const { title } = SEO;

    return (
        <Wrapper>
            <div tw="  py-6 z-20  ">
                <Container>
                    <div tw="flex">
                        <div tw="w-1/3"><Logo /></div>
                        <div tw="w-1/3 flex">
                            <div tw="w-1/2 space-y-2">
                                <Heading color="primary" size={7}>Blog</Heading>
                                <div tw="space-y-1">
                                    <Text size={5}>
                                        <Link href="/about"><a>About</a></Link>
                                    </Text>
                                    <Text size={5}>
                                        <Link href="/contact"><a>Contact</a></Link>
                                    </Text>
                                </div>
                            </div>
                            <div tw="w-1/2 space-y-2">
                                <Heading color="primary" size={7}> Category </Heading>
                                <div tw="space-y-1">
                                    {CategoryList.map((item, i) => {
                                        return (
                                            <Text key={i}>
                                                <Link href={`/category/${item.slug}`}>
                                                    <a>
                                                        {item.title}
                                                    </a>
                                                </Link>
                                            </Text>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div tw="w-1/3 space-y-2 ">
                            <Heading color="primary" size={7}>Subscribe</Heading>
                            <Text>
                                Sign up for the Frequency Blog.
                                Get the latest news, company insights, and Frequency updates.
                            </Text>
                            <div tw="pt-5">
                                <form tw="flex ">
                                    <input tw="text-gray-800 border-gray-200 bg-white border-l border-b border-t rounded-l px-3 py-1.5 outline-none
                                    focus:border-primary-600 placeholder:text-gray-300
                                    " placeholder="Enter your email" />
                                    <SubscribeButton tw="rounded-none rounded-r" >
                                        Subscribe
                                    </SubscribeButton>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div tw="border-t border-gray-50 mt-20 mb-5" />

                    <div tw="flex justify-between text-gray-600   ">
                        <Text size={6}> {`© 2022 ${title} . All Rights Reserved.`} </Text>
                        <Text tw="flex space-x-3">
                            <p>Follow us:</p>
                            <IconStyleWrapper>
                                <Link href="#"><a><LogoLinkedin /></a></Link>
                                <Link href="#"><a><LogoTwitter /></a></Link>
                                <Link href="#"><a><LogoInstagram /></a></Link>
                                <Link href="#"><a><LogoFacebook /></a></Link>
                            </IconStyleWrapper>
                        </Text>
                    </div>
                </Container>
            </div>
        </Wrapper>
    );
};

export default Footer;

const Wrapper = tw.div`
mt-20
`;

const IconStyleWrapper = styled.div`
    ${tw`space-x-2`}
    ${StyledIconBase} {
        ${tw`text-gray-500 w-7 transition `}
        :hover {
            ${tw`text-gray-700`}
        }
  }
`;