const {
	getAll,
	getById,
	createBook,
	updateBook,
	removeBook,
} = require("./books");
const { program } = require("commander");

const invokeAction = async ({ action, id, title, author }) => {
	switch (action) {
		case "getAll":
			const all = await getAll();
			return console.log(all);
		case "getById":
			const find = await getById(id);
			return console.log(find);
		case "create":
			const create = await createBook({ title, author });
			return console.log(create);
		case "update":
			const update = await updateBook(id, { title, author });
			return console.log(update);
		case "remove":
			const remove = await removeBook(id);
			return console.log(remove);

		default:
			return console.log("Unknown action");
	}
};

program
	.option("-a, --action <action>", "Action to invoke")
	.option("-i, --id <id>", "Book  id")
	.option("-t, --title <title>", "Book title")
	.option("-at, --author <author>", "Book author");

program.parse(process.argv);

const options = program.opts();

invokeAction(options).catch(console.error);
