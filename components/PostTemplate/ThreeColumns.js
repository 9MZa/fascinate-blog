import CommonCard from "../Card/Common";
import tw from "twin.macro";

const ThreeColumns = ({ post }) => {
    return (
        <>
            <Wrapper>
                {post.map((item, i) => {
                    return (
                        <CommonCard key={i} post={item} />
                    );
                })}
            </Wrapper>

        </>
    );
};

export default ThreeColumns;


const Wrapper = tw.div`
grid grid-cols-3 gap-10 mt-10
`;