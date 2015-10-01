$(document).ready(function(){

	var dropdown = $("#dropdown");
		menu = $('nav ul');
		menuHeight = menu.height();
    
	$(dropdown).on('click', function(e){
		e.preventDefault();
		
		menu.slideToggle();

	});	
    
    $(window).resize(function(){
    	var w = $(window).width();
    	if (w > 320 && menu.is(":hidden")) {
    		menu.removeAttr('style');
    	}
    });


    var scroll_start = 0;
   	var startchange = $('.nav');
   	var offset = startchange.offset();
   	$(document).scroll(function() { 
      	scroll_start = $(this).scrollTop();
      	if(scroll_start > offset.top) {
          	$('.nav').css('background-color', 'rgba(070,130,205,0.5)');
          	
       	} else {
          	$('.nav').css('background-color', 'transparent');
       	}
   	});
	
    

    $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: target.offset().top
	            }, 1000);
	            return false;
	        }
	    }
	});


});