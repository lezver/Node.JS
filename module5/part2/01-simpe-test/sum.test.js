const sum = require("./sum");

// const result1 = sum(1, 2);
// if (result1 !== 3) throw new Error(`Expected: 3, but get ${result1}`);

// const result2 = sum(3, -4);
// if (result2 !== -1) throw new Error(`Expected: -1, but get ${result2}`);

// const result3 = sum("3", "-4");
// if (result3 !== -1) throw new Error(`Expected: -1, but get ${result3}`);

const expected = (actual) => ({
	toBe(expected) {
		if (actual !== expected)
			throw new Error(`Expected ${expected}, but get ${actual}`);
	},
});

const test = (text, cb) => {
	console.log(`  ${text}`);
	cb();
};

const describe = (text, cb) => {
	console.log(text);
	cb();
};

describe("sum", () => {
	test("1 + 2 shuld return 3", () => expected(sum(1, 2)).toBe(3));

	test("10 - 11 shuld return -1", () => expected(sum(10, -11)).toBe(-1));

	test("'5' - '5' shuld return 0", () => expected(sum("5", -"5")).toBe(0));
});
