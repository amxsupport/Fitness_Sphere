const router = require("express").Router();
const webpush=require('web-push');
const User = require("../models/usersModel");

const public='BDOTmtGWFJmL3HOgtY7z9n0VvBk13mG4eItRKVyGKsrssN9qqjroo1nTH8TROlnsmY2a2aSqyniYSD86V9LmYvI';
const private='3_4AFpfUYQ5rJB_liEGO4sFZQxS67XzCYbWwk2jRo6g';

let subscription;

webpush.setVapidDetails('mailto:user@gmail.com',public,private);

router.post('/subscribe', (req,res)=>{
	try{
	subscription = req.body;
	console.log('Subscribed');
	res.status(200).json({});
} catch(err){
		console.log(err)
		res.status(200).json({error:err});
}});

router.get('/week', (req,res)=>{
	try{
	const user = User.findById('6446792ceb2b806888c16d83', function(err, user) {
  if (err) return console.error(err);
  date = new Date(user.updatedAt)
		if (subscription && Date.now() - date >= 7 * 24 * 60 * 60 * 1000){
	const payload=JSON.stringify({title:"We Miss You", body:`You haven't updated your profile in a week!`});
	webpush.sendNotification(subscription,payload).catch(err=>console.log(err));
	}
		res.status(200).json({});
	});
} catch(err){
		console.log(err)
		res.status(200).json({error:err});
}});

module.exports = router;
