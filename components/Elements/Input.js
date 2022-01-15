import tw from "twin.macro";
import { SubscribeButton } from "./Button";
const Input = () => {
    return (
        <div tw="space-x-2">
            <input tw="rounded px-4 py-2" placeholder="Enter your Email"
            />
            <SubscribeButton> Subscribe </SubscribeButton>

        </div>
    );
};

export default Input;
