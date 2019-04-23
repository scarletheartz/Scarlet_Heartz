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

// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// Show pokemon 1 to 9
function ones() {
    $("10pokemon").click(function(){
      $(this).hide();
    });
  });
