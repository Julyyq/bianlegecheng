$(function() {
  var $container = $(".img-container");
  var pages = $container.children().length;
  var pageWidth = $container.children().width();
  var $prev = $(".prev");
  var $next = $(".next");
  var cur = "cur";

  // 标记每张图片的原始位置
  $container.children().each(function(i, el) {
    $(el).data("index", i);
  });

  function gotoPage(page) {
    $container.children().removeClass(cur);
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
      }, function() {
        var index = getCurrentPage() - 1;
        $container.children().eq(index).addClass(cur);
        setDot();
      });
    }
  }

  function setDot() {
    var rawIndex = $container.children("." + cur).data("index");
    $(".dots a").removeClass(cur).eq(rawIndex).addClass(cur);
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