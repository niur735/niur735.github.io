$('.choicebutton').click(function() {
    var button_name = $(this).data('button');  

     if (button_name == 'listen') {
      $('.lightbox').removeClass('hide1');
      $('.mainpage').addClass('hide');
      $('audio')[0].play();
      $('.end').addClass('hide');
    } 

     if (button_name == 'read') {
      $('.lightbox').removeClass('hide2');
      $('.mainpage').addClass('hide');
      $('.end').addClass('hide');
    } 
	if (button_name == 'recall') {
      $('.lightbox').removeClass('hide3');
      $('.mainpage').addClass('hide');
      $('.end').addClass('hide');
    } 

});



$('.sound').click(function(){
  $('audio')[0].pause();
});
