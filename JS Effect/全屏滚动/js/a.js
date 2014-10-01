$(function() {
  var windowHeight = $(window).height();
  $("#fullpage").height(windowHeight*5);
  var isScroll = false;

  function addMousewheelEvent() {
    if(document.addEventListener) {
      //标准浏览器
      document.addEventListener("mousewheel", mousewheelHandler, false); //除了firefox
      document.addEventListener("wheel", mousewheelHandler, false); //firefox
    }
    else {
      //ie
      document.attachEvent("onMousewheel", mousewheelHandler);
    }
  }

  var timestamp = new Date().getTime();
  function mousewheelHandler(e) {
    var ev = window.event || e;
    ev.preventDefault();
    
    var timeNow = new Date().getTime();
    if(timeNow - timestamp < 100) {
      timestamp = timeNow;
      return;
    }
    timestamp = timeNow;

    var delta = ev.wheelDelta || -ev.detail || -ev.deltaY;

    if(delta<0) {
      scrolling("down");
    }
    else {
      scrolling("up");
    }
  }

  function scrolling(direction) {
    if(!isScroll) {
      isScroll = true;
      if(direction == "down") {
        $("html,body").animate({scrollTop: "+=" + windowHeight}, 1000, function() {
          isScroll = false;
        });
      }
      else if(direction == "up") {
        $("html,body").animate({scrollTop: "-=" + windowHeight}, 1000, function() {
          isScroll = false;
        });
      }
    }
  }

  addMousewheelEvent();
});