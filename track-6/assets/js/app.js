$('.choicebutton').click(function() {
    var button_name = $(this).data('button');  

     if (button_name == 'listen') {
      $('.lightbox').removeClass('hide1');
      $('.mainpage').addClass('hide');
      $('audio')[0].play();
    } 

     if (button_name == 'read') {
      $('.lightbox').removeClass('hide2');
      $('.mainpage').addClass('hide');
    } 
	if (button_name == 'recall') {
      $('.lightbox').removeClass('hide3');
      $('.mainpage').addClass('hide');
    } 

});



$('.sound').click(function(){
  $('.lightbox').addClass('hide1');
  $('audio')[0].pause();
  $('.mainpage').removeClass('hide');
});

$('.back').click(function(){
  $('.lightbox').addClass('hide2');
  $('.mainpage').removeClass('hide');
});

$('.finish').click(function(){
  $('.lightbox').addClass('hide3');
  $('.mainpage').removeClass('hide');
});

