const { Schema, model } = require("mongoose");

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 5,
		},
		token: {
			type: String,
			default: null,
		},
		avatar: {
			type: String,
			default: null,
		},
	},
	{ versionKey: false }
);

const User = model("user", userSchema);

module.exports = User;
