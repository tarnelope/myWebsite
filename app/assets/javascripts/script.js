 	var robotOn = false;
 	var moreInfo = false;
 
 $(document).ready(function(){
  //  	$("#about_trig").click(function(){
        	$("#about_panel").toggle(600);
        	$(this).toggleClass("active");
        	return false;
    	});
    	
    	$('nav ul li a').click(function(){
		var el = $(this).attr('href');
		var elWrapped = $(el);
		scrollToDiv(elWrapped,40);
		return false;
	});
	
	function scrollToDiv(element,navheight){
		var offset = element.offset();
		var offsetTop = offset.top;
		var totalScroll = offsetTop-navheight;
		$('body,html').animate({
				scrollTop: totalScroll
		}, 500);
	}
	
	$('#proj_trigger').mousedown(function(){
    		$("#proj_me").attr('src', "pics/projects_me3.png")
    	})
    	$('#proj_trigger').mouseup(function(){
    		$("#proj_me").attr('src', "pics/projects_me.png")
    	})
    	
    	
    	$('#see_more').mousedown(function(){
    		$("#see_more").attr('src', "../pics/downArrow-down.png")
    	})
    	$('#see_more').mouseup(function(){
    		$("#see_more").attr('src', "../pics/downArrow.png")
    	})
    	$("#see_more").live('click', function() {
    	if (!moreInfo) {
    		$("#more_info").show();
    		moreInfo = true;
    	} else {
    		$("#more_info").hide();
   		 moreInfo = false;
   		}
});
		
	});
