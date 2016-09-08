$(document).ready(function(){
	$('.navigation').click(function(e) {
		var content = $(this).attr('href');
		$('body').load(content);
		return false;
	});
	var session = readCookie('UserEmail'),
		    textBlk = session.split('/'),
		    email = textBlk[0],
		    role = textBlk[1];
		    id = textBlk[2];
		   if(role == 'Sales') {
		   		$('.roleprofile').attr('href', 'sales_public_profile.html');
		   } else {
		   		$('.roleprofile').attr('href', 'public_profile.html');
		   }
});