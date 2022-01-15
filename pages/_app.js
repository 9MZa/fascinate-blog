import GlobalStyles from "@/components/GlobalStyles";
import Layout from "@/components/Layout";
import { NextSeo, DefaultSeo } from "next-seo";
import SEO from "next-seo.config";


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyles />
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
