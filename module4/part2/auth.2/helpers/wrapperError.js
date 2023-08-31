const wrapperError = (wrapper) => async (req, res, next) => {
	try {
		await wrapper(req, res, next);
	} catch (error) {
		next(error);
	}
};

module.exports = wrapperError;
