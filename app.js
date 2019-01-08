const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose')
const cors = require('cors');

const app =  express();
app.use(cors());

mongoose.connect("mongodb://basant:basant11@ds061938.mlab.com:61938/server")
mongoose.connection.once('open',()=>{
    console.log('connected to database');
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true

}))

app.listen(4000, ()=>{
    console.log("now listenning for request 4000")
})