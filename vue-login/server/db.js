const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/test',{useMongoClient:true});

const db=mongoose.connection;

db.once('error',(error)=>{
	console.log('Mongo connection error');
	console.log(error);
});
db.once('open',()=>console.log('Mongo connection successed'));

const loginSchma=mongoose.Schema({
	username:String,
	pwd:String
});

const Models={
	Login:mongoose.model('Login',loginSchma)
}

module.exports=Models;                              