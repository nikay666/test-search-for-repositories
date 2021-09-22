import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { TOKEN } from "./token";
import { setContext } from  "@apollo/client/link/context";


const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: TOKEN ? `Bearer ${TOKEN}` : "",
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


// export const client = new ApolloClient({
//   uri: "https://api.github.com/graphql",
//   "headers": {
//     Authorization: `bearer ${TOKEN}`,
//     "Content-Type": 'application/json'
//   },
//   cache: new InMemoryCache()
// });
