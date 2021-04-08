import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { schema } from './schema';
import { MemoryDataSource } from './datasources';

const app = express();

const server = new ApolloServer({
    schema: schema,
    dataSources: () => ({
        memory: new MemoryDataSource()
    })
});

server.applyMiddleware({ app });
app.listen(4000, () => { console.log(`Server ready at http://localhost:4000${server.graphqlPath}`) });