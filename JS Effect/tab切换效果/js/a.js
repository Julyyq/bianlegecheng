$(function() {
  $(".tabs-title > li").click(function() {
    //选中效果
    $(".tabs-title > li").removeClass("cur");
    $(this).addClass("cur");
    //切换内容
    $(".tabs-content > div").hide();
    var index = $(this).index(".tabs-title > li");
    $(".tabs-content > div").eq(index).fadeIn();
  });
});