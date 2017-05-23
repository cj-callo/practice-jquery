$(document).ready(function(){
  $(".peekaboo").click(function() {
    $(".walrus-hidden").toggle();
    $(".walrus-showing").toggle();
  });
  $(".slide").click(function() {
    $(".slide-walrus").slideDown();
  });
});
