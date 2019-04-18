$(document).ready(function() {
    // run function on initial page load
    colorGuess();
});
(function colorGuess() {
    //color variable
    var colorArray = ["Black","Green","LightBlue","LightGrey","NavyBlue","NeonYellow","Pink","Red","RobinBlue","SkyBlue","White","WineRed"];
    //image link variable
    var imageArray = (colorArray[random number variable name] + ".png");
    //random variable
    var randomNumber = Math.floor(Math.random() * colorArray.length);
    var stripped = colorArray[randomNumber].toLowerCase();
    console.log(colorArray[randomNumber]);
    console.log(stripped);
    console.log(imageArray);
    $('body').css("", colorArray[randomNumber]);
    $("#submit").click(function() {
      var input = $('input').val();
      var guess = input.toLowerCase();
      console.log(guess);
      if (guess == stripped || guess == colorArray[randomNumber]) {
        $("h1").text(guess + "Correct!");
        $("input").val("");
        $(".button p").text("Play Again?");
        $("#submit").click(function() {
          imageArray.reload(true);
        });
        }
      });
}
      else {
        $("h1").text(guess + "Incorrect");
        $("input").val("");
        $(".button p").text("Play Again?");
        $("#submit").click(function() {
          imageArray.reload(true);
        })
      });
(function($) {
  $(function() { // DOM Ready

    // Toggle navigation
    $('#nav-toggle').click(function() {
      this.classList.toggle("active");
      // If sidebar is visible:
      if ($('body').hasClass('show-nav')) {
        // Hide sidebar
        $('body').removeClass('show-nav');
      } else { // If sidebar is hidden:
        $('body').addClass('show-nav');
        // Display sidebar
      }
    });
  });
})(jQuery);
