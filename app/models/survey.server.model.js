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
    question2: {
		type: String,
		default: '',
		required: 'Please fill Question 2',
		trim: true
	},
    question3: {
		type: String,
		default: '',
		required: 'Please fill Question 3',
		trim: true
	},
    question4: {
		type: String,
		default: '',
		required: 'Please fill Question 4',
		trim: true
	},
    q1answer1: {
		type: String,
		default: '',
		required: 'Please fill Answer',
		trim: true
	},
    q1answer2: {
		type: String,
		default: '',
		required: 'Please fill Answer',
		trim: true
	},
    q1answer3: {
		type: String,
		default: '',
		required: 'Please fill Answer',
		trim: true
	},
    q2answer1: {
		type: String,
		default: '',
		required: 'Please fill Answer',
		trim: true
	},
    q2answer2: {
		type: String,
		default: '',
		required: 'Please fill Answer',
		trim: true
	},
    q2answer3: {
		type: String,
		default: '',
		required: 'Please fill Answer',
		trim: true
	},
    q3answer1: {
		type: String,
		default: '',
		required: 'Please fill Answer',
		trim: true
	},
    q3answer2: {
		type: String,
		default: '',
		required: 'Please fill Answer',
		trim: true
	},
    q3answer3: {
		type: String,
		default: '',
		required: 'Please fill Answer',
		trim: true
	},
    q4answer1: {
		type: String,
		default: '',
		required: 'Please fill Answer',
		trim: true
	},
    q4answer2: {
		type: String,
		default: '',
		required: 'Please fill Answer',
		trim: true
	},
    q4answer3: {
		type: String,
		default: '',
		required: 'Please fill Answer',
		trim: true
	},
    q1count1: {
		type: Number,
		default: 0,
		trim: true
	},
    q1count2: {
		type: Number,
		default: 0,
		trim: true
	},
    q1count3: {
		type: Number,
		default: 0,
		trim: true
	},
    q2count1: {
		type: Number,
		default: 0,
		trim: true
	},
    q2count2: {
		type: Number,
		default: 0,
		trim: true
	},
    q2count3: {
		type: Number,
		default: 0,
		trim: true
	},
    q3count1: {
		type: Number,
		default: 0,
		trim: true
	},
    q3count2: {
		type: Number,
		default: 0,
		trim: true
	},
    q3count3: {
		type: Number,
		default: 0,
		trim: true
	},
    q4count1: {
		type: Number,
		default: 0,
		trim: true
	},
    q4count2: {
		type: Number,
		default: 0,
		trim: true
	},
    q4count3: {
		type: Number,
		default: 0,
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