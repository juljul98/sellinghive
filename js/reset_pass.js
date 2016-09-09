$(document).ready(function(){


	$('#reset-pass').submit(function(e){
		e.preventDefault();
		var session = readCookie('UserEmail'),
		    textBlk = session.split('/'),
		    email = textBlk[0],
		    oldpass = $('#oldpass').val(),
		    confirm_oldpass = $('#confirm-oldpass').val(),
		    newpass = $('#newpass').val();
		    $.ajax({
		    	type: 'POST',
		    	url: 'http://sellinghive.korinteraktiv.com/php/settings/reset_pass/reset_pass.php',
		    	dataType: 'json',
		    	crossDomain: true,
		    	data: {email : email, oldpass : oldpass, confirm_oldpass: confirm_oldpass, newpass: newpass},
		    	beforeSend: function(){ $(".overlay").show(); },
		    	success: function(response){
		    		$(".overlay").hide();
					if(response.success == 1) {
						$("#myModal").modal('show');
						$(".modelText").text('Successfully Changed!');
					} else {
						$("#myModal").modal('show');
						$(".modelText").html(response.notfound + '<br>' + response.required);
					}
		    	}
		    });
	});
});