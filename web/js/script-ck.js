/* Author:
 Eric Casequin and Daniel Lau
 Rock your socks off with crappy js.
 
*/function init(){setup_nav()}function check_nav(){var a=get_url_hash(),b=$("#show-"+a).length;console.log(a);a!="danny"&&a!="kris"&&a!="bill"?hide_show("bill"):hide_show(a);console.log(hash)}function setup_nav(){var a=$("#header-container ul li");a.length>0&&a.each(function(){$(this).click(function(a){a.preventDefault();var b=$(this).attr("id");update_url("#/"+b);hide_show(b)})})}function update_url(a){window.history.pushState("","Bethel Authors",a)}function hide_show(a){$(".authors").removeClass("active");$("#show-"+a).addClass("active")}function get_url_hash(){var a=window.location.hash,b=a.replace("#/","").toLowerCase();return b}$(document).ready(function(){console.log("loaded");init();console.log("made it to the end")});