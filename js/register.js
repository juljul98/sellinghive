$(document).ready(function(){
	
	$('#register').submit(function(e) {
		e.preventDefault();
		var	name = $('#username').val(),
		    email = $('#email').val(),
		    password = $('#password').val();
		$.ajax({
			type: 'POST',
			url: 'http://sellinghive.korinteraktiv.com/php/register.php', //
			dataType: "json",
			crossDomain:true, 
			data : {name: name, email: email, password: password},
			success : function(response){
				$('p.username, p.password, p.email').text('');
				$('p.username').text(response.username);
				$('p.password').text(response.password);
				$('p.email').text(response.email);
				$('p.success').text(response.success);
			}
		});
	});
})