const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose')

mongoose.connect("mongodb://basant:basant11@ds061938.mlab.com:61938/server")
mongoose.connection.once('open',()=>{
    console.log('connected to database');
})

const app =  express();
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true

}))

app.listen(4000, ()=>{
    console.log("now listenning for request 3000")
})