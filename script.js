$(function(){
	
	var 
	
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
		
});
