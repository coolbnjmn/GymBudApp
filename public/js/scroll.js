
function scroll(next) {
	$('html, body').animate({scrollTop: $(next).offset().top},  500,
            function() { window.location.hash = next; });
	
 
}

function scrollUp(current) {
	if (current == "#two")
		scroll("#one");
	if (current == "#three")
		scroll("#two");
	if (current == "#four")
		scroll("#three");  
}
function scrollDown(current) {
	if (current == "#one")
		scroll("#two");
	if (current == "#two")
		scroll("#three");
	if (current == "#three")
		scroll("#four");  
}

$(document).keydown(function(e) {
    if (e.keyCode == 38) {
		scrollUp(document.location.hash); 
    } 
	else if(e.keyCode == 40) {
		scrollDown(document.location.hash); 
	}
  });

  

function slideSwitch() {
    var $active = $('#slideshow IMG.active');

    if ( $active.length == 0 ) $active = $('#slideshow IMG:last');

    var $next =  $active.next().length ? $active.next()
        : $('#slideshow IMG:first');

    $active.addClass('last-active');
        
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}


$(document).ready(function(){ 
	$("#arrow").click(function(){
		$("div#slideshow div#pic2").css('zIndex', 99); 
		$("div#slideshow div#pic2").css('marginLeft',  '-2000px'); 
		$("div#slideshow div#pic2").animate({marginLeft: '0px'}); 
		$("div#slideshow div#pic1").animate({marginLeft: '2000px'}, 
			function() {
				$("div#slideshow div#pic1").css('zIndex', -10); 
				$("div#slideshow div#pic1").css('marginLeft',  '0px'); 
			});
		$("#caption").text("caption2");
	});
	$("#pic2").click(function(){ 
		$("div#slideshow div#pic3").css('zIndex', 99); 
		$("div#slideshow div#pic3").css('marginLeft',  '-2000px'); 
		$("div#slideshow div#pic3").animate({marginLeft: '0px'}); 
		$("div#slideshow div#pic2").animate({marginLeft: '2000px'}, 
			function() {
				
				$("div#slideshow div#pic2").css('zIndex', -10); 
				$("div#slideshow div#pic2").css('marginLeft',  '0px'); 
			});
		$("#caption").text("caption3");
	});
	$("#pic3").click(function(){
		$("div#slideshow div#pic1").css('zIndex', 99); 
		$("div#slideshow div#pic1").css('marginLeft',  '-2000px'); 
		$("div#slideshow div#pic1").animate({marginLeft: '0px'}); 
		$("div#slideshow div#pic3").animate({marginLeft: '2000px'}, 
			function() {
				
				$("div#slideshow div#pic3").css('zIndex', -10); 
				$("div#slideshow div#pic3").css('marginLeft',  '0px'); 
			});
		$("#caption").text("caption1");
	});
	$(".link1").click(function(){
		scroll("#one"); 
	}); 
	$(".link2").click(function(){
		scroll("#two"); 
	}); 
	$(".link3").click(function(){
		scroll("#three"); 
	}); 
	$(".link4").click(function(){
		scroll("#four"); 
	}); 
	$("#next").click(function(){	
		    var $active = $('#slideshow IMG.active');
			if ($active.next().length == 0)
			{
				var $next = $('#slideshow IMG:first'); 
			}
			else 
				var $next = $active.next();    
			//$active.removeClass('active');
			$active.addClass('last-active');
			$next.css({opacity: 0.0})
			$next.addClass('active');
			$next.animate({opacity: 1.0}, 500, function() {
            $active.removeClass('active');
			$active.removeClass('last-active');
			id = $next.attr('id');
			if(id=="pic1")
				$("#caption").text("Find fellow fitness enthusiasts with similar goals, be it a running-buddy, weightlifting spotter, a group to play pick-up basketball with, we’ll present you with an array of local options based on your preferences."); 
			if(id=="pic2")
				$("#caption").text("Interactive map feature allows users to drop pins on workout locations and sign up for events directly. Perfect for pick-up games or any organized event!"); 
			if(id=="pic3")
				$("#caption").text("Just enter your workout preferences, experience, and location.");
			if(id=="pic4")
				$("#caption").text("Our quick-and-easy user interface connects you to potential workout partners in seconds.");
        });
	}); 
	$("#last").click(function(){	
		    var $active = $('#slideshow IMG.active');
			if ($active.prev().length == 0)
			{
				var $next = $('#slideshow IMG:last'); 
			}
			else 
				var $next = $active.prev();  
			
			//$active.removeClass('active');
			$active.addClass('last-active');
			$next.css({opacity: 0.0})
			$next.addClass('active');
			$next.animate({opacity: 1.0}, 500, function() {
            $active.removeClass('active');
			$active.removeClass('last-active');
			id = $next.attr('id');
			if(id=="pic1")
				$("#caption").text("Find fellow fitness enthusiasts with similar goals, be it a running-buddy, weightlifting spotter, a group to play pick-up basketball with, we’ll present you with an array of local options based on your preferences."); 
			if(id=="pic2")
				$("#caption").text("Interactive map feature allows users to drop pins on workout locations and sign up for events directly. Perfect for pick-up games or any organized event!"); 
			if(id=="pic3")
				$("#caption").text("Just enter your workout preferences, experience, and location.");
			if(id=="pic4")
				$("#caption").text("Our quick-and-easy user interface connects you to potential workout partners in seconds.");
        });
	}); 
}); 