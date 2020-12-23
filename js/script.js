// event pada saat link di klik
$('.page-scroll').on('click',function(e){
	// ambil href nya
	var tujuan = $(this).attr('href');
	// ambil element ybs
	var elemenTujuan = $(tujuan);
	// jalankan scroll nya
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top - 40
	},1250,'easeInOutExpo');


	e.preventDefault();
})


// parallax
// about
$(window).on('load', function() {
	$('.pKiri').addClass('muncul');
	$('.pKanan').addClass('muncul');
});

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	// fixed background scrolling body untuk jumbotron
	$('.jumbotron img').css({
		'transform': 'translate(0, '+ wScroll/4 +'%)'
	});
	$('.jumbotron h1').css({
		'transform': 'translate(0, '+ wScroll/2 +'%)'
	});
	$('.jumbotron p').css({
		'transform': 'translate(0, '+ wScroll/1.2 +'%)'
	});

	// landing elements untuk gallery
	if (wScroll > $('.gallery').offset().top - 300) {
		$('.gallery .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.gallery .thumbnail').eq(i).addClass('muncul');
			}, 300*(i+1));
		});
	}

});
