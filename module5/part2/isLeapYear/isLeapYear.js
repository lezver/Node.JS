const isLeapYear = (year) => {
	if (year === undefined) throw new Error("year must be exist");

	if (typeof year !== "number") throw new Error("year must be integer");

	if (!Number.isInteger(year)) throw new Error("year must be integer");

	if (year < 42) throw new Error("year must 42 or more");

	return 29 === new Date(year, 2, 0).getDate();
};

module.exports = isLeapYear;
