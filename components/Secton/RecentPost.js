import tw from "twin.macro";
import { Container } from "../Container";
import ThreeColumns from "../PostTemplate/ThreeColumns";

const RecentPost = ({ post }) => {

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

export default RecentPost;

const Wrapper = tw.div`my-5`;

