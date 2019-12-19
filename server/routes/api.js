const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const db = "mongodb+srv://sobaka:sobaka8@cluster0-pz4pq.gcp.mongodb.net/test?retryWrites=true&w=majority";

console.log('akajajaja');

mongoose.connect(db, err => {
	if(err) {
		console.log("Error!" + err);
	} else {
		console.log("Connected to mongodb");
	}
});

router.get('/', (req, res) => {
	res.send('From API route')
});

router.post('/register', (res, req) => {
	let userData = req.body;
	let user = new User(userData);
	user.save((error, registeredUser) => {
		if (error) {
			console.log(error);
		} else {
			res.status(200).send(registeredUser);
		}
	});
})

module.exports = router;