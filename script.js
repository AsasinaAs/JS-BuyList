$(function(){
	
	$('#inputbutton').click(function()
	{
		 if ($('#inputline').val())
		{
		var productName = $('#inputline').val();
		var productNumber = 1;
				
		const PRODUCT_TEMPLATE = $('#product_template');
		const PRODUCT_LEFT = $('#product_a_left');
		var $clone1 = PRODUCT_TEMPLATE.clone();
		var $clone2 = PRODUCT_LEFT.clone();
		
		$clone2.show();
		$clone1.find('.product').text(productName);
		$clone2.find('.p_item').text(productName);
		$clone2.find('.product-amount-left').text(productNumber);
		$clone1.find('.product-amount').text(productNumber);

		$clone1.find('.product').click(function()
		{
			$clone1.find('.product').html('<input type="textfield" id="name_of_product"></input>');
			$("#name_of_product").val(productName);
			$('#name_of_product').focus();
			$('#name_of_product').focusout(function()
			{
				var name = $('#name_of_product').val();
				$clone1.find('.product').text(name);
			});
		});
		
		$clone1.find('.add').click(function()
		{
			if(productNumber==1)
			{
				$clone1.find('.delete').prop('disabled', false);
				$clone1.find('.delete').css('opacity','1');
			}
			productNumber++;
			$clone2.find('.product-amount-left').text(productNumber);
			$clone1.find('.product-amount').text(productNumber);
		})
		
		var disable_butt = function()
		{
			$clone1.find('.delete').prop('disabled', true);
			$clone1.find('.delete').css('opacity','0.6');
		}
		
		disable_butt();
		
		$clone1.find('.delete').click(function()
		{
			if(productNumber>1)
			{
				if(productNumber==2)
				{
				disable_butt();
				}
				productNumber--;
				$clone2.find('.product-amount-left').text(productNumber);
			    $clone1.find('.product-amount').text(productNumber);
			}
		});
		
		$clone1.find('.cancel').click(function()
		{
			$clone1.slideUp("400");
			$clone2.hide();
		});
		
		var $bought_good = $clone1;
		var $bought_clone = $clone2;
		var number_of_pushing = true;
		
		$clone1.find('.bought').click(function()
		{
			if (number_of_pushing)
			{
			    $('#products-bought').css('padding','15px');
			    $bought_clone.find('.p_item').css('text-decoration','line-through');
			    $bought_clone.find('.product-amount-left').css('text-decoration','line-through');
			    $('#products-bought').append($clone2);
		
			    $bought_good.find('.product').css('text-decoration','line-through');
			    $bought_good.find('.add').css('opacity','0');
			    $bought_good.find('.delete').css('opacity','0');
			    $bought_good.find('.cancel').hide();
			    $bought_good.find('.bought').css('margin-left','15px');
			    $bought_good.find('.bought').text('Не куплено');
				number_of_pushing = false;
			}
			else
			{
			    $('#products-bought').css('padding','15px');
			    $bought_clone.find('.p_item').css('text-decoration','none');
			    $bought_clone.find('.product-amount-left').css('text-decoration','none');
			    $('#all_products_left').append($clone2);
		
			    $bought_good.find('.product').css('text-decoration','none');
			    $bought_good.find('.add').css('opacity','1');
				$bought_good.find('.delete').css('opacity','1');
			    $bought_good.find('.cancel').show();
			    $bought_good.find('.bought').css('margin-left','0px');
			    $bought_good.find('.bought').text('Куплено');
				number_of_pushing = true;
			}
		});
		
		
    	$('#product_items').append($clone1);
		$clone1.slideDown("slow");
		$('#all_products_left').append($clone2);
		$('#inputline').val("");
		$('#inputline').focus();
	   }
	});
	
	$('#inputline').keyup(function()
	{
    if(event.keyCode==13)
       {
          $('#inputbutton').click();
       }
    });
		
	var amount = 3;
	$cucumber = $('#cucumber');
	$cucumber_amount = $('#cucumbers_amount');
	$cucumber.show();
	$cucumber_amount.show();
	
	var amount_of_milk = 3;
	$milk = $('#milk');
	$milk_amount = $('#milk_amount');
	$milk.show();
	$milk_amount.show();
	
	var amount_of_sweets = 3;
	$sweets = $('#sweets');
	$sweets_amount = $('#sweets_amount');
	$sweets.show();
	$sweets_amount.show();
	
	$cucumber.find('.add').click(function()
	{
			if(amount==1)
			{
				$cucumber.find('.delete').prop('disabled', false);
				$cucumber.find('.delete').css('opacity','1');
			}
			amount++;
			$cucumber_amount.find('.product-amount-left').text(amount);
			$cucumber.find('.product-amount').text(amount);
	})
	
	$cucumber.find('.product').click(function()
		{
			$cucumber.find('.product').html('<input type="textfield" id="name_of_product_c"></input>');
			$("#name_of_product_c").val('Огірок');
			$('#name_of_product_c').focus();
			$('#name_of_product_c').focusout(function()
			{
				var name = $('#name_of_product_c').val();
				$cucumber.find('.product').text(name);
			});
		});
	
		
		var disable_butt_c = function()
		{
			$cucumber.find('.delete').prop('disabled', true);
			$cucumber.find('.delete').css('opacity','0.6');
		}
		
		$cucumber.find('.delete').click(function()
		{
			if(amount>1)
			{
				if(amount==2)
				{
				disable_butt_c();
				}
				amount--;
				$cucumber_amount.find('.product-amount-left').text(amount);
			$cucumber.find('.product-amount').text(amount);
			}
		});
		
		$cucumber.find('.cancel').click(function()
		{
			$cucumber.slideUp("400");
			$cucumber_amount.hide();
		});
		var $bought_good_c = $cucumber;
		var $bought_clone_c = $cucumber_amount;
		var number_of_pushing_c = true;
		
		$cucumber.find('.bought').click(function()
		{
			if (number_of_pushing_c)
			{
			    $('#products-bought').css('padding','15px');
			    $bought_clone_c.find('.p_item').css('text-decoration','line-through');
			    $bought_clone_c.find('.product-amount-left').css('text-decoration','line-through');
			    $('#products-bought').append($cucumber_amount);
		
			    $bought_good_c.find('.product').css('text-decoration','line-through');
			    $bought_good_c.find('.add').css('opacity','0');
			    $bought_good_c.find('.delete').css('opacity','0');
			    $bought_good_c.find('.cancel').hide();
			    $bought_good_c.find('.bought').css('margin-left','15px');
			    $bought_good_c.find('.bought').text('Не куплено');
				number_of_pushing_c = false;
			}
			else
			{
			    $('#products-bought').css('padding','15px');
			    $bought_clone_c.find('.p_item').css('text-decoration','none');
			    $bought_clone_c.find('.product-amount-left').css('text-decoration','none');
			    $('#all_products_left').append($cucumber_amount);
		
			    $bought_good_c.find('.product').css('text-decoration','none');
			    $bought_good_c.find('.add').css('opacity','1');
				$bought_good_c.find('.delete').css('opacity','1');
			    $bought_good_c.find('.cancel').show();
			    $bought_good_c.find('.bought').css('margin-left','0px');
			    $bought_good_c.find('.bought').text('Куплено');
				number_of_pushing_c = true;
			}
		});
	
	$milk.find('.add').click(function()
	{
			if(amount_of_milk==1)
			{
				$milk.find('.delete').prop('disabled', false);
				$milk.find('.delete').css('opacity','1');
			}
			amount_of_milk++;
			$milk_amount.find('.product-amount-left').text(amount_of_milk);
			$milk.find('.product-amount').text(amount_of_milk);
	})
		
		$milk.find('.product').click(function()
		{
			$milk.find('.product').html('<input type="textfield" id="name_of_product_m"></input>');
			$("#name_of_product_m").val('Молоко');
			$('#name_of_product_m').focus();
			$('#name_of_product_m').focusout(function()
			{
				var name = $('#name_of_product_m').val();
				$milk.find('.product').text(name);
			});
		});
		
		var disable_butt_m = function()
		{
			$milk.find('.delete').prop('disabled', true);
			$milk.find('.delete').css('opacity','0.6');
		}
		
		$milk.find('.delete').click(function()
		{
			if(amount_of_milk>1)
			{
				if(amount_of_milk==2)
				{
				disable_butt_m();
				}
				amount_of_milk--;
				$milk_amount.find('.product-amount-left').text(amount_of_milk);
			    $milk.find('.product-amount').text(amount_of_milk);
			}
		});
		
		$milk.find('.cancel').click(function()
		{
			$milk.slideUp("400");
			$milk_amount.hide();
		});
		
		var $bought_good_m = $milk;
		var $bought_clone_m = $milk_amount;
		var number_of_pushing_m = true;
		
		$milk.find('.bought').click(function()
		{
			if (number_of_pushing_m)
			{
			    $('#products-bought').css('padding','15px');
			    $bought_clone_m.find('.p_item').css('text-decoration','line-through');
			    $bought_clone_m.find('.product-amount-left').css('text-decoration','line-through');
			    $('#products-bought').append($milk_amount);
		
			    $bought_good_m.find('.product').css('text-decoration','line-through');
			    $bought_good_m.find('.add').css('opacity','0');
			    $bought_good_m.find('.delete').css('opacity','0');
			    $bought_good_m.find('.cancel').hide();
			    $bought_good_m.find('.bought').css('margin-left','15px');
			    $bought_good_m.find('.bought').text('Не куплено');
				number_of_pushing_m = false;
			}
			else
			{
			    $('#products-bought').css('padding','15px');
			    $bought_clone_m.find('.p_item').css('text-decoration','none');
			    $bought_clone_m.find('.product-amount-left').css('text-decoration','none');
			    $('#all_products_left').append($milk_amount);
		
			    $bought_good_m.find('.product').css('text-decoration','none');
			    $bought_good_m.find('.add').css('opacity','1');
				$bought_good_m.find('.delete').css('opacity','1');
			    $bought_good_m.find('.cancel').show();
			    $bought_good_m.find('.bought').css('margin-left','0px');
			    $bought_good_m.find('.bought').text('Куплено');
				number_of_pushing_m = true;
			}
		});
	
	$sweets.find('.add').click(function()
	{
			if(amount_of_sweets==1)
			{
				$sweets.find('.delete').prop('disabled', false);
				$sweets.find('.delete').css('opacity','1');
			}
			amount_of_sweets++;
			$sweets_amount.find('.product-amount-left').text(amount_of_sweets);
			$sweets.find('.product-amount').text(amount_of_sweets);
	})
	
		$sweets.find('.product').click(function()
		{
			$sweets.find('.product').html('<input type="textfield" id="name_of_product_s"></input>');
			$("#name_of_product_s").val('Цукерки');
			$('#name_of_product_s').focus();
			$('#name_of_product_s').focusout(function()
			{
				var name = $('#name_of_product_s').val();
				$sweets.find('.product').text(name);
			});
		});
	
		
		var disable_butt_s = function()
		{
			$sweets.find('.delete').prop('disabled', true);
			$sweets.find('.delete').css('opacity','0.6');
		}
		
		$sweets.find('.delete').click(function()
		{
			if(amount_of_sweets>1)
			{
				if(amount_of_sweets==2)
				{
				disable_butt_s();
				}
				amount_of_sweets--;
				$sweets_amount.find('.product-amount-left').text(amount_of_sweets);
			$sweets.find('.product-amount').text(amount_of_sweets);
			}
		});
		
		$sweets.find('.cancel').click(function()
		{
			$sweets.slideUp("400");
			$sweets_amount.hide();
		});
		var $bought_good_s = $sweets;
		var $bought_clone_s = $sweets_amount;
		var number_of_pushing_s = true;
		
		$sweets.find('.bought').click(function()
		{
			if (number_of_pushing_s)
			{
			    $('#products-bought').css('padding','15px');
			    $bought_clone_s.find('.p_item').css('text-decoration','line-through');
			    $bought_clone_s.find('.product-amount-left').css('text-decoration','line-through');
			    $('#products-bought').append($sweets_amount);
		
			    $bought_good_s.find('.product').css('text-decoration','line-through');
			    $bought_good_s.find('.add').css('opacity','0');
			    $bought_good_s.find('.delete').css('opacity','0');
			    $bought_good_s.find('.cancel').hide();
			    $bought_good_s.find('.bought').css('margin-left','15px');
			    $bought_good_s.find('.bought').text('Не куплено');
				number_of_pushing_s = false;
			}
			else
			{
			    $('#products-bought').css('padding','15px');
			    $bought_clone_s.find('.p_item').css('text-decoration','none');
			    $bought_clone_s.find('.product-amount-left').css('text-decoration','none');
			    $('#all_products_left').append($sweets_amount);
		
			    $bought_good_s.find('.product').css('text-decoration','none');
			    $bought_good_s.find('.add').css('opacity','1');
				$bought_good_s.find('.delete').css('opacity','1');
			    $bought_good_s.find('.cancel').show();
			    $bought_good_s.find('.bought').css('margin-left','0px');
			    $bought_good_s.find('.bought').text('Куплено');
				number_of_pushing_s = true;
			}
		});
});