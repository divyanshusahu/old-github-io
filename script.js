$(document).ready(function() {
    var cw = $('.aboveProfile').width();
    $('#profile').css({
        'height': cw + 'px'
    });

    var typed = new Typed("#type", {
        strings: ["^500 DEVELOPER  ", "^500 <b>DEVELOPER &nbsp;&nbsp;</b>  ", "^500 <b>HACKER &nbsp;&nbsp;</b>  ", "^500 <b>UNDERGRAD &nbsp;&nbsp;</b>  "],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true,
        loopCount: Infinity,
        backDelay: 1000
    });

    //$(".mouseWheel").effect("shake", {direction: "down", times: 40, distance: 3},40000);

    setInterval(function() {
        $(".mouseWheel").effect("shake", {
            direction: "down",
            times: 1,
            distance: 3
        }, 1000);
    }, 1000);

    $(".mouse").click(function() {
        //setTimeout(function(){window.scrollTo(0,window.innerHeight)},2000)
        $("html, body").animate({
            scrollTop: window.innerHeight
        }, 1500);
    });

    /*$(".nav-list").click(function(){
        $("html, body").animate({
            scrollTop: 3000
        }, 1500);
    });*/
    if (window.innerWidth >= 768) {
        var aw = $(".navigation-list").width();
        $('.nav-list').css({
            'width': aw / 5 + 'px'
        });
    }

    $("#l1").click(function(){
        $p = $("#home").offset().top;
        $("html, body").animate({
            scrollTop: $p
        }, 1000);
    });
    $("#l2").click(function(){
        $p = $("#about").offset().top;
        $("html, body").animate({
            scrollTop: $p
        }, 1000);
    });
    $("#l3").click(function(){
        $p = $("#skills").offset().top;
        $("html, body").animate({
            scrollTop: $p
        }, 1000);
    });
    $("#l4").click(function(){
        $p = $("#work").offset().top;
        $("html, body").animate({
            scrollTop: $p
        }, 1000);
    });
    $("#l5").click(function(){
        $p = $("#contact").offset().top;
        $("html, body").animate({
            scrollTop: $p
        }, 1000);
    });

    function activenavigation(){
        var h1 = Math.round($("#home").offset().top);
        //console.log(h1);
        var h2 = Math.round($("#about").offset().top);
        //console.log(h2);
        var h3 = Math.round($("#skills").offset().top) - 1;
        //console.log(h3);
        var h4 = Math.round($("#work").offset().top) - 1;
        //console.log(h4);
        var h5 = h4 + $("#work").height();
        //console.log(h5);



        $(window).on('scroll',function(){
            var current = Math.round($(window).scrollTop());
            //console.log(current);
            if (current < h2){
                $('#l1').css({'color':'rgb(200,165,0)'});
                $('#l2').css({'color':'rgb(255,255,255)'});
                $('#l3').css({'color':'rgb(255,255,255)'});
                $('#l4').css({'color':'rgb(255,255,255)'});
                $('#l5').css({'color':'rgb(255,255,255)'});
            }
            if (current >= h2 && current < h3){
                $('#l1').css({'color':'rgb(255,255,255)'});
                $('#l2').css({'color':'rgb(200,165,0)'});
                $('#l3').css({'color':'rgb(255,255,255)'});
                $('#l4').css({'color':'rgb(255,255,255)'});
                $('#l5').css({'color':'rgb(255,255,255)'});
            }
            if (current >= h3 && current < h4){
                $('#l1').css({'color':'rgb(255,255,255)'});
                $('#l2').css({'color':'rgb(255,255,255)'});
                $('#l3').css({'color':'rgb(200,165,0)'});
                $('#l4').css({'color':'rgb(255,255,255)'});
                $('#l5').css({'color':'rgb(255,255,255)'});
            }
            if (current >= h4 && current < h5){
                $('#l1').css({'color':'rgb(255,255,255)'});
                $('#l2').css({'color':'rgb(255,255,255)'});
                $('#l3').css({'color':'rgb(255,255,255)'});
                $('#l4').css({'color':'rgb(200,165,0)'});
                $('#l5').css({'color':'rgb(255,255,255)'});
            }
            if (current == ($(document).height()- $(window).height())){
                $('#l1').css({'color':'rgb(255,255,255)'});
                $('#l2').css({'color':'rgb(255,255,255)'});
                $('#l3').css({'color':'rgb(255,255,255)'});
                $('#l4').css({'color':'rgb(255,255,255)'});
                $('#l5').css({'color':'rgb(200,165,0)'});
            }
        });
    }

    activenavigation();

    $(".toggle").click(function(){
        $(".navigation-list").toggleClass("up");
    });

    var pw = $('.skillsInfo').height();
    $('.skillValue').css({
        'height': pw + 'px'
    });

    var dw = $('.work').height();
    $('.value').css({
        'height': dw + 'px'
    });

});