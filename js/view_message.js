$(document).ready(function() {
	loadAllMessages();
	function loadAllMessages() {
		var userid = id;
		$.ajax({
			type: 'GET',
			url: 'http://sellinghive.korinteraktiv.com/php/message/view_message.php', 
			// url: 'php/message/view_message.php',
			dataType: "jsonp",
			crossDomain:true, 
			data : {userid: userid},
			beforeSend: function(){ $(".overlay").show(); },
			success : function(response){
				$(".overlay").hide();
				var data = response.result;
				var noOfRecord = data.length;
				if(noOfRecord < 1) {
					$(".btnDeleteMsg").hide();
				}else {
					$(".btnDeleteMsg").show();
				};

				var html = "";
				$.each(data, function(key, value) {
					var newValue = value.split('#');
					html += '<tr>';

						html += '<td><input type="checkbox" name="checkMessage" value="'+newValue[0]+'"class="checkMessage"><td>';
						html += '<td class="photo"><img src="http://sellinghive.korinteraktiv.com/'+newValue[3]+'"></td>';
						html += '<td><strong>'+newValue[2]+'</strong><br>'+newValue[4]+'</td>';
						html += '<td>'+newValue[1]+'</td>';

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
			url: 'http://sellinghive.korinteraktiv.com/php/message/delete_message.php', 
			// url: 'php/delete_message.php',
			dataType: "json",
			crossDomain:true,
			beforeSend: function(){ $(".overlay").show(); },
			data : {'checkID':checkValues},
			success : function(data){
				$(".overlay").hide();
				if(data.success == 1) {
					loadAllMessages();

				}
 			}
		});
	});
});