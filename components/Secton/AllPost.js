import tw from "twin.macro";
import ThreeColumns from "../PostTemplate/ThreeColumns";
import { Container } from "../Container";


const AllPost = ({ post }) => {
    return (
        <Container>
            <ThreeColumns post={post} />
        </Container>
    );
};

export default AllPost;


