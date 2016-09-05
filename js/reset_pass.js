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
		    	url: 'http://sellinghive.korinteraktiv.com/php/reset_pass.php',
		    	dataType: 'json',
		    	crossDomain: true,
		    	data: {email : email, oldpass : oldpass, confirm_oldpass: confirm_oldpass, newpass: newpass},
		    	success: function(response){
		    		$('p.missmatch, p.fieldRequired, p.success').text('');
		    		$('p.missmatch').text(response.missmatch);
		    		$('p.missmatch').text(response.notfound);
		    		$('p.fieldRequired').text(response.required);
		    		$('p.success').text(response.success);
		    	}
		    });
	});



});