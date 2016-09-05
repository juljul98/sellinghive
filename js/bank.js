$(document).ready(function(){

	var userid = id;
	$.ajax({
		type: 'post',
		url: 'php/settings/bank/bank_get.php',
		dataType: 'json',
		data: {userid: userid},
		success: function(response) {
			$('#bankname').val(response.bankname);
			$('#routingnumber').val(response.routingnumber);
			$('#accountnumber').val(response.accountnumber);
			$('#paypalusername').val(response.paypalusername);
			$('#paypalpassword').val(response.paypalpassword);
		}
	});

	$('#bank-save').click(function(e){
		e.preventDefault();
		var userid = id,
			bankname = $('#bankname').val(),
			routingnumber = $('#routingnumber').val(),
			accountnumber = $('#accountnumber').val(),
			paypalusername = $('#paypalusername').val(),
			paypalpassword = $('#paypalpassword').val();
		$.ajax({
			type: 'post',
			url: 'php/settings/bank/bank_save.php',
			dataType: 'json',
			data: {
				userid: userid, 
				bankname: bankname,
				routingnumber : routingnumber,
				accountnumber : accountnumber,
				paypalusername : paypalusername,
				paypalpassword : paypalpassword
			},
			success: function(response) {
				alert(response.success);
			}
		})
	});
});