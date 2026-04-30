import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { getToken } from "./auth";

const GRAPHQL_URL =
  process.env.EXPO_PUBLIC_GRAPHQL_URL ||
  "https://hony-link-backend-w44u.onrender.com/graphql";

console.log("[Apollo] Initializing with GraphQL URL:", GRAPHQL_URL);

const httpLink = createHttpLink({
  uri: GRAPHQL_URL,
  fetchOptions: {
    timeout: 30000, // 30 second timeout for the request
  },
});

console.log(`[Apollo] HTTP Link created with custom fetch. ${httpLink}`);

const authLink = setContext(async (_, { headers }) => {
  const token = await getToken();

  console.log("[Apollo] AuthLink: Token exists?", !!token);
  console.log("[Apollo] AuthLink: Current headers before auth:", headers);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  console.log("[Apollo] Error in operation:", operation.operationName);

  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, path }) => {
      console.warn(`[GraphQL error]: ${message}, Path: ${path}`);
    });
  }

  if (networkError) {
    console.warn("[Network error]:", networkError);
  }
});

const client = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
