$(document).ready(function() {

		    $('#fromId').val(id);
	autoCompleteEmail();
	// codes to auto complete input for email address
	function autoCompleteEmail() {
		$.ajax({
			type: 'GET',
			url: 'http://sellinghive.korinteraktiv.com/php/message/auto_complete.php', 
			// url: 'php/autocomplete.php',

			dataType: "jsonp",
			crossDomain:true, 
			data : {},
			success : function(data){
				var data = data.result;
				var html = "";
				$.each(data, function(key, value) {
					var newValue = value.split('#');
					html += "<option value="+newValue[0]+">";
				})
				
				$("#auto_email").html(html);
			}
		});
	}
	// codes to get the id of reciever (to)
	$("#msg-to").change(function() {
		var toID = $(this).val();
		
		$.ajax({
			type: 'GET',
			url: 'http://sellinghive.korinteraktiv.com/php/message/message_to_id.php', 
			//url: 'php/message_to_id.php',

			dataType: "jsonp",
			crossDomain:true, 
			data : {'to':toID},
			success : function(data){
				var data = data.result;

				$("#hiddenToId").val(data.id);
			}
		});
	});

	$("#message-form").submit(function(e) {
		$.ajax({

			url: 'http://sellinghive.korinteraktiv.com/php/message/send_message.php',  	// Url to which the request is send
			type: "POST",             		// Type of request to be send, called as method
			data: new FormData(this), 		// Data sent to server, a set of key/value pairs (i.e. form fields and values)
			contentType: false,       		// The content type used when sending data to the server.
			cache: false,             		// To unable request pages to be cached
			processData:false,        		// To send DOMDocument or non processed data file it is set to false
			success: function(response) {
				alert(response);
				if(data.success == 1) {
					$('#main-nav').append("<div class='error'>Success</div>");
					$('.error').delay(3000).fadeOut(400);
				}else {
					$('#main-nav').append("<div class='error'>Error</div>");
					$('.error').delay(3000).fadeOut(400);
				}
				// $("#message").html(data);
				
			}
		});

		return false;
	});
});