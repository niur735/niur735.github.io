var cash = 100000;

$('.cash').html(cash);

$('.item').click(function() {
	var item   = $(this).data('item');
	var amount = $(this).data('amount');

    charge_card(amount, item);
})


function charge_card(amount, item) {
   if (cash >= amount) {
   cash = cash - amount;
   update_wallet();
   $('.closet-items').append(item + ', ');
   } else{
   	alter('not enough money.');
   }
}

function update_wallet(){
	$('.cash').html(cash);
}

