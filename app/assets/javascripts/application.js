// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


// Fireup the plugins
$(document).ready(function(){

  // initialise  slideshow
  $('.flexslider').flexslider({
    animation: "slide",
    start: function(slider){
      $('body').removeClass('loading');
    }
  });

});
/**
 * Handles toggling the navigation menu for small screens.
 */
( function() {
  var button = document.getElementById( 'topnav' ).getElementsByTagName( 'div' )[0],
    menu   = document.getElementById( 'topnav' ).getElementsByTagName( 'ul' )[0];

  if ( undefined === button )
    return false;

  // Hide button if menu is missing or empty.
  if ( undefined === menu || ! menu.childNodes.length ) {
    button.style.display = 'none';
    return false;
  }

  button.onclick = function() {
    if ( -1 == menu.className.indexOf( 'srt-menu' ) )
      menu.className = 'srt-menu';

    if ( -1 != button.className.indexOf( 'toggled-on' ) ) {
      button.className = button.className.replace( ' toggled-on', '' );
      menu.className = menu.className.replace( ' toggled-on', '' );
    } else {
      button.className += ' toggled-on';
      menu.className += ' toggled-on';
    }
  };
} )();
