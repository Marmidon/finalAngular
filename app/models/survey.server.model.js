'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Survey Schema
 */
var SurveySchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Survey name',
		trim: true
	},
    question1: {
		type: String,
		default: '',
		required: 'Please fill Question 1',
		trim: true
	},
    q1answer1: {
		type: String,
		default: '',
		required: 'Please fill Answer 1',
		trim: true
	},
    q1answer2: {
		type: String,
		default: '',
		required: 'Please fill Answer 2',
		trim: true
	},
    q1answer3: {
		type: String,
		default: '',
		required: 'Please fill Answer 3',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Survey', SurveySchema);