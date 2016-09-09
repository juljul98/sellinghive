$(document).ready(function(){
	function load_ready() {
		var session = readCookie('UserEmail'),
	textBlk = session.split('/'),
	id = textBlk[2];
	$('#id').val(id);
	$.ajax({
		type: 'post',
		url: 'http://sellinghive.korinteraktiv.com/php/settings/profile/public_profile_get.php',
		dataType: 'json',
		crossDomain: true,
		data: {
			id: id,
		},
		beforeSend: function(){ $(".overlay").show(); },
		success: function(response){
			$(".overlay").hide();
			if(response.logo != '') {
				$('.displayLogo').attr('src', response.logo);
			}
			if(response.photo != '') {
				$('.displayPic').attr('src', response.photo);
			}
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
	}
	load_ready();

	$('.btn-logo').click(function(){
		$('#logo').click();
	});
	$('.btn-pic').click(function(){
		$('#pic').click();
	});

	$('#public_profile').ajaxForm({
        beforeSend:function(){
             $(".overlay").show();
        },
        uploadProgress:function(event,position,total,percentComplete){

        },
        success:function(response){
        },
        complete:function(response){
			$(".overlay").hide();
            $("#myModal").modal('show');
			$(".modelText").html('Successfully Saved!');
			load_ready();
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