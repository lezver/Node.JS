const { wrapperError } = require("../../helpers");

const getCurrent = async (req, res) => {
	const { email, name } = req.user;

	return res.send({ email, name });
};

module.exports = { getCurrent: wrapperError(getCurrent) };
