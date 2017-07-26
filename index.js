function introAnimation(){
  //Animation that loops through a couple words
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
  //Makes the typed intro fade away
    $(".animate-text").fadeOut(2000);
    callback()
}

function finalIntroAnimation(){
    //Fades in the text for the main page
    $(".animate-text").css({
      "display": "none"
    });
    $(".main-text").fadeIn(2000)
}

function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
    }else{
        $('.navbar').removeClass("scrolled");
    }
}


function navbarFunctions(){
  //Adds action listeners to the navbar buttons
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
  //Animates the carousel headings
  var currentIndex = $('div.active').index() + 1;
  console.log(currentIndex)
  var heading = ""
  if (currentIndex == 1)
     heading = "EDUCATION"
  else if (currentIndex == 2)
     heading = "EXPEREINCE"

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

    //Type "EXPERIENCE" onto the first carousel
    Typed.new('.carousel-inner section h1', {
        strings: ["EXPEREINCE"],
        typeSpeed: 0,
        startDelay: 500,
        backDelay: 600,
        callback: function() {}
    });

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

  if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
  }
});
