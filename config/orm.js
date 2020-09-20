// const { update } = require("../models/burger.js");

var connection = require("../config/connection.js");

var orm = {
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
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

module.exports = orm;
