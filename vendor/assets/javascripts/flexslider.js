$('.flexslider').flexslider({
  animation: "slide",
  mousewheel: true,
  slideshow: false,
  video: true,
  before: function(){
    $('.slides > li > video').each( function(i) {
      $(this).get(0).pause();
    });
  }

});