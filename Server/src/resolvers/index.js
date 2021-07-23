const { join } = require("path");
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const { loadSchemaSync } = require("@graphql-tools/load");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");
const { addResolversToSchema } = require("@graphql-tools/schema");
const Query = require("./resolvers/query");
const Mutation = require("./resolvers/mutation");
const Hospital = require("./resolvers/Hospital");
const Patient = require("./resolvers/Patient");
const Appointment = require("./resolvers/Appointment");
const Patient1 = require("./resolvers/Patient1");
const cors =  require("cors");


const app = express();
app.use(cors());
const schema =  loadSchemaSync(join(__dirname,"./schema.graphql"),{
    loaders: [new GraphQLFileLoader()],
});

const schemaWithResolvers = addResolversToSchema({
    schema,
    resolvers:{
        Query,
        Mutation,  
        Hospital,
        Patient,
        Appointment,
        Patient1,
       
    },
})
app.use('/', graphqlHTTP({
    schema: schemaWithResolvers,
    graphiql: true,
}));


app.listen(4000,()=>{
    console.log('server is running on port 4000')
});
