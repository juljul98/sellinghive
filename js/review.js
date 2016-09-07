$(document).ready(function(){


	$('#toid').val(readCookie('permaid'));
	$('.ratings').delegate("a", "click",function(){
		 alert($(this).data('key'));
		 writeCookie('permaid', $(this).data('key'));
		 $('body').load('sales_person_review_individual.html');
	});
	var userid = id,
		toid = $('#toid').val();
	$.ajax({
		type: 'post',
		url: 'php/settings/review/review_get.php',
		dataType: 'json',
		crossDomain: true,
		data: {toid :toid},
		success: function(response){
	
			var html = '';
			html += '<a href="#" data-key="'+ response.sales.id +'">';
			html += '<li><p class="person"><span class="name">' + response.sales.email + '</span>';
            html += '</p>';
            html += '</li>';
            html += '</a>';
            $('ol.ratings').append(html);
		}
	});

});