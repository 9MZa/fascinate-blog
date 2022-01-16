import Hero from "@/components/Section/Hero";
import { Heading, Text } from "@/components/Elements/Title";
import tw from "twin.macro";
import team from "images/team.svg";
import Image from "next/image";
import { Container } from "@/components/Elements/Container";

const Title = "Fascinate team";
const Detail = "Proident cupidatat commodo qui eiusmod irure. Cillum quis elit et do fugiat sit mollit proident magna culpa.";

const About = () => {
    return (
        <>
            <Hero size="small" color="secondary">
                <div tw="grid grid-cols-2 ">
                    <div tw="col-span-1 space-y-3 mt-10 ">
                        <Heading color="primary" size={2}>{Title} </Heading>
                        <Text size={2}> {Detail} </Text>
                    </div>
                    <div tw="col-span-1 -mt-20 ">
                        <Image src={team} width={500} height={500} alt="team" />
                    </div>
                </div>
            </Hero>

            <Hero>
                <div tw="flex text-center">
                    <div tw="w-1/3 ">

                        <Heading size={2} color="white"> 6,000+ </Heading>
                        <Text color="white">
                            subscribers, and growing fast
                        </Text>
                    </div>
                    <div tw="w-1/3">
                        <Heading size={2} color="white">34 </Heading>
                        <Text color="white">Articles so far</Text>
                    </div>
                    <div tw="w-1/3">
                        <Heading size={2} color="white"> 80+  </Heading>
                        <Text color="white"> Mentions in industry journals </Text>
                    </div>

                </div>
            </Hero>

        </>
    );
};

export default About;
