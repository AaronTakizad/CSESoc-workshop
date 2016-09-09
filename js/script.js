jQuery(document).ready(function($) {
    //For parallax banner.
    jQuery(window).scroll(function () {
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

    
    //For YouTube player.
    $("#youtube-player").hide();
    
    var youtube_open = false;
    var youtube_video_id = "jaXBHkUaPNw";

    $("#youtube-img").attr("src", thumbnail('http://www.youtube.com/watch?v=' + youtube_video_id, 'large'));

    function thumbnail(url, size) {
        size = (size === null) ? 'big' : size;
        results = url.match('[\\?&]v=([^&#]*)');
        video = (results === null) ? url : results[1];

        if (size === 'small') {
            return 'http://img.youtube.com/vi/' + video + '/2.jpg';
        }
        return 'http://img.youtube.com/vi/' + video + '/0.jpg';
    };
    
    $("#youtube-btn").click(function(event){
        event.preventDefault();
        
        if(!youtube_open){
            addYoutube();
            $("#youtube-player").show("slow");
            youtube_open = true;
        } else {
            $("#youtube-player").hide("slow", removeYoutube);
            youtube_open = false;
        }
        
    }); 
    
    function addYoutube() {
        document.getElementById('youtube-player').innerHTML = '<iframe width="420" height="315" src="https://www.youtube.com/embed/'+ youtube_video_id +'?autoplay=1" frameborder="0" allowfullscreen></iframe>';
    }
    
    function removeYoutube() {
        document.getElementById('youtube-player').innerHTML = "";
    }
});
