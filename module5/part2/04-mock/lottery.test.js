const lottery = require("./lottery");

const mockGenerateNumber = jest.fn();

jest.mock("./generateNumber", () => () => mockGenerateNumber());

describe("lottery", () => {
	beforeAll(() => mockGenerateNumber.mockImplementation(() => 2));

	test("should won when 2", () => expect(lottery(2)).toBe("YOU WON"));

	test("shuld lose when 1", () => expect(lottery(1)).toBe("YOU LOST"));
});
