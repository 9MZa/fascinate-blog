import tw, { styled } from "twin.macro";

const Devider = ({ position }) => {
    return (
        <Wrapper position={position} tw="relative w-full h-20 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F5F6F7" d="M0,96L1440,32L1440,0L0,0Z"></path></svg>
        </Wrapper>
    );
};

export default Devider;

const Positions = {
    "top": tw`rotate-180`,
    "bottom": tw`rotate-0`,
};



const Wrapper = styled.h1(() => [
    tw``,
    ({ position = "top" }) => Positions[position],

]);

