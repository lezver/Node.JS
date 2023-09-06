const greet = require("./greet");

describe("greet", () =>
	it("shuld return 'Hellow World'", () => expect(greet()).toMatchSnapshot()));

describe("greet", () =>
	it("shuld return: Hellow World", () =>
		expect(greet()).toMatchInlineSnapshot(`"Hellow World"`)));
