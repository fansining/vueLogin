const models=require('./db');
const express=require('express');
const router=express.Router();

router.get('/api/login/getUsername',(req,res)=>{
	models.Login.find((err,data)=>{
		if(err){
			res.send(err);
		}else{
			res.send(data);
		}
	});
});


router.post('/api/login/createUsername',(req,res)=>{
	let newUsername=new models.Login({
		username:req.body.username,
		pwd:req.body.pwd
	});

	newUsername.save((err,data)=>{
		if(err){
			res.send(err);
		}else{
			res.send('createUsername succeed!');
		}
	});
});



module.exports=router;
