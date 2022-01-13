import tw from "twin.macro";
import Image from "next/image";

const url = "https://assets.website-files.com/613f0b40fb5722f91cdd6b5b/6147e9bf9f10400a0301953c_Blog%20Cover.svg";

const Big = () => {
    return (
        <div tw="  flex items-center  ">
            <div tw="w-1/2">
                <Image src={url}
                    alt="cover"
                    width={500}
                    height={400}
                />
            </div>
            {/* Text  */}
            <div tw="w-1/2  ">
                <div tw="w-4/5 space-y-4" >
                    <div tw="flex text-sm space-x-3">
                        <div tw="text-primary-500">Management</div>
                        <div>
                            •
                        </div>
                        <div>
                            5 min read
                        </div>
                    </div>
                    <div >
                        <h2 tw="text-4xl font-semibold ">Why Slack is Problematic and Ruining Deep Work for Staff
                        </h2>
                    </div>

                    <div>
                        <p>Slack seemed like the saving grace to fix all email trouble, but instead of replacing email, it has only become another tool for distraction.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Big;
