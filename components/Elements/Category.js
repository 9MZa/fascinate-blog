import Link from "next/link";
const Category = ({ category }) => {

    const { name: categoryName, slug: categorySlug } = category;

    return (

        <>
            <Link href={`/category/${categorySlug}`} passHref>
                <a>
                    {categoryName}
                </a>
            </Link>
        </>
    );
};

export default Category;
