$(function() {
  var $container = $(".img-container");
  var pages = $container.children().length;
  var pageWidth = $container.children().width();
  var $prev = $(".prev");
  var $next = $(".next");

  function gotoPage(page) {
    if(page==0) {
      $container.css("left", "-=" + pageWidth);
      $container.children(":last").prependTo($container);
      gotoPage(1);
    }
    else if(page>pages) {
      $container.css("left", "+=" + pageWidth);
      $container.children(":first").appendTo($container);
      gotoPage(pages);
    }
    else {
      var destinationLeft = - (page-1) * pageWidth;
      $container.animate({
        left: destinationLeft
      });
    }
  }

  function getCurrentPage() {
    return -parseInt($container.css("left"))/pageWidth + 1;
  }

  $prev.click(function() {
    gotoPage(getCurrentPage()-1);
  });
  $next.click(function() {
    gotoPage(getCurrentPage()+1);
  });
});