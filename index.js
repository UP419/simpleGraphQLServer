import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const server = new ApolloServer({

});

const {url} = new startStandaloneServer(server, {
    listen: {port: 4000}
})