var images = ["images/001.png", "images/002.png", "images/003.png", "images/004.png", "images/005.png", "images/006.png", "images/007.png", "images/008.png", "images/009.png", "images/010.png", "images/011.png", "images/012.png", "images/013.png", "images/014.png", "images/015.png", "images/016.png", "images/017.png", "images/018.png", "images/019.png", "images/020.png", "images/021.png", "images/022.png", "images/023.png", "images/024.png", "images/025.png", "images/026.png", "images/027.png", "images/028.png", "images/029.png", "images/030.png", "images/031.png", "images/032.png", "images/033.png", "images/034.png", "images/035.png", "images/036.png", "images/037.png", "images/038.png", "images/039.png", "images/040.png", "images/041.png", "images/042.png", "images/043.png", "images/044.png", "images/045.png", "images/046.png", "images/047.png", "images/048.png", "images/049.png", "images/050.png", "images/051.png", "images/052.png", "images/053.png", "images/054.png", "images/055.png", "images/056.png", "images/057.png", "images/058.png", "images/059.png", "images/060.png", "images/061.png", "images/062.png", "images/063.png", "images/064.png", "images/065.png", "images/066.png", "images/067.png", "images/068.png", "images/069.png", "images/070.png", "images/071.png", "images/072.png", "images/073.png", "images/074.png", "images/075.png", "images/076.png", "images/077.png", "images/078.png", "images/079.png", "images/080.png", "images/081.png", "images/082.png", "images/083.png", "images/084.png", "images/085.png", "images/086.png", "images/087.png", "images/088.png", "images/089.png", "images/090.png", "images/091.png", "images/092.png", "images/093.png", "images/094.png", "images/095.png", "images/096.png", "images/097.png", "images/098.png", "images/099.png", "images/100.png", "images/101.png", "images/102.png", "images/103.png", "images/104.png", "images/105.png", "images/106.png", "images/107.png", "images/108.png", "images/109.png", "images/110.png", "images/111.png", "images/112.png", "images/113.png", "images/114.png", "images/115.png", "images/116.png", "images/117.png", "images/118.png", "images/119.png", "images/120.png", "images/121.png", "images/122.png", "images/123.png", "images/124.png", "images/125.png", "images/126.png", "images/127.png", "images/128.png", "images/129.png", "images/130.png", "images/131.png", "images/132.png", "images/133.png", "images/134.png", "images/135.png", "images/136.png", "images/137.png", "images/138.png", "images/139.png", "images/140.png", "images/141.png", "images/142.png", "images/143.png", "images/144.png", "images/145.png", "images/146.png", "images/147.png", "images/148.png", "images/149.png", "images/150.png"];

function myFunction() {
  var x = Math.floor((Math.random() * images.length)); $('#afbeelding').attr('src', images[x]);
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
