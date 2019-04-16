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

function changeImage()
{
  var img = document.getELemendById("image");
  image.src="images/test2";
  return false;
}
})(jQuery);
