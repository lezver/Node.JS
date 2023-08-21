const books = require("../03-bookshelf-argv/books");

const invokeAction = async ({ action, id, title, author }) => {
	switch (action) {
		case "getAll":
			const all = await books.getAll();
			console.log(all);
			return;
		case "getById":
			const find = await books.getById(id);
			console.log(find);
			return;
		case "createBook":
			const create = await books.createBook({ title, author });
			console.log(create);
			return;
		case "updateBook":
			const update = await books.updateBook(id, { title, author });
			console.log(update);
			return;
		case "removeBook":
			const remove = await books.removeBook(id);
			console.log(remove);
			return;

		default:
			return console.log("Unknown action");
	}
};

const actionIndex = process.argv.indexOf("--action");

if (actionIndex !== -1) {
	const action = process.argv[actionIndex + 1];
	const id = process.argv[actionIndex + 3];
	const title = process.argv[actionIndex + 5];
	const author = process.argv[actionIndex + 7];

	invokeAction({ action, id, title, author }).catch(console.error);
}

// node app.js --action updateBook --id 1234 --title "new title" --author "new author"
// node app --action removeBook --id
// node app.js --action getById --id
// node app.js --action createBook --id "" --title "new title" --author "new author"
// node app --action getAll
