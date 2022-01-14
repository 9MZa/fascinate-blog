import tw, { styled } from "twin.macro";

const Point = styled.div`
${tw`text-lg text-gray-500`} 

::after{
    content: "\u2022";
}
`;

export default Point;