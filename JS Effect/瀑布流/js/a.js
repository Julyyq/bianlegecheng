$(function() {
  $.fn.scrollStopped = function(callback) {
    $(this).scroll(function() {
      if($(this).data("scrollStopped")) {
        clearTimeout($(this).data("scrollStopped"));
      }
      $(this).data("scrollStopped", setTimeout(callback, 250, this));
    });
  }

  function getRandom() {
    return Math.ceil(Math.random()*100);
  }
  
  var windowHeight = $(window).height();
  var elementOffsetTop = $(".waterfall-container").offset().top;
  function checkIsFull() {
    $(".waterfall-container li").each(function(i, el) {
      if(windowHeight + $(window).scrollTop() > elementOffsetTop + $(el).outerHeight(true)) {
        append($(el));
      }
    });
  }

  function append(container) {
    var tpl = "<div class='img-item' style='display:none;'><a href='javascript:;'><img src='img/" + getRandom() + ".jpg'></a><p>美女</p></div>";
    container.append(tpl);
    container.children(":last").fadeIn(function() {
      if(windowHeight + $(window).scrollTop() > elementOffsetTop + container.outerHeight(true)) {
        append(container);
      }
    });
  }

  checkIsFull();

  $(window).scrollStopped(function() {
    checkIsFull();
  });
});