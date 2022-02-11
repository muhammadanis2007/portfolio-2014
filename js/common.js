// JavaScript Document

$(document).ready(function(e) {
    
/*HOme button Footer Button UX Methods Parameters */


var offset = 250;
 
var duration = 300;
 
$(window).scroll(function() {
 
 console.log($(this).scrollTop());
 
if ($(this).scrollTop() > offset) {
  console.log("NOW START "+$(this).scrollTop());
$("#btnBackHome").fadeIn(duration);
 
} else {
   console.log("NOW REMOVE "+$(this).scrollTop());
$("#btnBackHome").fadeOut(duration);
 	
	
}
	
});
	
	
$("#moveBackTop").click(function(event) {
 
event.preventDefault();
 
$("html, body").animate({scrollTop: 0}, duration);
 
return false;
 
})
	
	
	
$(".v-menu").addClass("menu-animation-f");

    $(".nav-tog").on('click', function(e) {
			

				
		$(this).toggleClass("nav-tog-select");

	if($(".v-menu").hasClass("menu-animation-f")){
		
		
		$(".v-menu").removeClass("menu-animation-f");
		$(".v-menu").addClass("menu-animation-s");
	
	
	}
	else
	{
		$(".v-menu").removeClass("menu-animation-s");
		$(".v-menu").addClass("menu-animation-f");
		
	}			
				
				
	
			
			 //you can list several class names 
			 e.preventDefault();
			  
    });
	
	$(".v-menu li a.home").click(function(){
		
	$(".v-menu li a").removeClass("isotope");
	$(this).addClass("isotope");
	$('#home').animatescroll({scrollSpeed:2000,easing:'easeOutBounce'});
		
		});
		
	$(".v-menu li a.skill").click(function(){
		
		
		$(".v-menu li a").removeClass("isotope");
		$(this).addClass("isotope");
		$('#skill').animatescroll({scrollSpeed:2000,easing:'easeOutBounce'});
		
	});
	
	$(".v-menu li a.qualification").click(function(){
	
	
	
	$(".v-menu li a").removeClass("isotope, isotope2");

	$(this).addClass("isotope, isotope2");		
	$('#work').animatescroll({scrollSpeed:2000,easing:'easeOutBounce'});
	$(".crcle-gal").scrollClass({
    delay: 20, //set class after 20 milliseconds delay
    threshold: 50, //set class when 50% of element enters the viewport
    offsetTop: 80, //height in pixels of a fixed top navbar
    callback: function () { //fire a callback
      console.log('Callback fired!');
    }
  });
	
	});
	$(".v-menu li a.contact").click(function(){
	$(".v-menu li a").removeClass("isotope");
		$(this).addClass("isotope");	
	$('#contact').animatescroll({scrollSpeed:2000,easing:'easeOutBounce'});
	});
	
	
	
	$('#slider').cycle({ 
    fx:     'fade', 
    speed:  'slow', 
    timeout: 8000, 
   	slideResize: true,
    containerResize: true,
    width: '100%',
    fit: 1,
	after: function (curr, next, opts) {


		
		$(".slides-parllel li h1").removeClass("isotope");
		/*$(".slides li h2").removeClass();
		$(".slides li button").removeClass();*/
		
		$(".slides-parllel li").eq((opts.currSlide)).children("h1").addClass("isotope");
		/*$(".slides li").eq((opts.currSlide)).children("h2").addClass("isotope");
		$(".slides li").eq((opts.currSlide)).children("button").addClass("isotope");*/
		
		 // 	$(".logo-container").html(opts.currSlide+"li NO : "+(opts.currSlide+1));
	
} 
});
	
	
	
	$(".crcle-gal").scrollClass({
    delay: 20, //set class after 20 milliseconds delay
    threshold: 50, //set class when 50% of element enters the viewport
    offsetTop: 80, //height in pixels of a fixed top navbar
    callback: function () { //fire a callback
      console.log('Callback fired!');
    }
  });
  
  
  $(".white-title, .pull-left, .pull-right").scrollClass({
    delay: 20, //set class after 20 milliseconds delay
    threshold: 50, //set class when 50% of element enters the viewport
    offsetTop: 80, //height in pixels of a fixed top navbar
    callback: function () { //fire a callback
      console.log('Callback fired!');
    }
  });
  
  
	
	

});