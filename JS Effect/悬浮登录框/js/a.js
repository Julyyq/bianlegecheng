$(function() {
  $(".login").click(function() {
    $("#popup-login-maks").show();
    $("#popup-login").show();
  });
  $("#popup-login-maks").click(function() {
    $("#popup-login-maks").hide();
    $("#popup-login").hide();
  });
});