// const { Router } = require("express");
var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.all(function (data) {
    var object = {
      burgers: data,
    };
    res.render("index", object);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.create(
    ["id", "burger_name", "devoured"],
    [req.body.id, req.body.type, req.body.status],
    function (result) {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.update(
    {
      burger: req.body.type,
    },
    condition,
    function (result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
