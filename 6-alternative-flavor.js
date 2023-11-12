const person = {
  name: "bob",
};

// one way to export:
// module.exports.items = ["item1", "item2"];
// module.exports.singlePerson = person;

// alternative:
const items = ["item1", "item2"];

module.exports = { person, items };
