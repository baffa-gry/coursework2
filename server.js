//import modules
const exp = require('express')
const { ObjectID } = require('mongodb')

//create an express js instance
const app = exp()

//config express js
app.use(exp.json())
const port = process.env.PORT || 3000
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Headers", "*");
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    next()
})

//Connect to mongodb
const MongoClient = require('mongodb').MongoClient
let db
MongoClient.connect('mongodb+srv://Abdulrahman:Abdulrahman123@cluster0.40ign.mongodb.net/test', (err, client)=>{
    db = client.db('webstore')
})