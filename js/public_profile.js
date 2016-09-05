$(document).ready(function(){
	var session = readCookie('UserEmail'),
	textBlk = session.split('/'),
	id = textBlk[2];
	$('#id').val(id);
	$.ajax({
		type: 'post',
		url: 'php/settings/profile/public_profile_get.php',
		dataType: 'json',
		crossDomain: true,
		data: {
			id: id,
		},
		success: function(response){
			$('#oldlogo').val(response.logo);
			$('#oldpic').val(response.photo);
			$('#id').val(response.userid);
			$('#corporate-name').val(response.companyname);
			$('#url').val(response.url);
			$('#primary-contact').val(response.primarycontact);
			$('#phone-number').val(response.phonenumber);
			$('#aboutArea').val(response.about);
			var rating = '';
			for(x=1; x<=response.reviewcount; x++) {
				rating += '<img src="images/rating.png" alt="">';
			}
			$('span.rating').html(rating);
			if (response.reviewcount > 0) {
				$('span.count').text('('+response.reviewcount+')');
			} else {
				$('span.count').text('(0)');
			}
		}
	});

	$('.btn-logo').click(function(){
		$('#logo').click();
	});
	$('.btn-pic').click(function(){
		$('#pic').click();
	});

	$('#public_profile').ajaxForm({
        beforeSend:function(){
             //$(".progress").show();

        },
        uploadProgress:function(event,position,total,percentComplete){
            //$(".progress-bar").width(percentComplete+'%'); //dynamicaly change the progress bar width
            //$(".sr-only").html(percentComplete+'%'); // show the percentage number
        },
        success:function(response){
            //$(".progress").hide(); //hide progress bar on success of upload
            $('p.picmsg').text(response.extension + response.size);
             $('p.success').text(response.success);
        },
        complete:function(response){
             
        }
     });

	// $('#public_profile').submit(function(e){
	// 	e.preventDefault();
	// 	var url = $('#url').val(),
	// 		corporate_name = $('#corporate-name').val(),
	// 		primary_contact = $('#primary-contact').val(),
	// 		phone_number = $('#phone-number').val(),
	// 		about = $('#aboutArea').val(),
	// 		logo = $('#logo').val();
	// 	$.ajax({
	// 		type: 'post',
	// 		url: 'php/public_profile_update.php',
	// 		dataType: 'json',
	// 		crossDomain: true,
	// 		data: {
	// 			id: id,
	// 		    corporate_name: corporate_name,
	// 		    url: url,
	// 		    primary_contact: primary_contact,
	// 		    phone_number: phone_number,
	// 		    about: about,
	// 		    logo: logo
	// 		},
	// 		success: function(response){
	// 			$('p.success').text(response.success);
	// 		}
	// 	});
	// });

	
});