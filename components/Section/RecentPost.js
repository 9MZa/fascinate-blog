import tw from "twin.macro";
import { Container } from "@/elements/Container";
import ThreeColumns from "@/elements/PostTemplate/ThreeColumns";
import TwoColumns from "@/elements/PostTemplate/TwoColumns";

export const FirstRecents = ({ post }) => {

    return (
        <Wrapper>
            <Container>
                <h2 tw="text-3xl font-semibold text-gray-700">
                    The latest from the blog
                </h2>
                <ThreeColumns post={post} />
            </Container>
        </Wrapper>
    );
};


export const SecondRecents = ({ post }) => {

    return (
        <Wrapper>
            <Container>
                <h2 tw="text-3xl font-semibold text-gray-700">
                    The latest from the blog
                </h2>
                <TwoColumns coverSize="large" post={post} />
            </Container>
        </Wrapper>
    );
};


const Wrapper = tw.div`my-20`;



