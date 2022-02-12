var express = require('express');
var { graphqlHTTP } = require('express-graphql');

const AppRootSchema = require('./gql_types');

var app = express();

app.use('/', graphqlHTTP({
  schema: AppRootSchema,
  graphiql: true,
}));

app.listen(4000);
