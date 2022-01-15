import tw from "twin.macro";
import { Container } from "@/elements/Container";
import Big from "@/elements/Card/Big";

const FeaturePost = ({ post }) => {
    return (
        <>
            <Wrapper tw="">
                <Container >
                    <Big post={post} />
                </Container>
            </Wrapper>
            <div tw="relative w-full h-20 mb-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F5F6F7" d="M0,96L1440,32L1440,0L0,0Z">
                </path></svg>
            </div>
        </>
    );
};

export default FeaturePost;

const Wrapper = tw.div`bg-gray-50 pt-10 pb-5`;
