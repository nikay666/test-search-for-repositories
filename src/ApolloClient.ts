import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { TOKEN } from "./token";
import { setContext } from  "@apollo/client/link/context";
import { relayStylePagination } from "@apollo/client/utilities";

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `bearer ${TOKEN}`
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          search: relayStylePagination(['query'])
        }
      }
    }
  })
});

