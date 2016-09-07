$(document).ready(function() {
	// Signin
	$('#sigin').submit(function(e) {
		e.preventDefault();
		var email = $('#email').val(),
		    password = $('#password').val();
		$.ajax({
			type: "POST",
			url: "http://sellinghive.korinteraktiv.com/php/login.php", //
			dataType: "json",
			crossDomain: true,
			data : {email: email, password: password},
			success : function(response){
				if (response.role == 'Corporate' && response.status == 'Success') {
					writeCookie('UserEmail', email+'/'+response.role+'/'+response.key, 3);
					$('body').load('dashboard_corporate.html');
				} else if (response.role == 'Sales' && response.status == 'Success') {
					writeCookie('UserEmail', email+'/'+response.role+'/'+response.key, 3);
					$('body').load('dashboard_sales.html');
				} else if (response.status == 'Error') {
					$('#main-nav').append("<div class='error'>Login error</div>");
					$('.error').delay(3000).fadeOut(400);
				}
			}
		});
	});
});