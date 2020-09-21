// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".eatBurger").on("click", function (event) {
    var id = $(this).data("id");
    var eatBurger = $(this).data("eaten");
    var eatBurger = !newBurgerState;

    var newBurgerState = {
      devoured: eatBurger,
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
});
