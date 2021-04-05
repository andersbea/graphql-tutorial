import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const app = express();

const server = new ApolloServer({
    typeDefs: gql`
        type Book {
            id: ID!
            title: String
            author: Author
        }
        type Author {
            name: String
            books: [Book]
        }
        type Query {
            books: [Book]
            book(id: ID!): Book
        }
    `
});

server.applyMiddleware({ app });
app.listen(4000, () => { console.log(`Server ready at http://localhost:4000${server.graphqlPath}`) });