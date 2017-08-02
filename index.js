var SCROLL_ANIMATED_ELEMENTS = [".about-me h1", ".experience h1", ".contact-me h1"]

function introAnimation(){
  //Animation that loops through a couple words
    Typed.new('.element h1', {
        strings: [ "TECH ENTHUSIAST", "CS STUDENT", "IOS / WEB DEVELOPER", ""],
        typeSpeed: 0,
        startDelay: 1000,
        backDelay: 600,
        callback: function() {
            postIntroAnimation(finalIntroAnimation)
        }
    });
}

function postIntroAnimation(callback){
  //Makes the typed intro fade away
    $(".animate-text").fadeOut(1000);
    callback()
}

function finalIntroAnimation(){
    //Fades in the text for the main page
    $(".animate-text").css({
      "display": "none"
    });
    $(".main-text").fadeIn(1000)
}

function navbarFunctions(){
  //Adds action listeners to the navbar buttons
  var offset = 40;
  if($(window).width() < 481){
    offset = 30
  }

  $('.navbar-brand').click(function(){
    $('html, body').animate({
        scrollTop: $('.landingPage').offset().top
    }, 500);
  });

  $('#about-me').click(function(){
    $('html, body').animate({
        scrollTop: $('.about-me').offset().top -offset
    }, 500);
  });

  $('#experience').click(function(){
    $('html, body').animate({
        scrollTop: $('.myinfo').offset().top -offset
    }, 500);
  });

  $('#get-in-touch').click(function(){
    $('html, body').animate({
        scrollTop: $('.contact-me').offset().top -offset
    }, 500);
  });

  $('.nav a').on('click', function(){
    $('.navbar-toggle').click()
  });


}

function animateTitleOnScroll() {

  for (var item in SCROLL_ANIMATED_ELEMENTS){

    var animateItem = SCROLL_ANIMATED_ELEMENTS[item]
    if (isElementInViewport(animateItem) &&	!$(animateItem).hasClass('start')) {

      $(animateItem).addClass('start')
      var fontSize = "2.2em"

      if($(window).width() < 481){
        fontSize = "1.8em"
      }

      $(animateItem).animate({
        "font-size": fontSize
      }, 500, function(){

      });
    }

  }

}

function hideSpinner(){
  $("#overlay").css({
    "display": "none"
  });

  //Show the navbar
  $("nav").fadeIn(1000)
}

function isElementInViewport(elem) {
  // https://stackoverflow.com/questions/16325679/activate-css3-animation-when-the-content-scrolls-into-view

  var $elem = $(elem);

  // Get the scroll position of the page.
  var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
  var viewportTop = $(scrollElem).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  // Get the position of the element on the page.
  var elemTop = Math.round( $elem.offset().top );
  var elemBottom = elemTop + $elem.height();

  return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}


$(function(){
  $(window).on("load", function() {

    // Hide the spinner on load
    window.setTimeout(hideSpinner, 1000);


    introAnimation()
    navbarFunctions()

    var offset = 40;
    if($(window).width() < 481){
      offset = 30
    }

    $('.page-down').click(function(){
       var nextSection = $(this).closest('.scrolling-section').next('.scrolling-section');
       $('html, body').animate({
           scrollTop: $(nextSection).offset().top - offset
       }, 700);
   });

   $(window).scroll(function(){
     animateTitleOnScroll()
   });

});

});
