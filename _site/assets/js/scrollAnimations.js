(function(){
	define(['jquery', 'jqueryui' ], function($, $ui){

		scrollAnimations = {}

		scrollAnimations.growAndShrink = function($element){
			$element.addClass('grow-and-shrink')
		}

		scrollAnimations.growGraph = function($progressBar){
			$progressBar.each(function(index) {
				$(this).delay(index*100).animate(
					{
						width: $(this).data("progress")
					},
					700
				);
			});
		}

		scrollAnimations.highlight = function(idName) {
			$("nav a.active").removeClass("active");
			$(idName).addClass("active");
		}

		scrollAnimations.navFixAndGrow = function(){
			$("nav").addClass("fixed");
			$("nav").height(0);
			$("nav").animate(
				{
					height: 50
				},
				700
			);
			$("#about").css({
					marginTop: 50
			});
			$("#all-posts-container").css({
				marginTop: 70
			});
			$("#post-container").css({
				marginTop: 70
			});
		}

		scrollAnimations.navUnFix = function(){
			$("nav").removeClass("fixed");
				$("#about").css({
					marginTop: 0
				});
				$("#all-posts-container").css({
					marginTop: 20
				});
				$("#post-container").css({
					marginTop: 20
				});
		}

		scrollAnimations.showBlogPosts = function($posts){
			$posts.addClass('slide-up')
		}

		scrollAnimations.showIcons = function($elements, $text){
			$elements.addClass('animated').addClass('flip-in-x')
			$text.animate({
				opacity: 1
			}, 1000)
		}

		scrollAnimations.showPictureAndGraph = function($pic, $graph){
			$pic.addClass('slide-in-left')
			$graph.addClass('slide-in-right')
		}

		scrollAnimations.showProjects = function($projects){
			$projects.addClass('slide-up')
		}

		scrollAnimations.slideInHeader = function($text, $underline){
			$text.show("slide", { direction: "right" }, 1000);
			$underline.show("slide", { direction: "left" }, 1000);
		}

		return scrollAnimations;

	});
})();