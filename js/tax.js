$(document).ready(function(){

	var userid = id;
	$.ajax({
		type: 'post',
		url: 'php/settings/tax/corporate_tax_get.php',
		dataType: 'json',
		crossDomain: true,
		data: {userid: userid},
		success: function(response) {
			$('#ein').val(response.ein);
			$('#address').val(response.address);
			$('#entity').val(response.entity);
		}
	});

	$('#btn-edit').click(function(e){
		e.preventDefault();
		$("#myModal").modal('show');
		$("#btn-close").hide();
	});
	$('#btn-close').click(function(e){
		e.preventDefault();
		$('.modal-backdrop').remove();
	})
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
			crossDomain: true,
			data: {userid: userid, ein: ein, address: address, entity: entity},
			beforeSend: function(){ $(".overlay").show(); },
			success: function(response) {
				$(".overlay").hide();
				$("#myModal").modal('show');
				$("#btn-close").show();
				$('.modalTitle').text('Success');
				$("#myModal #tax_form, #btn-save").hide();
				$(".modelText").html('Successfully Saved!');
			}
		});
	});

});