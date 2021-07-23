import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/",
});
const client = new ApolloClient({
  //   uri: 'https://48p1r2roz4.sse.codesandbox.io',
  link: httpLink,
  cache: new InMemoryCache(),
});
export default client;
