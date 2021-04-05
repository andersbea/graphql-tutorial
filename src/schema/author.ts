import { gql } from "apollo-server-core";

export const Author = {
    typeDefs: gql`
        type Author {
            name: String
            books: [Book]
        }
    `
}