$(window).scroll(function () {
    var top = $(document).scrollTop();
    $('.parallax').css({
	'background-position': '0px -'+(top/3).toFixed(2)+'px'
    });
    if(top > 50){
	$('#home > .navbar').removeClass('navbar-transparent');
    }
    else{
        $('#home > .navbar').addClass('navbar-transparent');
    }
});
