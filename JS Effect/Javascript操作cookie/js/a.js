$(function() {
  function setCookie(name, value, expires) {
    var expiresDate = new Date().getDate() + expires;
    document.cookie = name + "=" + value + ";expires=" + expires;
  }
  function getCookie(name) {
    var arr = document.cookie.split(";")
    for (var i = 0; i < arr.length; i++) {
      var arr2 = arr[i].split("=");
      if(arr2[0]==name) return arr2[1];
      return "";
    };
  }
  function removeCookie(name) {
    setCookie(name, "", -1);
  }

  setCookie("author", "allen", 1);
  console.log(getCookie("author"));
});