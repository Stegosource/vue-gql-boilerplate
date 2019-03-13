import ApolloClient from "apollo-boost"

const apolloClient = new ApolloClient({
  uri: "https://api.graphcms.com/simple/v1/awesomeTalksClone"
})

export default apolloClient
