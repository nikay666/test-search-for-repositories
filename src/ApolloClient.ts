import { ApolloClient, InMemoryCache } from "@apollo/client";
import { TOKEN } from "./token";

export const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  "headers": {
    Authorization: `bearer ${TOKEN}`
  },
  cache: new InMemoryCache()
});
