import CommonCard from "../Card/Common";
import tw from "twin.macro";

const TwoColumns = ({ post, coverSize }) => {


    return (
        <>
            <Wrapper>
                {post.map((item, i) => {
                    return (
                        <CommonCard coverSize={coverSize} key={i} post={item} />
                    );
                })}
            </Wrapper>

        </>
    );
};


export default TwoColumns;



const Wrapper = tw.div`
grid grid-cols-2 gap-10 mt-10
`;