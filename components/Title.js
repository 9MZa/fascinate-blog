import tw, { styled } from "twin.macro";

const HeadingSize = {
    1: tw`text-6xl`,
    2: tw`text-5xl`,
    3: tw`text-4xl`,
    4: tw`text-3xl`,
    5: tw`text-2xl`,
    6: tw`text-xl`,
};

const TextSize = {
    1: tw`text-3xl`,
    2: tw`text-2xl`,
    3: tw`text-xl`,
    4: tw`text-lg`,
    5: tw`text-base`,
    6: tw`text-sm`,
    7: tw`text-xs`,
};


const TextColor = {
    "white": tw`text-white`,
    "paragraph": tw`text-gray-600`,
    "category": tw`text-primary-500`,
    "light": tw`text-gray-400`,
};


export const Heading = styled.h1(({ }) => [
    tw`font-semibold`,
    ({ size = 3 }) => HeadingSize[size],
]);



export const Text = styled.p(({ }) => [
    tw``,
    ({ size = 5 }) => TextSize[size],
    ({ color = "paragraph" }) => TextColor[color],
]);

