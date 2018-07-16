'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Comment schema

const commentSchema = new Schema({
	text: {
		type: String,
		required: true
	},
	author: {
		type: String,
		default: "CSD"
	},
	posted_date: {
		type: Date
	}
});

//this object can be accessed outside
const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;

//Function to get comments
module.exports.getComments = function (callback, limit) {
	Comment.find(callback).limit(limit);
}

//Function to get comment by ID
module.exports.getCommentById = function (id, callback) {
	Comment.findById(id, callback);
}

//Function to add a comment
module.exports.addComment = function (comment, callback) {
	comment.posted_date = new Date();
	Comment.create(comment, callback);
}

//Function to update Comment
module.exports.updateComment = function (id, comment, options, callback) {
	var query = {
		_id: id
	};
	comment.posted_date = new Date();
	var update = {
		text: comment.text,
		author: comment.author,
		posted_date: comment.posted_date
	}
	Comment.findOneAndUpdate(query, update, options, callback);
}

//Function to delete a Comment
module.exports.deleteComment = function (id, callback) {
	var query = {
		_id: id
	};
	Comment.remove(query, callback);
}

//Function to get comments by page
module.exports.getCommentsByPage = function (page, callback) {
	let query = {};
	query.skip = page.size * (page.number - 1);
	query.limit = page.size;

	// count function is async - so find after getting the count
	Comment.count({}, function (err, count) {
		if (err) {
			return callback('Error in DB - No documents', null);
		}

		let totalPages = Math.ceil(count / page.size);

		if (page.number > totalPages) {
			return callback(`Invalid page number. Try a page number between 1 - ${totalPages}.`, null);
		}

		Comment.find({}, {}, query, callback);
	})
}