/* Author:
 Eric Casequin and Daniel Lau
 Rock your socks off with crappy js.
 
*/


$(document).ready(function() {
  init();
  
  // $(window).resize(function() {
  //    console.log( $(this).width() );
  // });
  
});

function init() {
  check_nav(); // Checks to see if a hash is set
  setup_nav();
  
}

function check_nav() {
  // Check URL
  var url_hash = get_url_hash();
  var welookingfor = $('#show-' + url_hash).length;
  console.log(url_hash);

  // Check to see if id exist
  if ( url_hash != 'danny' && url_hash != 'kris' && url_hash != 'bill' ) {
    hide_show('bill');
  } else {
    hide_show(url_hash);
  }
  
  //hide/show corrisponding

  console.log( url_hash );
}

function setup_nav() {
  var nav = $('#header-container ul li');
  if (nav.length > 0) {
    
    // Do magical stuff when people click these things
    nav.each(function() {
      $(this).click(function(e) {
        e.preventDefault();
        
        // Get the id of this atttribute
        var this_id = $(this).attr('id');
        
        // Update the Browser History URL for easier reference
        update_url( '#/'+this_id );
        
        // Update/hide/show correct classes
        hide_show(this_id);
        
      });
    });
    
  };
}

// URL updater
function update_url(url) {
  window.history.pushState('', 'Bethel Authors', url);
}

// Hide show specific boxes
function hide_show(author_id) {
  $('.authors').removeClass('active');
  $('#navigation li a').removeClass('active');
  
  /// now activate it
  $('#show-' + author_id).addClass('active');
  $('#navigation #' + author_id + ' a').addClass('active');
  
}

function get_url_hash() {
  var url = window.location.hash;
  var hash = url.replace('#/', '').toLowerCase();
  return hash;
}


