$(document).ready(function(){
  $(".text-white").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
    $(".text-black").show();
    $(".text-white").hide();
  });
  
  $(".text-black").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
    $(".text-white").show();
    $(".text-black").hide();
  });

  $(".peekaboo").click(function() {
    $(".walrus-hidden").toggle();
    $(".walrus-showing").toggle();
  });
  $(".slide").click(function() {
    $(".slide-walrus").slideDown();
  });
});
