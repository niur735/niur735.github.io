$('.circle').hover(
  function() {
    var img = $(this).data('img');
    var result;

    if (img == 'arrow1') {
        result = '<img class="arrow1" src="assets/img/arrow1.png">';
    } else if (img == 'arrow2') {
        result = '<img class="arrow2" src="assets/img/arrow2.png">';
    } else if (img == 'arrow3') {
        result = '<img class="arrow3" src="assets/img/arrow3.png">';
    } else if (img == 'arrow4'){
        result = '<img class="arrow4" src="assets/img/arrow4.png">';
    }
    else{
        result='<img class="arrow5" src="assets/img/arrow5.png">'
    }

    $('.displaybox').html(result);

  }, function() {
    result = '<div class="blackcircle">';
    $('.displaybox').html(result);
  }
);