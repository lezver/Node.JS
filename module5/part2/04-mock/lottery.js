const generateNumber = require("./generateNumber");

// const lottery = (expected) => {
// 	if (expected !== generateNumber()) {
// 		return "YOU LOST";
// 	}
// 	return "YOU WON";
// };

const lottery = (expected) =>
	expected === generateNumber() ? "YOU WON" : "YOU LOST";

module.exports = lottery;
