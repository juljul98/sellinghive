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
		data: {toid :toid, userid:userid},
		success: function(data){
			var html = '';
			var ratings = '';
	
			var count = data.sales.length;
			var data = data.sales;
			console.log(data);
			for(x=0; x<count; x++) {
				
				// for(var y=1; y<=data[x].reviewrating; y++) {
				// 	ratings += '<img src="images/rating.png" alt="">';
				// }
				html += '<a href="#" data-key="'+ data[x].eid +'">';
				html += '<li><p class="person"><span class="name">' + data[x].email + '</span>';
				html += '<span>';
				html += ratings;
				html += '</span>';
	            html += '</p>';
	            html += '</li>';
	            html += '</a>';
            }
            $('ol.ratings').append(html);
		}
	});

});