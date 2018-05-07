/*
Copyright (c) 2017 
------------------------------------------------------------------


-------------------------------------------------------------------*/

$('#link').click(function(){
    if($('#some_text').is(':visible')){
        $('#some_text').slideUp();
        $(this).text('Показать');
    }
    else{
        $('#some_text').slideDown();
        $(this).text('Скрыть');
    }
    return false;
});




(function ($) {
	"use strict";
	var AcupunctureClinic = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

			/*-------------- AcupunctureClinic Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/
			this.RTL();
			this.Magnific_popup();
			this.ConutTo();
			this.TestimonialSlider();
			this.ContactFormSubmit();
			
		},
		
		/*-------------- AcupunctureClinic Functions definition ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/
		RTL: function () {
			// On Right-to-left(RTL) add class 
			var rtl_attr = $("html").attr('dir');
			if(rtl_attr){
				$('html').find('body').addClass("rtl");	
			}		
		},
		// wowanimation: function(){
			// new WOW().init()
		// },
		
		//counter on home page
		ConutTo: function(){
		if($('.timer').length > 0){	
			  $('.timer').appear(function() {
					$(this).countTo();
				});
		}
		},
		//Testimonial slider on home page
		 TestimonialSlider: function(){
			 if($('.cf_testimonial_slider .owl-carousel').length > 0){		
					$('.cf_testimonial_slider .owl-carousel').owlCarousel({
						items:1,
						margin:30,
						nav: true,
						navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
						dots: false,
						autoplay:true,
						stagePadding:30,
						smartSpeed:450,
						loop:true
					});
			 }
		},
		//Magnific Popuo
		Magnific_popup: function() {
            $('.cf_hovericon_div .zoom_icon').magnificPopup({
				type: 'image',
               gallery: {
                    enabled: true
			   }
          }); 
		 $('.tr_footer_gallery .zoom_img').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
               }
            });
        },
	
		//contact form submition
		ContactFormSubmit: function(){
			if($('#send_btn').length > 0){	
				$("#send_btn").on("click", function() {
				var e = $("#ur_name").val();
				var t = $("#ur_mail").val();
				//var ph = $("#ur_phone").val();
				var s = $("#sub").val();
				var r = $("#msg").val();
				$.ajax({
					type: "POST",
					url: "ajaxmail.php",
					data: {
						username: e,
						useremail: t,
						//userphone: ph,
						usersub: s,
						mesg: r
					},
					success: function(n) {
						var i = n.split("#");
						if (i[0] == "1") {
							$("#ur_name").val("");
							$("#ur_mail").val("");
							//$("#ur_phone").val("");
							$("#sub").val("");
							$("#msg").val("");
							$("#err").html(i[1]);
						} else {
							$("#ur_name").val(e);
							$("#ur_mail").val(t);
							// $("#ur_phone").val(ph);
							$("#sub").val(s);
							$("#msg").val(r);
							$("#err").html(i[1]);
						}
					}
				});
			});
		}
		}
		
		
		   
	};

	$(document).ready(function(){
    $("#main-head").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
	});

	AcupunctureClinic.init();

	// Load Event
	// Loader js
	$(window).on('load', function() {
		jQuery("#cf_preloader_box").fadeOut();
		jQuery("#cf_preloader_wrapper").delay(350).fadeOut("slow");
	});

	// Scroll Event
	// fixed menu
	$(window).on('scroll', function () {
	     if ($(this).scrollTop() > 300) {
                 $(".cf_mainheader").addClass("cf_fixed");
            } else {
                $(".cf_mainheader").removeClass("cf_fixed");
	    }
	});
	
	
	jQuery(document).ready(function(){
		
	});

})(jQuery);