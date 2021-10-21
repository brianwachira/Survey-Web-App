const adminRouter = require('express').Router();
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');

adminRouter.post('/', async (request, response) => {
	// get body
	const body = request.body;
	const saltRounds = 10;
	// hash the password using bcrypt
	const passwordHash = await bcrypt.hash(body.password, saltRounds);

	// create new admin with mongoose Admin model
	const admin = new Admin({
		username: body.username,
		password: passwordHash
	});
	//save admin
	const savedAdmin = await admin.save();

	response.json(savedAdmin);
});

module.exports = adminRouter;



