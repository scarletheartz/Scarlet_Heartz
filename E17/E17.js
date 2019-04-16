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
$(document).ready(function() {
    // run function on initial page load
    colorGuess();
});

function colorGuess() {
    var colorArray = ["Black","Green","LightBlue","LightGrey","NavyBlue","NeonYellow","Pink","Red","RobinBlue","SkyBlue","White","WineRed"];
    var randomNumber = Math.floor(Math.random() * colorArray.length);
    var stripped = colorArray[randomNumber].toLowerCase();
    console.log(colorArray[randomNumber]);
    console.log(stripped);
    $('body').css('background-color', colorArray[randomNumber]);
    $('#submit').click(function() {
        var input = $('input').val();
        var guess = input.toLowerCase();
        console.log(guess);
        if (guess == stripped || guess == colorArray[randomNumber]) {
            $('h1').text(guess + ' is right!');
            $('input').val('');
            $('.button p').text('Play Again?');
            $('#submit').click(function() {
                location.reload(true);
            });
        } else  {
            $('h1').text(guess + ' is wrong');
            $('input').val('');
            $('.button p').text('Play Again?');
            $('#submit').click(function() {
                location.reload(true);
            });
        }
    })
}
})(jQuery);
