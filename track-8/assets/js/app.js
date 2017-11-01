$('.circle').mousemove(function (e) {

    var button = $(this).data('button');

    if (button = 'birth') {
    	$('.birthtext').fadeIn("fast");
    } else if(button = 'marriage') {
    	$('.marriagetext').fadeIn("fast");
    } else if(button = 'work') {
    	$('.worktext').fadeIn("fast");
    }else if(button = 'doom') {
    	$('.doomtext').fadeIn("fast");
    }
    $('.maintext').hide();
});

$('.maintext').mousemove(function (e) {$('.maintext').fadeIn();
	$('.marriagetext').hide("fast");
	$('.birthtext').hide("fast");
	$('.worktext').hide("fast");
	$('.doomtext').hide("fast");
});
