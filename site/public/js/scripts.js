$(window).resize(function() {
	var height = $(window).height();
	$('.screen').css('min-height', height + 'px');
});


$(function() {
	$(window).trigger('resize');

	$('#slides').slidesjs({
		width: 670,
		height:430,
		play: {
          active: true,
          auto: true,
          interval: 4000,
          swap: true
        }

	});

$(".fancybox-effects-d").fancybox({
				padding: 0,

				openEffect : 'elastic',
				openSpeed  : 150,

				closeEffect : 'elastic',
				closeSpeed  : 150,

				closeClick : true,

				helpers : {
					overlay : null
				}
			});

var aboveHeight = $(window).height();

$(window).scroll(function(){
	if ($(window).scrollTop()> aboveHeight) {
		$('nav').addClass('visible');
	} else {
		$('nav').removeClass('visible');
	}

});

$.fn.scrollTo = function(offset, callback) {
	$('html, body').animate({
		scrollTop: this.offset().top - (offset || 0)
	}, 500, callback);
};

$(function() {


	$('.link-1').click(function() {
		$('#photography').scrollTo(75);
	});
	$('.link-2').click(function() {
		$('#design').scrollTo(60);
	});
	$('.link-3').click(function() {
		$('#wrapper').scrollTo(75);
	});
	$('.link-4').click(function() {
		$('#typography').scrollTo(75);
	});
	$('.link-5').click(function() {
		$('#resume').scrollTo(75);
	});
});


});



    

