jQuery(document).ready(function ($) {

    setInterval(function () {
        moveRight();
    }, 3000);
  
	var slideCount = $('#slider article a').length;
	var slideWidth = $('#slider article a').width();
	var slideHeight = $('#slider article a').height();
	var sliderarticleWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider article').css({ width: sliderarticleWidth, marginLeft: - slideWidth });
	
    $('#slider article a:last-child').prependTo('#slider article');

    function moveLeft() {
        $('#slider article').animate({
            left: + slideWidth
        }, 500, function () {
            $('#slider article a:last-child').prependTo('#slider article');
            $('#slider article').css('left', '');
        });
    };

    function moveRight() {
        $('#slider article').animate({
            left: - slideWidth
        }, 500, function () {
            $('#slider article a:first-child').appendTo('#slider article');
            $('#slider article').css('left', '');
        });
    };

    $('.previous').click(function () {
        moveLeft();
    });

    $('.next').click(function () {
        moveRight();
    });

});    
