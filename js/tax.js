$(document).ready(function(){

	var userid = id;
	$.ajax({
		type: 'post',
		url: 'php/settings/tax/corporate_tax_get.php',
		dataType: 'json',
		data: {userid: userid},
		success: function(response) {
			$('#ein').val(response.ein);
			$('#address').val(response.address);
			$('#entity').val(response.entity);
		}
	});

	$('#btn-edit').click(function(){

	});
	$('#btn-save').click(function(e){
		e.preventDefault();
		var userid = id,
			ein = $('#ein').val(),
			address = $('#address').val(),
			entity = $('#entity').val();
		$.ajax({
			type: 'post',
			url: 'php/settings/tax/corporate_tax_update.php',
			dataType: 'json',
			data: {userid: userid, ein: ein, address: address, entity: entity},
			success: function(response) {
				alert(response.success);
			}
		});
	});

});