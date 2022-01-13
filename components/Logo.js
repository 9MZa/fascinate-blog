import Link from "next/link";
import tw from "twin.macro";
const Logo = () => {
    return (
        <div>
            <Link href="/">
                <a>
                    <p tw="text-3xl font-bold">Clean Blog</p>
                </a>
            </Link>
        </div>

    );
};

export default Logo;
