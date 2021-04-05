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
    `
}