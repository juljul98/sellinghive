$(document).ready(function(){
	$('.navigation').click(function(e) {
		var content = $(this).attr('href');
		$('body').load(content);
		return false;
	});
	 $('.logout-btn').click(function(){
    	eraseCookie('UserEmail');
  	});
	var session = readCookie('UserEmail'),
		    textBlk = session.split('/'),
		    email = textBlk[0],
		    role = textBlk[1];
		    id = textBlk[2];

		   if(role == 'Sales') {
		   		$('.users-btn').attr('href', 'dashboard_sales.html');
		   		$('.roleprofile').attr('href', 'sales_public_profile.html');
		   } else {
		   		$('.users-btn').attr('href', 'dashboard_corporate.html');
		   		$('.roleprofile').attr('href', 'public_profile.html');
		   }
});