$(document).ready(function () {
    $("a[href*=about]").click(function() {
      $('html, body').animate({
        scrollTop: $("#about").offset().top - 78
      }, 800);
    });
    $("a[href*=projects]").click(function() {
      $('html, body').animate({
        scrollTop: $("#projects").offset().top - 50
      }, 800);
    });
    $("a[href*=contact]").click(function() {
      $('html, body').animate({
        scrollTop: $("#contact").offset().top - 50
      }, 800);
    });
});
