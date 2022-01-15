import tw from "twin.macro";
import { Container } from "@/elements/Container";
import Big from "@/elements/Card/Big";
import Devider from "@/elements/Devider";

const FeaturePost = ({ post }) => {
    return (
        <>
            <Wrapper tw="">
                <Container >
                    <Big post={post} />
                </Container>
            </Wrapper>
            <Devider position="bottom" />
        </>
    );
};

export default FeaturePost;

const Wrapper = tw.div`bg-gray-50 pt-10 pb-5`;
