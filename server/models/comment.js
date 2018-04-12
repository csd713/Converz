'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Comment schema

const commentSchema = new Schema({
	commentText: {
		type: String,
		required: true
	},
	author: {
		type: String,
		default: "CSD"
	},
	posted_date: {
		type: Date,
		default: Date.now
	}
});

//this object can be accessed outside
 const Comment = mongoose.model('Comment', commentSchema);
 module.exports = Comment;

//Function to get commentSchema
module.exports.getComments = function (callback, limit) {
	Comment.find(callback).limit(limit);
}

//Function to get comment by ID
module.exports.getCommentById = function (id, callback) {
	Comment.findById(id, callback);
}

//Function to add a comment
module.exports.addComment = function (comment, callback) {
	Comment.create(comment, callback);
}

//Function to update Comment
module.exports.updateComment = function (id, comment, options, callback) {
	var query = {
		_id: id
	};
	var update = {
		commentText: comment.commentText,
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