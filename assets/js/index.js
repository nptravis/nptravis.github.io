(function(){

define(["jquery", "jqueryui", "jquerymodal", 'scrollAnimations', 'slick'], function($, $ui, modal, scrollAnimations, slick){

	console.log('we ar here')

	var isMobile;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
   isMobile = true;
   
   $('.hidden').removeClass('hidden')
 }

	console.log("Dom Loaded");
	
	// Scrolling ///////////////////////////////////////////////

	var navPos = $("nav").position().top;
	var lastPos = 0;
	var lockTimer;

	$(window).scroll(function(e) {
		var pos = $(window).scrollTop();
		var navHeight = $("nav").height();
		var windowHeight = $(window).height() + navHeight;
		var addToPosition = $("#about").offset().top;
		var scrollBottom = pos + $(window).height();

		// Navbar Positioning ///////////////////////////////////
		
		if (pos > navPos + navHeight && lastPos < pos) {
			if (!$("nav").hasClass("fixed")) {
				scrollAnimations.navFixAndGrow()
			}
		}
	

	
		if (pos < navPos && lastPos > pos) {
			if ($("nav").hasClass("fixed")) {
				scrollAnimations.navUnFix()
			}
		}
		

		// BEGIN Navbar Highlighting //////////////////////////
		if (pos >= $("#home").offset().top) {
			scrollAnimations.highlight("#Home");
		}
		if (pos >= $("#about").offset().top - 50) {
			scrollAnimations.highlight("#About");
		}
		if (pos >= $("#projects").offset().top - 50) {
			scrollAnimations.highlight("#Projects");
		}
		if (pos >= $("#blog").offset().top - 50) {
			scrollAnimations.highlight("#Blog");
		}
		if (
			pos >= $("#contact").offset().top - 50 ||
			pos + $(window).height() === $(document).height()
		) {
			scrollAnimations.highlight("#Contact");
		}
		// END Navbar highlighting /////////////////////////////////

		// BEGIN Scroll Animations /////////////////////////////////////
		
		if(!isMobile){
			if(pos >= $("#about").offset().top - windowHeight/1.5 ){
				if($("#about-header").css('opacity') == 0){
					scrollAnimations.slideInHeader($("#about-header"), $('#about-header-bar'))
				}
			}
		}

		if(!isMobile){
			if(pos >= $("#about").offset().top - windowHeight/2){
				scrollAnimations.showIcons($(".icon-container"), $('.icon-text'))
			}
		}

		if(!isMobile){
			if(pos >= windowHeight + 100 && $("#my-picture-container").css('opacity') == 0){

					scrollAnimations.showPictureAndGraph($("#my-picture-container"), $('#flex-graph-container'))
					scrollAnimations.growGraph($('.progress-bar'))
				
			}
		} else {
			// Mobile
			if(pos >= $('#about').offset().top/1.5 && $('.progress-bar').css('width') === '0px'){
					scrollAnimations.growGraph($('.progress-bar'))
			}
			
		}

		if(!isMobile){
			if(pos >= $("#projects").offset().top - windowHeight/1.5){
				if(!$("#project-header").hasClass('slide-in-left')){
					scrollAnimations.slideInHeader($("#project-header"), $('#project-header-bar'))
					
				}
			}
		}

		if(!isMobile){
			if(pos >= $("#projects").offset().top - windowHeight/3 && $(".project-box").css('opacity') == 0){
					scrollAnimations.showProjects($('.project-box'))
			}

			if(pos >= $("#blog").offset().top - windowHeight/1.5){
				if($("#blog-header").css('opacity') == 0){
					scrollAnimations.slideInHeader($("#blog-header"), $('#blog-header-bar'))
				
				}
			}

			if(pos >= $("#blog").offset().top - windowHeight/3 && $(".post-box-container").css('opacity') == 0){
				scrollAnimations.showBlogPosts($('.post-box-container'))
			}


			if(pos >= $("#contact").offset().top - windowHeight/1.5){
				if($("#contact-header").css('opacity') == 0){
					scrollAnimations.slideInHeader($("#contact-header"), $('#contact-header-bar'))
					scrollAnimations.growAndShrink($('.contact-form-container'))
				}
			}
		}

		// END Scroll Animations /////////////////////////////////

		lastPos = pos;
	});

	// navbar listeners ////////////////////////////////////////////////////
	function scrollTo(elementId, behavior){
		document.getElementById(elementId).scrollIntoView({ behavior: behavior})
	}
	$(".scroll-to").click(function(e){
		scrollTo(e.target.dataset.id, 'smooth')
	})
	// $("#About").click(function() {
	// 	document.getElementById("about").scrollIntoView({ behavior: "smooth" });
	// });

	// $("#Home").click(function() {
	// 	document.getElementById("home").scrollIntoView({ behavior: "smooth" });
	// });

	// $("#Projects").click(function() {
	// 	document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
	// });

	// $("#Blog").click(function() {
	// 	document.getElementById("blog").scrollIntoView({ behavior: "smooth" });
	// });

	// $("#Contact").click(function() {
	// 	document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
	// });

	$(".project-box").hover(
		function() {
			$(this)
				.children(".project-image")
				.css("opacity", ".1");
			$(this).children(".project-image");
			$(this)
				.children(".project-text-container")
				.animate(
					{
						opacity: "1",
						top: "10%"
					},
					300
				);
			$(this)
				.children(".button-wrapper")
				.animate({ opacity: "1", bottom: "30%" }, 300);
		},
		function() {
			$(this)
				.children(".project-image")
				.animate({ opacity: "1" }, 300);
			$(this)
				.children(".project-text-container")
				.animate(
					{
						opacity: "0",
						top: 0
					},
					300
				);
			$(this)
				.children(".button-wrapper")
				.animate({ opacity: "0", bottom: 0 }, 300);
			$(this).css("background-color", "transparent");
		}
	);

	$("#home-button").click(function() {
		document.getElementById("home").scrollIntoView({ behavior: "smooth" });
	});

	if(isMobile){
		$(".hamburger").click(function(){
			$(".navbar-link").toggle()
		})

		$(".navbar-link").click(function(){
			$(".navbar-link").toggle()
		})
	}

	$("#home-button").hover(
		function() {
			$(this).effect(
				"shake",
				{ direction: "up", times: 2, distance: 10 },
				1000
			);
		},
		function() {
			$(this).show();
		}
	);

	$(".down-arrow-container").hover(
		function() {
			$(this).effect(
				"shake",
				{ direction: "down", times: 2, distance: 10 },
				1000
			);
		},
		function() {
			$(this).show();
		}
	);


	$(".carousel-container").slick({
			dots: true,
			infinite: true,
			arrows: true,
			speed: 300,
			slidesToShow: 1,
			centerMode: true,
			variableWidth: true,
			slidesToScroll: 1
	});


});
})();