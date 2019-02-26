$(function(){
	
	$('#inputbutton').click(function()
	{
		 if ($('#inputline').val())
		{
		   var productName = $('#inputline').val();
				
		const PRODUCT_TEMPLATE = $('#product_template');
		const PRODUCT_LEFT = $('#product_a_left');
		var $clone1 = PRODUCT_TEMPLATE.clone();
		var $clone2 = PRODUCT_LEFT.clone();
		
		$clone2.show();
		$clone1.find('.product').text(productName);
		$clone2.find('.p_item').text(productName);

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
	
	$('.goods').click(function()
	{
		
		
		$('.bottons').find('.product-amount').text($('.bottons').find('.product-amount').text()++);
	});
	
});
