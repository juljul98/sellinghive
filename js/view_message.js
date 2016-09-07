$(document).ready(function() {
	loadAllMessages();
	function loadAllMessages() {
		var userid = id;
		$.ajax({
			type: 'GET',
			url: 'php/message/view_message.php', 
			// url: 'php/view_message.php',
			dataType: "jsonp",
			crossDomain:true, 
			data : {userid: userid},
			success : function(response){
				var data = response.result;
				console.log(data)
				var html = "";
				$.each(data, function(key, value) {
					var newValue = value.split('#');
					html += '<tr>';
						html += '<td><input type="checkbox" name="checkMessage" value="'+newValue[0]+'"class="checkMessage"><td>';
						html += '<td>'+newValue[1]+'</td>';
						html += '<td>'+newValue[2]+'</td>';
					html += '</tr>';
				})
				$("#inboxMessage").html(html);
			}
		});
	}

	$(".btnDeleteMsg").click(function() {
		var checkValues = $('input[name=checkMessage]:checked').map(function() {
		    return $(this).val();
		}).get();

		$.ajax({
			type: 'POST',
			url: 'php/message/delete_message.php', 
			// url: 'php/delete_message.php',
			dataType: "json",
			crossDomain:true, 
			data : {'checkID':checkValues},
			success : function(data){
				if(data.success == 1) {
					loadAllMessages();
					// lagay mo sa success: response
					$('#main-nav').prepend("<div class='error'>Message(s) deleted</div>");
					$('.error').delay(3000).fadeOut(400); //fade out after 3 seconds
				}
 			}
		});
	});
});