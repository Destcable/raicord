import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import { Query, Mutation} from './src/models/index.js';
import { readAndConcatenateSchemas } from './src/utils/readAndConcatenateSchemas.js';
import { schemaFilePaths } from './src/core/config/schemaFilePaths.config.js';
import { getUserId } from './src/utils/getUserId.js';

const resolvers = { 
    Query,
    Mutation
};

const prisma = new PrismaClient();

const server = new ApolloServer({
    typeDefs: readAndConcatenateSchemas(schemaFilePaths),
    resolvers,
    context: ({req}) => {
        return {
        prisma,
        userId:         
            req && req.headers.authorization
                ? getUserId(req.headers.authorization)
                : null
    }},
})

server
    .listen()
    .then(({ url }) => console.log(`❄️  Сервер запущен: ${url}`))