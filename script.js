$(document).ready(function() {
	var cw = $('.aboveProfile').width();
	$('#profile').css({'height':cw+'px'});

	var typed = new Typed("#type", {
		strings: ["^500 DEVELOPER  ","^500 <b>DEVELOPER &nbsp;&nbsp;</b>  ","^500 <b>HACKER &nbsp;&nbsp;</b>  ", "^500 <b>UNDERGRAD &nbsp;&nbsp;</b>  "],
		typeSpeed: 50,
		backSpeed: 25,
		loop: true,
		loopCount: Infinity,
		backDelay: 1000
	});

	//$(".mouseWheel").effect("shake", {direction: "down", times: 40, distance: 3},40000);

	setInterval(function() {
		$(".mouseWheel").effect("shake", {direction: "down", times: 1, distance: 3},1000);
	}, 1000);

	$(".mouse").click(function(){
		window.scrollTo(0,window.innerHeight)
	});

	var pw = $('.skillsInfo').height();
	$('.skillValue').css({'height':pw+'px'});

	var dw = $('.work').height();
	$('.value').css({'height':dw+'px'});

	$('.arrow').click(function(){
		$('.arrow').css({'display':'none'});
		$('#listwork2').css({'display':'block'});
	});

});