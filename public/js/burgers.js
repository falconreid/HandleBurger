// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".eatBurger").on("click", function (event) {
    var id = $(this).data("id");
    var eatBurger = $(this).data("eaten");

    var newBurgerState = {
      devoured: newEaten,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState,
    }).then(function () {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  //   $(".create-form").on("submit", function (event) {
  //     // Make sure to preventDefault on a submit event.
  //     event.preventDefault();

  //     var newCat = {
  //       name: $("#ca").val().trim(),
  //       sleepy: $("[name=sleepy]:checked").val().trim(),
  //     };

  //     // Send the POST request.
  //     $.ajax("/api/cats", {
  //       type: "POST",
  //       data: newCat,
  //     }).then(function () {
  //       console.log("created new cat");
  //       // Reload the page to get the updated list
  //       location.reload();
  //     });
  //   });

  $(".delete-cat").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted cat", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
