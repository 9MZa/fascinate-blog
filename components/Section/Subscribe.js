import tw from "twin.macro";
import { Text, Heading } from "@/components/Elements/Title";
import { Container } from "@/elements/Container";
import { SubscribeButton } from "@/elements/Button";
import Devider from "@/elements/Devider";

const headText = "Subscribe to our newsletter";
const bodyText = "Signup for our weekly newsletter to get the latest news, updates and amazing offers delivered directly in your inbox";

const Subscribe = () => {
    return (
        <>
            {/* <Devider position="top" /> */}
            <div tw="bg-gray-50 py-20">
                <Container>
                    <Wrapper>
                        <div>
                            <Heading color="white" >{headText}</Heading>
                            <Text color="white">{bodyText}</Text>
                        </div>
                        <div tw="space-x-2">
                            <input tw="px-3 py-2 rounded focus:outline-none   " placeholder="Enter your email" />
                            <SubscribeButton hasBG> Subscribe </SubscribeButton>

                        </div>
                    </Wrapper>
                </Container>
            </div>
            {/* <Devider position="bottom" /> */}
        </>
    );
};

export default Subscribe;



const Wrapper = tw.div`
text-center bg-primary-500 py-20 rounded-md space-y-5
`;

