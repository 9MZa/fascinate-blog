import Image from "next/image";
import Hero from "@/components/Section/Hero";
import { Heading, Text } from "@/components/Elements/Title";
import tw from "twin.macro";


const Title = "Contact us";
const Detail = "Proident cupidatat commodo qui eiusmod irure. Cillum quis elit et do fugiat sit mollit proident magna culpa.";

const Contact = () => {
    return (
        <div>
            <Hero size="large" >
                <div tw="grid grid-cols-2">
                    <div tw="col-span-1">
                        <Heading color="white" size={1}>{Title} </Heading>
                        <Text color="white" size={2}> {Detail} </Text>
                    </div>
                </div>
            </Hero>
        </div>
    );
};

export default Contact;
