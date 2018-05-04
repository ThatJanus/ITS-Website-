$(document).ready(function() {

    var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
      var stickyHeight = sticky.outerHeight();
      var stickyTop = stickyWrapper.offset().top;
      if (scrollElement.scrollTop() >= stickyTop){
        stickyWrapper.height(stickyHeight);
        sticky.addClass("is-sticky");
      }
      else{
        sticky.removeClass("is-sticky");
        stickyWrapper.height('auto');
      }
    };
    
    $('[data-toggle="sticky-onscroll"]').each(function() {
      var sticky = $(this);
      var stickyWrapper = $('<div>').addClass('sticky-wrapper'); 
      sticky.before(stickyWrapper);
      sticky.addClass('sticky');
      
      $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
        stickyToggle(sticky, stickyWrapper, $(this));
      });
      
      stickyToggle(sticky, stickyWrapper, $(window));
    });
  });

  $(window).scroll(function() {
    if($(this).scrollTop() > 50)  
    {
        $('.opaque-navbar').addClass('opaque');
    } else {
        $('.opaque-navbar').removeClass('opaque');
    }
});
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar-custom") {
      x.className += "responsive";
  } else {
      x.className = "navbar-custom";
  }
}