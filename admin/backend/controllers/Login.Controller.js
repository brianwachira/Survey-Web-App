const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');
const loginRouter = require('express').Router();

loginRouter.post('/', async (request, response) => {
	const body = request.body;
	// fetch admin that matches username gotten from body
	const admin = await Admin.findOne({ username : body.username });
	//  return false if admin is empty,
	//   otherwise compare the password and the hashed string
	const passwordCorrect = admin === null ?
		false
		: await bcrypt.compare(body.password, admin.password);
	//  return error upon empty user
	if(!(admin && passwordCorrect))  {
		return response.status(401).json({
			error: 'invalid username or password'
		});
	}
	const adminForToken = {
		username: admin.username,
		id: admin._id,
	};
	// eslint-disable-next-line no-undef
	const token = jwt.sign(adminForToken, process.env.SECRET);

	response.status(200).send({ token, username : admin.username, id: admin._id });
});
module.exports = loginRouter;