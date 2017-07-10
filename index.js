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

$(function(){
  $(window).on("load", function() {
    introAnimation()
    $('.page-down').click(function(){
       var nextSection = $(this).closest('.scrolling-section').next('.scrolling-section');
       $('html, body').animate({
           scrollTop: $(nextSection).offset().top
       }, 2000);
   });

   navbarFunctions()
 });
})
