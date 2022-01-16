import tw from "twin.macro";
import { Container } from "@/elements/Container";
import Link from "next/link";
import Logo from "./Logo";
import { SubscribeButton } from "./Elements/Button";

const NavList = [
    { title: "All Post", slug: "/post" },
    { title: "About", slug: "/about" }
];

export const CategoryList = [
    { title: "Product", slug: "product" },
    { title: "Management", slug: "management" },
    { title: "Balance", slug: "balance" },
    { title: "Teamwork", slug: "teamwork" },
    { title: "Productivity", slug: "productivity" },
];

const Navbar = () => {
    return (
        <Wrapper>
            <Container>
                <div tw="flex justify-between">
                    <Logo />
                    <div tw="flex list-none text-gray-600  font-semibold space-x-8 items-center">
                        {NavList.map((item, i) => {
                            return (
                                <li key={i}>
                                    <Link href={item.slug}>
                                        <a> {item.title} </a>
                                    </Link>
                                </li>
                            );
                        })}
                        <SubscribeButton>
                            Subscribe
                        </SubscribeButton>
                    </div>
                </div>
            </Container>

            <div tw="border-b border-gray-50 my-4 " />

            <Container>
                <SubNavWrap>
                    {CategoryList.map((item, i) => {
                        return (
                            <Link href={`/category/${item.slug}`} key={i}>
                                <a>
                                    {item.title}
                                </a>
                            </Link>
                        );
                    })}
                </SubNavWrap>

            </Container>
        </Wrapper>
    );
};

export default Navbar;

const Wrapper = tw.nav`py-3 shadow-sm relative `;

const SubNavWrap = tw.nav`flex list-none space-x-5 text-gray-600 text-sm `;
