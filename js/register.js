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
				if(response.success == 1) {
					$('#main-nav').append("<div class='error'>Successfully saved</div>");
					$('.error').delay(3000).fadeOut(400);
					$('body').load('login.html');
				} else {
					$('#main-nav').append("<div class='error'>Error occured</div>");
					$('.error').delay(3000).fadeOut(400);
				}

			}
		});
	});
})