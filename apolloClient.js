import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api-ap-northeast-1.graphcms.com/v2/ckycl8xn50im301xx4m296py9/master",
    cache: new InMemoryCache()
});



export default client;
