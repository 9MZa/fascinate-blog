import tw, { styled } from "twin.macro";


export const Button = tw.button`
text-base px-4 py-2 font-semibold rounded transition
`;

export const SubscribeButton = styled(Button)(({ hasBG }) => [
    tw`bg-primary-500 text-white hover:bg-primary-600`,
    hasBG && tw`bg-primary-600 hover:bg-primary-700`,
]);

export const ReadButton = styled(Button)`
${tw`font-normal text-base px-0 text-gray-600 hover:text-primary-500 transition`}
`;

export const SubmitButton = styled(Button)`

${tw`bg-primary-500 hover:bg-primary-600 text-white py-3`}

`;