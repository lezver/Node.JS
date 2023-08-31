const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const dogSchema = new Schema(
	{
		greed: {
			type: String,
			enum: ["Akita", "Pit Bull", "Maltese", "Husky", "Yorkshire Terrier"],
			required: true,
		},
		height: {
			type: String,
			required: true,
		},
		age: {
			type: String,
			required: true,
		},
		weight: {
			type: String,
			required: true,
		},
	},
	{
		versionKey: false,
	}
);

dogSchema.post("save", handleMongooseError);

const createDogSchema = Joi.object({
	greed: Joi.string().required(),
	height: Joi.string().required(),
	age: Joi.string().required(),
	weight: Joi.string().required(),
});

const Dog = model("dog", dogSchema);

module.exports = { Dog, createDogSchema };
