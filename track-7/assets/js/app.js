var time = 24;
console.log(time);

$('.time').html(time);

$('.item').click(function() {
	var item   = $(this).data('item');
	var amount = $(this).data('amount');

    charge_card(amount, item);
});


function charge_card(amount, item) {
   if (time >= amount) {
   time = time - amount;
   console.log(time);
   update_wallet();
   $('.closet-items').append(item + ', ');
   } else{
   	alter('not enough time.');
   }
}

function update_wallet(){
	$('.time').html(time);
}



