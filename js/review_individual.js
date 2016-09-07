$(document).ready(function(){
	$('#toid').val(readCookie('permaid'));
	var userid = id,
	toid = $('#toid').val();
	$.ajax({
		type: 'post',
		url: 'php/settings/review/review_individual_get.php',
		dataType: 'json',
		crossDomain: true,
		data: {toid :toid, userid: userid},
		success: function(response){
			$('h2.person-name').text(response.single.email);
			var ratings = '';

			for(var x=1; x<=response.single.reviewrating; x++) {
				ratings += '<img src="images/rating.png" alt="">';
			}      
            $('ol.rating').append(ratings);
            $('.count').text('('+response.single.reviewrating+')');
            $('.reviewDisplay').text(response.single.reviewtext);
		}
	});
	$("#review-save").click(function(){
		var userid = id,
			toid = $('#toid').val(),
			reviewrating = $('#reviewrating').val(),
			reviewtext = $('#reviewtext').val();
		$.ajax({
			type: 'post',
			url: 'php/settings/review/review_update.php',
			dataType: 'json',
			crossDomain: true,
			data: {
				userid :userid,
				toid :toid,
				reviewrating :reviewrating,
				reviewtext :reviewtext
			},
			success: function(){
			var ratings = '';
			for(var x=1; x<=reviewrating; x++) {
				ratings += '<img src="images/rating.png" alt="">';
			}

            $('ol.rating').html(ratings);
            $('.count').text('('+reviewrating+')');
            $('.reviewDisplay').text(reviewtext);
			$('#main-nav').append("<div class='error'>Sucessfully saved</div>");
			$('.error').delay(3000).fadeOut(400);
			}

		});
	});
});