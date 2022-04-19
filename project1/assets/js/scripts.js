$(document).ready(function () {

    var items = document.querySelectorAll(".home");

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    window.addEventListener("load", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

/*The "back to top" button appears when the page is swiped down 30px*/
  $(window).scroll(function(){
      if (this.scrollY > 30) {
          $("navbar").addClass("");
          $(".up").fadeIn();
    }
      else {
          $(".navbar").removeClass("");
          $(".up").fadeOut();
    }
  });

  $(".up").click(function(){scroll(0,0)});

  $('.menu-b').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });
    
 $(".gallery").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{enabled:true}
  });
});