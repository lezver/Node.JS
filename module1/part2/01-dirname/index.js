const movies = require("./movies");

movies.read().then(console.log).catch(console.error);
