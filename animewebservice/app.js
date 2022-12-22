const express=require("express"); //import express
const app=express(); // make an object of express
var path=require("path"); //for setting specific path
//var cookieparser = require("cookie-parser"); for cookie parsing of browser
var bodyparser=require("body-parser"); //import body-parser
var routes= require("./routes/routers"); //import router file to set routes
var mongoose = require("mongoose"); //import mongoose 
//mongoose is an object data modelling(odm) library for MongoDB and Node.js designed to work in an
//asynchronous environment.It manages relationship 
//between data ,provides schema validation and is used to translate between object code and the 
//representation of those objects in MongoDB. ODM represents the websites's data as javascript objects,which
//are then mapped to the underlying database.

mongoose.promise = global.promise; 
//to assign nodejs promise object to mongoose promise
//promise object accepts 2 functions if success then what to do 
//if failure then what to do
//the promise object represents the eventual completion or failure of an asynchronous operation and its resulting value
//this lets asynchronous methods return values like synchronous methods: instead of immediately
//returning the final vlaue,the asynchronous method returns a promise to supply the value at some point in the future
//promise is in one of these states:
//pending
//fullfilled
//rejected

const url = 'mongodb://0.0.0.0:27017/anime'
//connection url
// mongodb://<server ip address>:port/<database name>

//to make mongodb connection asynchronously
mongoose.connect(url,{
    connectTimeoutMS:1000
},function(err,result){
    if(err){
        console.log("error connecting mongodb");
        console.log(err);
    }
    else{
        console.log("connection done with anime database")
    }
});

//define middleware
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended:false
}))
app.use(express.static(path.join(__dirname,"public")))
//Cross Origin Resource Sharing(CORS)
app.use(function(req,resp,next){
    resp.setHeader('Access-control-Allow-origin','*');
    resp.setHeader('Access-control-Allow-Methods','GET,POST,PUT,DELETE');
    resp.setHeader('Access-control-Allow-Credentials','true');
    resp.setHeader('Access-control-Allow-Headers','Content-Type');
    next();
})

app.use("/",routes);

app.listen(4000);
console.log("server started at port 4000");
module.exports=app;
