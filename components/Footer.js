import tw from "twin.macro";
import { Container } from "@/elements/Container";

const Footer = () => {
    return (
        <footer>
            <div tw=" border-t border-gray-50 py-6 ">
                <Container>
                    <div tw="flex justify-between text-gray-600  ">
                        <p tw="text-sm"> © 2022 Clean. All Rights Reserved. </p>
                        <p>Follow us:</p>
                    </div>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
