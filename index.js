function introAnimation(){
    Typed.new('.element h1', {
        strings: [ "CS STUDENT", "SOFTWARE ENGINEER", "ENTREPRENEUR"],
        typeSpeed: 0,
        startDelay: 1500,
        backDelay: 600,
        callback: function() {
            postIntroAnimation(finalIntroAnimation())
        }
    });
}

function postIntroAnimation(callback){
    $(".animate-text").fadeOut(2000);
}

function finalIntroAnimation(){
    console.log("Enters")
    $(".animate-text").css({
      "display": "none"
    });

    $(".main-text").fadeIn(2000, function(){
      console.log("Fading In")
    })
}

$(function(){
    introAnimation()
})
