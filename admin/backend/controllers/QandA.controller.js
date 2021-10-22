const jwt = require('jsonwebtoken');
const QandA = require('../models/QandA');
const qAndARouter = require('express').Router();

const getTokenFrom = (request) => {
	const authorization = request.get('authorization');
	if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
		return authorization.substring(7);
	}
	return null;
};

qAndARouter.get('/all', async (request, response) => {
	const token = getTokenFrom(request);
	//verify token exists
	// eslint-disable-next-line no-undef
	const decodedToken = jwt.verify(token, process.env.SECRET);

	// throw an error if token is not found or doesn't reconcile
	if (!token || !decodedToken.username) {
		return response.status(401).json({ error: 'token missing or invalid' });
	}
	// fetch questionAndAnswers
	const questionAndAnswers = await QandA.find({}).populate('survey',{ id:1, title: 1 });

	return response.json(questionAndAnswers);
});

qAndARouter.get('/:id', async (request, response) => {
	const token = getTokenFrom(request);
	//verify token exists
	// eslint-disable-next-line no-undef
	const decodedToken = jwt.verify(token, process.env.SECRET);

	// throw an error if token is not found or doesn't reconcile
	if (!token || !decodedToken.username) {
		return response.status(401).json({ error: 'token missing or invalid' });
	}

	//fetch the qandA by id
	const foundQAndA = await QandA.findById(request.params.id).populate('survey',{ id:1, title: 1 });

	return response.json(foundQAndA);
});

//getqandA by surveyID
qAndARouter.get('/survey/:id', async (request, response) => {
	const token = getTokenFrom(request);
	//verify token exists
	// eslint-disable-next-line no-undef
	const decodedToken = jwt.verify(token, process.env.SECRET);

	// throw an error if token is not found or doesn't reconcile
	if (!token || !decodedToken.username) {
		return response.status(401).json({ error: 'token missing or invalid' });
	}
	// get qandA by survey id
	const qAndABySurveyId = await QandA.find({ survey: request.params.id });

	response.json(qAndABySurveyId);
});

module.exports = qAndARouter;