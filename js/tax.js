$(document).ready(function(){

	var userid = id;
	$.ajax({
		type: 'post',
		url: 'php/settings/tax/corporate_tax_get.php',
		dataType: 'json',
		crossDomain: true,
		data: {userid: userid},
		success: function(response) {
			$('.cnameblk').text(response.companyname);
			$('.einblk').text(response.ein);
			$('.addressblk').text(response.address);
			$('.entityblk').text(response.entity);
		}
	});
	$('#btn-edit').click(function(e){
		e.preventDefault();
		$("#myModal").modal('show');
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
			crossDomain: true,
			data: {userid: userid, ein: ein, address: address, entity: entity},
			success: function(response) {
				$("#myModal").modal('show');
				$('.einblk').text(ein);
				$('.addressblk').text(address);
				$('.entityblk').text(entity);
				$('.modalTitle').text('Success');
				$(".modelText").html('Successfully Saved!');
			}
		});
	});

});