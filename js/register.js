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
			beforeSend: function(){ $(".overlay").show(); },
			success : function(response){
				$(".overlay").hide();
				if(response.success == 1) {
				    $('body').load('index.html');
				} else {
					$("#myModal").modal('show');
					$(".modelText").html(response.username + '<br>' + response.password + '<br>' +response.email);
				}
			}
		});
	});
})