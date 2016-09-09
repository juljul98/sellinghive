$(document).ready(function() {
	loadAllMessages();
	function loadAllMessages() {
		var userid = id;
		$.ajax({
			type: 'GET',
			url: 'http://sellinghive.korinteraktiv.com/php/message/draft_message.php', 
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
						html += '<tr data-id='+newValue[0]+'>';
							html += '<td><input type="checkbox" name="checkMessage" value="'+newValue[0]+'"class="checkMessage"><td>';
							html += '<td class="photo"><img src="http://sellinghive.korinteraktiv.com/'+newValue[3]+'"></td>';
							html += '<td><strong>Draft</strong><br>'+newValue[2]+'</td>';
							html += '<td>'+newValue[1]+'</td>';
						html += '</tr>';
				})
				$("#draftMessage").html(html);
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

	$("#draftMessage").find(".continue_draft.html")
	$("#draftMessage").delegate("tr", "click", function() {
		var messageID = $(this).data("id");
		getDraftInfo();
		function getDraftInfo() {

			$.ajax({
				type: 'GET',
				url: 'http://sellinghive.korinteraktiv.com/php/message/draft_view.php', 
				// url: 'php/message/view_message.php',
				dataType: "jsonp",
				crossDomain:true, 
				data : {messageID: messageID},
				beforeSend: function(){ $(".overlay").show(); },
				success : function(response){
					$(".overlay").hide();
					var data = response.result;
					var html = "";

					$.each(data, function(key, value) {
						var newValue = value.split('#');
							// alert(newValue)
							$("#hiddenToId").val(newValue[0]);
							$(".draftEmail").val(newValue[1]);
							$(".draftSubject").val(newValue[2]);
							$(".draftBody").val(newValue[4]);
							$(".fileName").text(newValue[3]);
					})
					// $("#draftMessage").html(html);
				}
			});
		}

		var html = "";
		 		html += '<form class="message-form mt30" id="message-form">';
		 			html += '<input type="hidden" name="messageID" id="messageID">';
                    html += '<input type="hidden" name="fromId" id="fromId">';
                    html += '<div class="form-group mt15">';
                        html += '<span class="msg-label">To:</span>';
                        html += '<div class="input-group col-xs-12">';
                            html += '<input type="hidden" name="hiddenToId" id="hiddenToId" class="removeRecords" autocomplete="off">';
                            html += '<input type="text" class="form-control input01 removeRecords draftEmail" tabindex="1" name="msg-to" id="msg-to" list="auto_email">';
                            html += '<datalist id="auto_email"></datalist>';
                        html += '</div>';
                    html += '</div>';

                    html += '<div class="form-group mt15">';
                        html += '<span class="msg-label">Subject:</span>';
                        html += '<div class="input-group col-xs-12">';
                            html += '<input type="text" class="form-control input01 removeRecords draftSubject" name="msg-subject" id="msg-subject" tabindex="1" placeholder="">';
                        html += '</div>';
                    html += '</div>';

                    html += '<p class="body-label">Body:</p>';
                    html += '<textarea class="form-control input01 removeRecords draftBody" name="message-body" cols="70" rows="50" id="message-body"></textarea>';

                    html += '<div class="file-upload mt10">';
                        html += '<label for="file-input">';
                            html += '<i class="fa fa-paperclip" aria-hidden="true"></i>';
                        html += '</label>';
                        html += '<input id="file-input" type="file" class="removeRecords" name="file" /> <span class="fileName"></span>';
                    html += '</div>';
                    html += '<small class="fileNotes"><strong>NOTE:</strong> <i>jpg, png, pdf, docx, excel and txt</i> those format are only accepted.</small>';
                    html += '<div class="button-wrap tCenter mt20">';
                        html += '<button type="submit" class="btnSaveMessage" name="send">Send</button>';
                    html += '</div>';
                html += '</form>';
		$(".content").html(html);
	});

	$("#message-form").submit(function(e) {
		$.ajax({
			url: 'http://sellinghive.korinteraktiv.com/php/message/send_draft_message.php',  	
			// url: 'php/message/send_message.php',  	
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

				}else if(data.success == 5) { // error message 'to' is empty
					$(".modelText").text('Error! the email address you entered doesn\'t exist');
					$("#myModal").modal('show');

				}

				$("#message-form").find('.removeRecords').val('');
				$(".fileName").text('');
			}
		});

		return false;
	});
});

