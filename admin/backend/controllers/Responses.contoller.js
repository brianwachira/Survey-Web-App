const jwt = require('jsonwebtoken');
const Response = require('../models/Responses');
const responseRouter = require('express').Router();

const getTokenFrom = (request) => {
	const authorization = request.get('authorization');
	if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
		return authorization.substring(7);
	}
	return null;
};

responseRouter.get('/all', async (request, response) => {
	const token = getTokenFrom(request);
	//verify token exists
	// eslint-disable-next-line no-undef
	const decodedToken = jwt.verify(token, process.env.SECRET);

	// throw an error if token is not found or doesn't reconcile
	if (!token || !decodedToken.username) {
		return response.status(401).json({ error: 'token missing or invalid' });
	}

	// fetch responses
	const responses = await Response.find({}).populate('response.question submission', { id:1, firstname: 1, lastname:1, email:1, phone:1, passage:1, options: 1 });

	return response.json(responses);
});

responseRouter.get('/:id', async (request, response) => {
	const token = getTokenFrom(request);
	//verify token exists
	// eslint-disable-next-line no-undef
	const decodedToken = jwt.verify(token, process.env.SECRET);

	// throw an error if token is not found or doesn't reconcile
	if (!token || !decodedToken.username) {
		return response.status(401).json({ error: 'token missing or invalid' });
	}
	// fetch response by id
	const foundResponse = await (await Response.findById(request.params.id)).populate('response.question submission', { id:1, firstname: 1, lastname:1, email:1, phone:1, passage:1, options: 1 });
	return response.json(foundResponse);
});

//get response by submissionID
responseRouter.get('/submission/:id', async (request, response) => {
	const token = getTokenFrom(request);
	//verify token exists
	// eslint-disable-next-line no-undef
	const decodedToken = jwt.verify(token, process.env.SECRET);

	// throw an error if token is not found or doesn't reconcile
	if (!token || !decodedToken.username) {
		return response.status(401).json({ error: 'token missing or invalid' });
	}
	//get response by submissionID
	const responseById = await Response.find({ submission: request.params.id }).populate('response.question', {  passage:1, options: 1  });

	response.json(responseById);
});

module.exports = responseRouter;