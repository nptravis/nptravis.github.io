(function(){

define(["jquery", "jqueryui", "jquerymodal", "slick", 'scrollAnimations'], function($, $ui, modal, slick, scrollAnimations){

	console.log("Dom Loaded");

	// Variables and State /////////////////////////////////////////
	
	// $(".slide-in-left").hide();
	// $(".slide-in-right").hide();
	// $(".fade-in-text").hide();

	var navPos = $("nav").position().top;
		var lastPos = 0;
		var lockTimer;
		
		window.addEventListener("scroll", function(e) {
		var pos = $(window).scrollTop();
		var pos2 = pos + 50;
		var scrollBottom = pos + $(window).height();

		if (pos > navPos + $("nav").height() && lastPos < pos) {
			if (!$("nav").hasClass("fixed")) {
				scrollAnimations.navFixAndGrow()
				
				
				flyIn();
			}
		}

		if (pos < navPos && lastPos > pos) {
			if ($("nav").hasClass("fixed")) {
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
				// flyOut();
			}

			// if ($(".slide-in-left").css("marginLeft") !== "-2000px") {
			//
			// 	console.log("Fly out");
			// }
		}

		// Navbar Highlighting
		if (pos >= $("#home").offset().top) highlight("#Home");
		if (pos >= $("#about").offset().top - 50) highlight("#About");
		if (pos >= $("#projects").offset().top - 50) highlight("#Projects");
		if (pos >= $("#blog").offset().top - 50) highlight("#Blog");
		if (
			pos >= $("#contact").offset().top - 50 ||
			pos + $(window).height() === $(document).height()
		) {
			highlight("#Contact");
		}

		if (pos > $(".flex-graph-container").offset().top - 200) {
			if ($(".progress-bar").css("width") === "0px") {
				graphIn();
			}
		}

		if (pos < $("#about").offset().top + 100) {
			if ($(".progress-bar").css("width") !== "0px") {
				// graphOut();
			}
		}

		lastPos = pos;
	});

	// fetch data /////////////////////////////////////////////////

	// fetch("https://api.github.com/users/nptravis/repos?sort=updated", {
	// 	method: "get",
	// 	headers: {
	// 		Accept: "application/json",
	// 		"Content-Type": "application/json"
	// 	}
	// })
	// 	.then(response => response.json())
	// 	.then(data => {
	// 		$("#github-repos").append(
	// 			data.map(repo => {
	// 				return `<ul>
	// 			<li>${repo.name}</li>
	// 		</ul>`;
	// 			})
	// 		);
	// 	})
	// 	.catch(err => err);

	// event listeners //////////////////////////////////////////////////////////////

	$("#test").click(function() {
		$(this).toggle("drop");
	});

	
	function highlight(idName) {
		$("nav a.active").removeClass("active");
		$(idName).addClass("active");
	}

	function flyOut() {
		console.log("flying out!");
		$(".slide-in-left").animate(
			{
				marginLeft: "-2000px"
			},
			500
		);
		$(".slide-in-right").animate(
			{
				marginLeft: "2000px"
			},
			500
		);
		$("#first-icon").animate(
			{
				marginLeft: "-2000px",
				opacity: "0"
			},
			700
		);
		$("#second-icon").animate(
			{
				marginRight: "-2000px",
				opacity: "0"
			},
			700
		);
		$("#third-icon").animate(
			{
				marginLeft: "-2000px",
				opacity: "0"
			},
			700
		);
		$("#fourth-icon").animate(
			{
				marginRight: "-2000px",
				opacity: "0"
			},
			700
		);
		$(".fade-in-text").animate(
			{
				opacity: 0
			},
			1000
		);
	}

	function flyIn() {
		console.log("flying in!");
		$(".slide-in-left").show("slide", { direction: "left" }, 1000);

		$(".slide-in-right").show("slide", { direction: "right" }, 1000);

		$(".fade-in-text").fadeIn("slow");
	}

	function graphIn() {
		console.log("graph in");
		// let originalWIdth = $(".progress-bar").css("min-width");
		// debugger;
		$(".progress-bar").each(function(index) {
			$(this).animate(
				{
					width: $(this).data("progress")
				},
				700
			);
		});
	}

	function graphOut() {
		console.log("graph out");
		// let originalWIdth = $(".progress-bar").css("min-width");
		// debugger;
		$(".progress-bar").each(function(index) {
			$(this).animate(
				{
					width: "0"
				},
				700
			);
		});
	}

	$("#About").click(function() {
		document.getElementById("about").scrollIntoView({ behavior: "smooth" });
	});

	$("#Home").click(function() {
		document.getElementById("home").scrollIntoView({ behavior: "smooth" });
	});

	$("#Projects").click(function() {
		document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
	});

	$("#Blog").click(function() {
		document.getElementById("blog").scrollIntoView({ behavior: "smooth" });
	});

	$("#Contact").click(function() {
		document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
	});

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

	$(".post-box-container").hover(
		function() {
			$(this)
				.siblings()
				.animate(
					{
						opacity: 0.2
					},
					200
				);
		},
		function() {
			$(this)
				.parent()
				.children()
				.css({
					opacity: 1
				});
		}
	);

	// $(".social-icon-container").hover(
	// 	function() {
	// 		$(this).effect("bounce", { direction: "up" }, 200);
	// 	},
	// 	function() {
	// 		$(this).show();
	// 	}
	// );

	// $(".bar-container").hover(
	// 	function() {
	// 		console.log("hover on");
	// 		$(this).animate(
	// 			{
	// 				minHeight: "40px",
	// 				maxHeight: "40px"
	// 			},
	// 			700
	// 		);
	// 	},
	// 	function() {
	// 		console.log("hover off");
	// 		$(this).animate(
	// 			{
	// 				minHeight: "30px",
	// 				maxHeight: "30px"
	// 			},
	// 			700
	// 		);
	// 	}
	// );

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