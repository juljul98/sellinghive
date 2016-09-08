$(document).ready(function() {
	// function preloader() {
	// 	$.ajax({
	// 	     type: "GET",
	// 	     url: url,
	// 	     crossDomain: false,
	// 	     cache: true,
	// 	     beforeSend: function(){ $(".overlay").show(); },
	// 	     success: function(data) {

	// 	       data = jQuery.parseJSON(data);
	// 	       $(".page-title").html(data.title);
	// 	       $(".content").html(data.content);
	// 	       $(".overlay").delay(2000).fadeOut();
	// 	    }
	// 	});
	// }
	// $('#fromId').val(id);
	autoCompleteEmail();
	// codes to auto complete input for email address
	function autoCompleteEmail() {
		$.ajax({
			type: 'GET',
			// url: 'http://sellinghive.korinteraktiv.com/php/message/auto_complete.php', 
			url: 'php/message/auto_complete.php',

			// dataType: "jsonp",
			// crossDomain:true, 
			// data : {},
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
			//url: 'http://sellinghive.korinteraktiv.com/php/message/message_to_id.php', 
			url: 'php/message/message_to_id.php',

			// dataType: "jsonp",
			// crossDomain:true, 
			data : {'to':toID},
			success : function(data){
				var data = data.result;

				$("#hiddenToId").val(data.id);
			}
		});
	});

	$('#file-input').change(function() {
		var filename = $('#file-input').val().split('\\'),
			fileToDisplay = filename[filename.length - 1];
			$(".fileName").text(fileToDisplay);
	});

	$("#message-form").submit(function(e) {
		$.ajax({
			// url: 'http://sellinghive.korinteraktiv.com/php/message/send_message.php',  	
			url: 'php/message/send_message.php',  	
			// Url to which the request is send
			type: "POST",             		// Type of request to be send, called as method
			// data: {formData: new FormData(this), opt: processOpt} , 		
			data: new FormData(this) , 		
			contentType: false,       		// The content type used when sending data to the server.
			cache: false,             		// To unable request pages to be cached
			processData:false,        		// To send DOMDocument or non processed data file it is set to false
			beforeSend: function(){ $(".overlay").show(); },
			success: function(data) {
				$(".overlay").hide();
				if(data.success == 1) { // message sent
					$("#myModal").modal('show');
				}else if(data.success == 2) { // message save to draft
					$(".modelText").text('Message Save to draft');
					$("#myModal").modal('show');

				}else if(data.success == 3) { // error message invalid file type
					$(".modelText").text('Opps! Invalid file type');
					$("#myModal").modal('show');

				}else if(data.success == 4) { // error message file is too big 
					$(".modelText").text('The file that you are trying to upload is too large');
					$("#myModal").modal('show');

				}
				// if(data.success == 1) {
				// 	$('#main-nav').append("<div class='error'>Success</div>");
				// 	$('.error').delay(3000).fadeOut(400);
				// }else {
				// 	$('#main-nav').append("<div class='error'>Error</div>");
				// 	$('.error').delay(3000).fadeOut(400);
				// }
				// $("#message").html(data);
				
			}
		});

		return false;
	});
});