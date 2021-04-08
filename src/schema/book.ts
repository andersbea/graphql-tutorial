import { gql } from "apollo-server-core";

export const Book = {
    typeDefs: gql`
        type Book {
            id: ID!
            title: String
            author: Author
        }
        extend type Query {
            books: [Book]
            book(id: ID!): Book
        }
    `,
    resolvers: {
        Query: {
            books: (parent, args, { dataSources }, info) => dataSources.memory.getAllBooks(),
            book: (parent, { id }, { dataSources }, info) => dataSources.memory.getBook(id)
        }
    }
}