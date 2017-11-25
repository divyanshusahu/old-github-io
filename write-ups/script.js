$(document).ready(function() {

    function changeTerminalBody() {
        //var currentText = $(".terminal-menu-text").text();
        $("#l1").click(function() {
            $(".terminal-menu-text").text("divyanshu@divyanshu-laptop: ~/Backdoor-CTF")
            $("#l2").fadeOut(1000);
            $("#l3").fadeOut(1000);
            $("#l4").fadeOut(1000);
            $("#l5").fadeOut(1000);
            setTimeout(function(){
            	$("#t1").css({'display':'table'});
            	$("#terminal-back").css({'display':'block'});
            },1500);
        });
        $("#l2").click(function() {
            $(".terminal-menu-text").text("divyanshu@divyanshu-laptop: ~/Hack-This-Site")
            $("#l1").fadeOut(1000);
            $("#l3").fadeOut(1000);
            $("#l4").fadeOut(1000);
            $("#l5").fadeOut(1000);
			setTimeout(function(){
            	$("#t2").css({'display':'table'});
            	$("#terminal-back").css({'display':'block'});

            },1500)            
        });
        $("#l3").click(function() {
            $(".terminal-menu-text").text("divyanshu@divyanshu-laptop: ~/CTFS.me")
            $("#l2").fadeOut(1000);
            $("#l1").fadeOut(1000);
            $("#l4").fadeOut(1000);
            $("#l5").fadeOut(1000);
            setTimeout(function(){
            	$("#t3").css({'display':'table'});
            	$("#terminal-back").css({'display':'block'});
            },1500)
        });
        $("#l4").click(function() {
            $(".terminal-menu-text").text("divyanshu@divyanshu-laptop: ~/Bandit")
            $("#l2").fadeOut(1000);
            $("#l3").fadeOut(1000);
            $("#l1").fadeOut(1000);
            $("#l5").fadeOut(1000);
            setTimeout(function(){
            	$("#t4").css({'display':'table'});
            	$("#terminal-back").css({'display':'block'});
            },1500)
        });
        $("#l5").click(function() {
            $(".terminal-menu-text").text("divyanshu@divyanshu-laptop: ~/Bugs-Bunny-CTF")
            $("#l2").fadeOut(1000);
            $("#l3").fadeOut(1000);
            $("#l4").fadeOut(1000);
            $("#l1").fadeOut(1000);
            setTimeout(function(){
            	$("#t5").css({'display':'table'});
            	$("#terminal-back").css({'display':'block'});
            },1500)
        });
    };
    changeTerminalBody();

    function terminalBack(){
    	$("#terminal-back").click(function(){
    		setTimeout(function(){
    			$("table").css({'display':'none'});
    			$("#l1").css({'display':'block'});
    			$("#l2").css({'display':'block'});
    			$("#l3").css({'display':'block'});
    			$("#l4").css({'display':'block'});
    			$("#l5").css({'display':'block'});
    			$("#terminal-back").css({'display':'none'});
    			$(".terminal-menu-text").text("divyanshu@divyanshu-laptop: ~")
    		},100);
    	});
    };
    terminalBack();

});