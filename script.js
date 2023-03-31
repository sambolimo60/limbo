$(document).ready(function() {
		  $('#cc-number').on('input', function() {
			let inputVal = $(this).val().replace(/\s+/g, ''); 
			let formattedVal = inputVal.match(/.{1,4}/g)?.join(' '); 
			$(this).val(formattedVal); 
		  });
		});
		