function introAnimation(){
    Typed.new('.element h1', {
        strings: [ "CS STUDENT", "IOS DEVELOPER", "WEB DEVELOPER", "SOFTWARE ENGINEER", ""],
        typeSpeed: 0,
        startDelay: 1500,
        backDelay: 600,
        callback: function() {
            postIntroAnimation(finalIntroAnimation)
        }
    });
}

function postIntroAnimation(callback){
    $(".animate-text").fadeOut(2000);
    callback()
}

function finalIntroAnimation(){
    $(".animate-text").css({
      "display": "none"
    });
    $(".main-text").fadeIn(2000)
}

function isScrolledIntoView(elem){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function navbarFunctions(){

  $('#about-me').click(function(){
    $('html, body').animate({
        scrollTop: $('.aboutMe').offset().top
    }, 2000);
  });

  $('.navbar-brand').click(function(){
    $('html, body').animate({
        scrollTop: $('.landingPage').offset().top
    }, 2000);
  });

}

function animateCarouselHeadings(){
  var currentIndex = $('div.active').index() + 1;
  var heading = ""
  if (currentIndex == 1)
     heading = "EXPERIENCE"
  else if (currentIndex == 2)
     heading = "EDUCATION"

  Typed.new('.carousel-inner section h1', {
      strings: [heading],
      typeSpeed: 0,
      startDelay: 500,
      backDelay: 600,
      callback: function() {}
  });

}

$(function(){
  $(window).on("load", function() {
    introAnimation()
    animateCarouselHeadings()
    
    $('.page-down').click(function(){
       var nextSection = $(this).closest('.scrolling-section').next('.scrolling-section');
       $('html, body').animate({
           scrollTop: $(nextSection).offset().top
       }, 2000);
   });

   navbarFunctions()

   $(".carousel-control").click(function(){
     animateCarouselHeadings()
   });

});

});
