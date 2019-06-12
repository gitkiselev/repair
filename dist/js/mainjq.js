$(document).ready(function() {
    var button = $("#button");
    var modal = $("#modal");
    var close = $("#close");
    button.on("click", function() {
      modal.addClass("modal_active");
    });
    close.on("click", function() {
      modal.removeClass("modal_active");
    });
  
    var $backToTop = $(".to-top");
    $backToTop.hide();
  
    $(window).on("scroll", function() {
      if ($(this).scrollTop() > 100) {
        $backToTop.fadeIn();
      } else {
        $backToTop.fadeOut();
      }
    });
  
    $backToTop.on("click", function(e) {
      $("html, body").animate({ scrollTop: 0 }, 500);
    });
  });
  