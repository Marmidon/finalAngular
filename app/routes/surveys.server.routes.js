'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users.server.controller');
	var surveys = require('../../app/controllers/surveys.server.controller');

	// Surveys Routes
	app.route('/surveys')
		.get(surveys.list)
		.post(users.requiresLogin, surveys.create);
    app.route('/mysurveys')
		.get(surveys.list)
		.post(users.requiresLogin, surveys.create);

	app.route('/surveys/:surveyId')
		.get(surveys.read)
		.put(surveys.update)
		.delete(users.requiresLogin, surveys.hasAuthorization, surveys.delete,surveys.emailstats);
    //users.requiresLogin,  surveys.hasAuthorization,
	// Finish by binding the Survey middleware
	app.param('surveyId', surveys.surveyByID);
};
