const sum = require("../sum");

describe("sum", () => {
	test("1 + 2 shuld return 3", () => expect(sum(1, 2)).toBe(3));

	test("10 - 11 shuld return -1", () => expect(sum(10, -11)).toBe(-1));

	test("'5' - '5' shuld return 0", () => expect(sum("5", -"5")).toBe(0));
});
