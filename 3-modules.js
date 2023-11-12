// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const data = require("./6-alternative-flavor");
const sayHi = require("./5-utils");
require("./7-mind-grenade");
const names = require("./4-names");
// could also write it like
// const { mike, nicole } = require("./4-names");
// sayHi(mike);
// sayHi(nicole);

// console.log(data);

sayHi(names.mike);
sayHi(names.nicole);
