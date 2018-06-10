$(document).ready(function(){
	$('.nav__menu-icon').click(function(){
		$(this).toggleClass('open');
		$('.nav__menu').toggleClass('show-menu');
		$('.nav__login').toggleClass('show-btn');
		$('body').toggleClass('no-scroll');
	});

	var $window = $(window);

    function resize() {
        if ($window.width() > 667) {
            return $('.nav__menu').removeClass('show-menu'), $('.nav__login').removeClass('show-btn'), $('body').removeClass('no-scroll'), $('.nav__menu-icon').removeClass('open');
        }
    }
    $window
        .resize(resize)
		.trigger('resize');
		
});