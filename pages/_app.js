import GlobalStyles from "./../components/GlobalStyles";
import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ThemeProvider attribute="class">
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  );
}

export default MyApp;
