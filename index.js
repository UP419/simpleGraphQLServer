import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import {typeDefs} from "./schema.js";
import db from './db.js';

const resolvers = {
    Query:{
        games(){
            return db.games;
        },
        reviews(){
            return db.reviews;
        },
        authors(){
            return db.authors;
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = startStandaloneServer(server, {
    listen: {port: 4000}
});