$('.button').hover(
  function() {
    var button = $(this).data('button');
    var result;

    if (button == 'birth') {
        result = '<div class="birthtext"><div class="title">Birth.</div>A little while, and my longing shall gather dust and foam for another body.<p>A little while, a moment of rest upon the wind, and another woman shall bear me.</p><p>Farewell to you and the youth I have spent with you.</p><p>It was but yesterday we met in a dream.</p></div>';
    } else if (button == 'marriage') {
        result = '<div class="marriagetext"><div class="title">Marriage.</div>You were born together, and together you shall be forevermore.<p>You shall be together when the white wings of death scatter your days.</p><p>Ay, you shall be together even in the silent memory of God.</p></div>';
    } else if (button == 'work') {
        result = '<div class="worktext"><div class="title">Work.</div>You work that you may keep pace with the earth and the soul of the earth.<p>For to be idle is to become a stranger unto the seasons,</p><p>and to step out of life&rsquo;s procession,</p><p>that marches in majesty and proud submission towards the infinite.</p></div>';
    } else {
        result = '<div class="doomtext"><div class="title">Doom.</div>For life and death are one, even as the<p>river and the sea are one.</p><p>In the depth of your hopes and desires</p><p>lies your silent knowledge of the beyon</p></div>';
    }

    $('.display-text').html(result);

  }, function() {
    result = 'Time is a circle.<br>We start from a moment and call it as beginning.<br>We die alone and think it is the end.<br>But it&rsquo;s not.<br>Time is a circle. No matter what shape it looks like.<br>It’s running and not stopping. We are just a part of its path.<br>One day,<br>everything will go back to the beginning.';
    $('.display-text').html(result);
  }
);