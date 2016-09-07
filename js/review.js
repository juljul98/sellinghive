$(document).ready(function(){


	$('#toid').val(readCookie('permaid'));
	$('.ratings').delegate("a", "click",function(){
		 alert($(this).data('key'));
		 writeCookie('permaid', $(this).data('key'));
		 $('body').load('sales_person_review_individual.html');

	});






	var userid = id;
	$.ajax({
		type: 'post',
		url: 'php/settings/review/review_get.php',
		dataType: 'json',
		crossDomain: true,
		data: {},
		success: function(response){
			var html = '';
			html += '<a href="#" data-key="'+ response.id +'">';
			html += '<li><p class="person"><span class="name">' + response.email + '</span>';
			html += '<span class="rating">';
			html += '<img src="images/rating.png" alt="">';
            html += '<img src="images/rating.png" alt="">';
            html += '</span>';
            html += '</p>';
            html += '</li>';
            html += '</a>';
            $('ol.ratings').append(html);
		}
	});
	$("#review-save").click(function(){
		var userid = id,
			toid = $('#toid').val(),
			reviewrating = $('#reviewrating').val(),
			reviewtext = $('#reviewtext').val();
		$.ajax({
			type: 'post',
			url: 'http://sellinghive.korinteraktiv.com/php/settings/review/review_update.php',
			dataType: 'json',
			crossDomain: true,
			data: {
				userid :userid,
				toid :toid,
				reviewrating :reviewrating,
				reviewtext :reviewtext
			},
			success: function(){
					$('#main-nav').append("<div class='error'>Sucessfully saved</div>");
					$('.error').delay(3000).fadeOut(400);
			}

		});
	});
});