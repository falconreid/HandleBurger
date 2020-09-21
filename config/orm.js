var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }

      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

var orm = {
  selectAll: function (tableInput, cb) {
    var queryString = "SELECT * FROM burgers;";
    connection.query(queryString, function (err, res) {
      if (err) {
        throw err;
      }
      cb(res);
      return res;
    });
  },
  insertOne: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO burgers";

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    connection.query(queryString, vals, function (err, res) {
      if (err) throw err;
      cb(res);
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
