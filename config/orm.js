const { update } = require("../models/burger.js");

var connection = require("./connection.js");

var orm = {
  selectAll: function (id, burgers) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, [id, burgers], function (err, res) {
      if (err) throw err;
      return res;
    });
  },
  insertOne: function (id, newburger) {
    var queryString = "INSERT INTO ?? (??, ??) VALUES(?,?)";
    connection.query(queryString, [id, newburger], function (err, res) {
      if (err) throw err;
      return res;
    });
  },
  updateOne: function (id, eatburger) {
    var queryString = "INSERT INTO ?? (??, ??) VALUES(?,?)";
    connection.query(queryString, [id, eatburger], function (err, res) {
      if (err) throw err;
      return res;
    });
  },
};

console.log(orm);

module.exports = orm;
