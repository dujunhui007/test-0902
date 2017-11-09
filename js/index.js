$(document).ready(function () {
  $("#top .container hr").addClass("aschBoundary");
  $("#top .container .containerTitle").click(function () {
    setTimeout(function () {
      window.location.href = "aschVideo.html"
    }, 500);
    $("#top .container hr").addClass("closeHr")
  });
  $("#aschVideo").click(function () {
    setTimeout(function () {
      $(".closeLeft").addClass("closeLeftAnimation");
      $(".closeRight").addClass("closeRightAnimation");
      // window.location.href = "index.html";
    }, 0);
    setTimeout(function () {
      $("#aschVideo").remove(".closeLeft").remove(".closeRight");
      // $("#aschVideo").remove(".closeRight");
      // window.location.href = "index.html";
    }, 500);
    setTimeout(function () {
      // $(".closeLeft").hide();
      // $(".closeRight").hide();
      window.location.href = "index.html";
    }, 499);
  });
  $(".aschThree").hide();
  setTimeout(function () {
    var videoString2 = "<video class=\"aschTwo\" autoplay=\"true\" loop=\"true\"  preload=\"true\" src=\"video/Asch22.mp4\" width=\"100%\" height=\"100%\"></video>";
    $(".aschOne").remove();
    $("#aschVideo").append(videoString2);
  }, 7900);
  setTimeout(function () {
    $(".aschTwo").remove();
    $(".aschThree").show();
  }, 17900);
  // setTimeout(function () {
  //
  // }, 22000);

});