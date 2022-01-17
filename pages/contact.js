import Image from "next/image";
import Hero from "@/components/Section/Hero";
import { Heading, Text } from "@/components/Elements/Title";
import tw from "twin.macro";
import { SubmitButton } from "@/components/Elements/Button";
import { Container } from "@/components/Elements/Container";

const Title = "Contact us";
const Detail = "Proident cupidatat commodo qui eiusmod irure. Cillum quis elit et do fugiat sit mollit proident magna culpa.";

const Contact = () => {
    return (
        <div>
            <div size="large" tw="bg-primary-500 " >
                <Container>
                    <div tw="grid grid-cols-2 items-center">
                        <div tw="col-span-1 space-y-5">
                            <Heading color="white" size={1}>{Title} </Heading>
                            <Text color="white" size={2}> {Detail} </Text>
                        </div>
                        <div tw="col-span-1">
                            <form tw="flex flex-col space-y-2 bg-white p-10 my-10 rounded ">
                                <label tw="text-base text-gray-600 after:content-['*'] after:ml-1">First Name</label>
                                <input tw=" border rounded outline-none focus:border-primary-500 ring-primary-100 focus:ring-2 p-2 transition " type="text" placeholder="Your first name" />

                                <label tw="text-base text-gray-600 after:content-['*'] after:ml-1">Last Name</label>
                                <input tw=" border rounded outline-none focus:border-primary-500 ring-primary-100 focus:ring-2 p-2 transition" type="text" placeholder="Your last name" />

                                <label tw="text-base text-gray-600 after:content-['*'] after:ml-1">Email</label>
                                <input tw=" border rounded outline-none focus:border-primary-500 ring-primary-100 focus:ring-2 p-2 transition" type="email" placeholder="example@email.com" />

                                <label tw="text-base text-gray-600 after:content-['*'] after:ml-1">Message</label>
                                <textarea rows="4" tw="border outline-none rounded text-gray-900 py-1 px-3 leading-8 focus:border-primary-500 ring-primary-100 focus:ring-2 transition " placeholder="Enter you Message" />
                                <SubmitButton>Submit</SubmitButton>
                            </form>
                        </div>
                    </div>
                </Container>
            </div>
        </div >
    );
};

export default Contact;
