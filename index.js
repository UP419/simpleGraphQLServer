import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import {typeDefs} from "./schema";

const server = new ApolloServer({
    typeDefs,
});

const {url} = new startStandaloneServer(server, {
    listen: {port: 4000}
})