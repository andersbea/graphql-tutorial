import { gql } from 'apollo-server-core';
import { makeExecutableSchema } from 'graphql-tools';

import { Author } from './author';
import { Book } from './book';

const Query = [gql`
    type Query { _empty: String }
`];

export const schema = makeExecutableSchema({
    typeDefs: Query.concat(
        Author.typeDefs,
        Book.typeDefs
    )
});