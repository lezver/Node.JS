const { wrapperError, httpError } = require("../../helpers");
const { rename } = require("node:fs/promises");
const path = require("node:path");
const { User } = require("../../models");

const uploadAvatar = async (req, res) => {
	await rename(
		req.file.path,
		path.join(__dirname, "..", "..", "public", req.file.filename)
	);

	const uploadedAvatarUser = await User.findByIdAndUpdate(
		req.user.id,
		{
			avatar: req.file.filename,
		},
		{ new: true }
	).exec();

	if (!uploadedAvatarUser) throw httpError(404, "Not found");

	return res.status(200).send(uploadedAvatarUser);
};

module.exports = { uploadAvatar: wrapperError(uploadAvatar) };
