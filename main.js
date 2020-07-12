$(function () {
  var $image = $(".m-w-images a");

  $image
    .on("mouseover", function () {
      $(this).find("strong, span").stop(true).animate({ opacity: 1 }, 300);
    })
    .on("mouseout", function () {
      $(this).find("strong, span").stop(true).animate({ opacity: 0 }, 300);
    });

  var $button = $("button");
  var $i = $("i");

  $button.on("click", function () {
    $i.toggleClass("open");
    if ($i.hasClass("open")) {
      $(".right-header").stop(true).css("display", "block");
    } else {
      $(".right-header").stop(true).css("display", "none");
    }
  });
});
