(function(){
	define(['jquery', 'jqueryui'], function($, $ui){

		scrollAnimations = {}

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

		return scrollAnimations;

	});
})();