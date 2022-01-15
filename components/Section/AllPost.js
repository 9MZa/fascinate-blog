import tw from "twin.macro";
import ThreeColumns from "@/elements/PostTemplate/ThreeColumns";
import { Container } from "@/elements/Container";


const AllPost = ({ post }) => {
    return (
        <Container>
            <ThreeColumns post={post} />
        </Container>
    );
};

export default AllPost;


