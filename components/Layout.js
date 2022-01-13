import Navbar from "./Navbar";
import { Container } from "./Container";
import Footer from "./Footer";
const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
