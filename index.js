import { GraphQLServer } from 'graphql-yoga'
import resolvers from "./graphql/resolvers"

const server = new GraphQLServer({
  typeDefs: "graphql/schma.graphql",
  resolvers: resolvers
})

server.start(_ => console.log("GraphQL Server Running."))