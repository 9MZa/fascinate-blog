import tw, { styled } from "twin.macro";
import { Text, Heading } from "@/components/Title";
import { Container } from "@/elements/Container";

const Hero = ({ title, subtitle, size, color }) => {
    return (
        <Wrapper size={size} color={color}>
            <Container tw="space-y-5">
                <Heading size={2}>{title}</Heading>
                <Text color={color}>{subtitle}</Text>
            </Container>
        </Wrapper>
    );
};

export default Hero;

const Wrapper = styled.div(() => [
    tw``,
    ({ size = "medium" }) => HeroSize[size],
    ({ color = "primary" }) => HeroColor[color],

]);

const HeroSize = {
    "large": tw`py-32`,
    "medium": tw`py-24`,
    "small": tw`py-14`,
};

const HeroColor = {
    "primary": tw`bg-primary-500 text-white`,
    "secondary": tw`bg-gray-50 text-gray-800`,
};
