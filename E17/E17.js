$(document).ready(function() {
    // run function on initial page load
    colorGuess();
});

function colorGuess() {
    //color variable
    var colorArray = ["Black","Green","LightBlue","LightGrey","NavyBlue","NeonYellow","Pink","Red","RobinBlue","SkyBlue","White","WineRed"];
    //random variable
    var randomNumber = Math.floor(Math.random() * colorArray.length);
    //image link variable
    var imageArray = colorArray[random number variable name] + ".png"
    console.log(colorArray[randomNumber]);
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
          location.reload(true);
        });
      } else {
        $("h1").text(guess + "Incorrect");
        $("input").val("");
        $(".button p").text("Play Again?");
        $("#submit").click(function() {
          location.reload(true);
        });
      }
    })
}

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
