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
        },
        game(parent, args){
            return db.games.find((game) => game.id === args.id )
        },
        review(_, args){
            return db.reviews.find((review) => review.id === args.id )
        },
        author(_, args, context){
            return db.authors.find((author) => author.id === args.id )
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