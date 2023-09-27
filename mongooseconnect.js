const mongoose = require('mongoose');
const url= mongoose.connect("mongodb://127.0.0.1:27017/ecomm");

const mongooseconnect= async()=>{
    try{
        let connect= await mongoose.connect(url);
        console.log("connect");
        return connect;
    }catch(e){
        console.log(e);
    }
}

module.exports= mongooseconnect;
