
jQuery(document).ready(function($) {
	 
	 $('.page_link').on('click', function(event) {
		 event.preventDefault();
		 if ($(this).attr('class') !== 'active_page_link') {
			 $('.active_page_link').toggleClass('active_page_link');
			 $(this).addClass('active_page_link')
		 }
		 
		 var s = $(this).attr('id');
		 var slideNum = parseInt(/page_link-(\d+)/.exec(s)[1], 10);
		 
		 $('.active_page').toggleClass('active_page').hide();
		 $('.page-'+slideNum).toggleClass('active_page').show();
		 
	 })

});