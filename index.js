function introAnimation(){
    Typed.new('.element h1', {
        strings: [ "CS STUDENT", "EMBEDDED SYSTEMS ENGINEER", "IOS DEVELOPER", "WEB DEVELOPER", ""],
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

$(function(){
    introAnimation()
    $('.page-down').click(function(){
       var nextSection = $(this).closest('.scrolling-section').next('.scrolling-section');
       $('html, body').animate({
           scrollTop: $(nextSection).offset().top
       }, 2000);
   });
})
