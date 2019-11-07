const Mongoose = require("mongoose");

let database= "laboJueves" ; 
let host= "localhost" ;
let port = "27017";
let uri = `mongodb://${host}:${port}/${database}`;

//let uri = mongodb://localhost:27017/laboJueves;

const connect = ()=>{
    Mongoose.connect(uri,
    {useNewUrlParsel: true,
        useUnifiedTopology: true})
        .then( ()=>{
            console.log("SIUUUUUUUUUUUUUU c conecto");
        })
        .catch( ()=>{
            console.log("Nelson :,v")
        } );

        Mongoose.Promise = global.Promise;
}

module.exports = {connect};