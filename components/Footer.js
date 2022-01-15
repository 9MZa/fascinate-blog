import tw from "twin.macro";
import { Container } from "@/elements/Container";
import SEO from "next-seo.config";

const Footer = () => {

    const { title } = SEO;

    return (
        <Wrapper>
            <div tw=" border-t border-gray-50 py-6 ">
                <Container>
                    <div tw="flex justify-between text-gray-600  ">
                        <p tw="text-sm"> {`© 2022 ${title} . All Rights Reserved.`} </p>
                        <p>Follow us:</p>
                    </div>
                </Container>
            </div>
        </Wrapper>
    );
};

export default Footer;

const Wrapper = tw.footer`
mt-20
`;
