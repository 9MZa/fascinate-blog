import tw, { styled } from "twin.macro";


export const Button = tw.button`
text-base px-4 py-2 font-semibold rounded
`;

export const SubscribeButton = styled(Button)(({ hasBG }) => [
    tw`bg-primary-500 text-white `,
    hasBG && tw`bg-primary-600`,
]);

export const ReadButton = styled(Button)`
${tw`font-normal text-base px-0 text-gray-600 hover:text-gray-700 transition hover:after:content-['->'] `}
`;