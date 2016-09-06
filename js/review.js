$(document).ready(function(){

		var userid = id;
		$.ajax({
			type: 'post',
			url: 'php/settings/review/review_get.php',
			dataType: 'json',
			data: {
				userid :userid,
			},
			success: function(){

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
			data: {
				userid :userid,
				toid :toid,
				reviewrating :reviewrating,
				reviewtext :reviewtext
			},
			success: function(){

			}

		});
	});
});