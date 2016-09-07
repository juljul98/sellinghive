$(document).ready(function() {
	// Signin
	$('#sigin').submit(function(e) {
		e.preventDefault();
		var email = $('#email').val(),
		    password = $('#password').val();
		$.ajax({
			type: "POST",
			url: "php/login.php", //
			dataType: "json",
			crossDomain: true,
			data : {email: email, password: password},
			beforeSend: function(){ $(".overlay").show(); },
			success : function(response){
				$(".overlay").hide();
				if (response.role == 'Corporate' && response.status == 'Success') {
					writeCookie('UserEmail', email+'/'+response.role+'/'+response.key, 3);
					$('body').load('dashboard_corporate.html');
				} else if (response.role == 'Sales' && response.status == 'Success') {
					writeCookie('UserEmail', email+'/'+response.role+'/'+response.key, 3);
					$('body').load('dashboard_sales.html');
				} else if (response.status == 'Error') {
					$("#myModal").modal('show');
					$(".modelText").text('Invalid Username or Password');
				}
			}
		});
	});
});