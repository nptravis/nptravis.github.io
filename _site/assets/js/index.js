$(document).ready(function() {
	console.log("Dom Loaded");

	// Variables and State /////////////////////////////////////////
	var navPos = $("nav").position().top;
	var lastPos = 0;
	var lockTimer;
	$(".slide-in-left").hide();
	$(".slide-in-right").hide();
	$(".fade-in-text").hide();

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

	window.addEventListener("scroll", function(e) {
		var pos = $(window).scrollTop();
		var pos2 = pos + 50;
		var scrollBottom = pos + $(window).height();

		if (pos > navPos + $("nav").height() && lastPos < pos) {
			if (!$("nav").hasClass("fixed")) {
				$("nav").addClass("fixed");
				growAnimation($("nav"));
				$("#about").css({
					marginTop: 50
				});
				flyIn();
			}
		}

		if (pos < navPos && lastPos > pos) {
			if ($("nav").hasClass("fixed")) {
				$("nav").removeClass("fixed");
				$("#about").css({
					marginTop: 0
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

	function highlight(idName) {
		$("nav a.active").removeClass("active");
		$(idName).addClass("active");
	}

	function growAnimation($element) {
		console.log("grow!");
		$element.height(0);
		$element.animate(
			{
				height: 50
			},
			700
		);
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
			$(this).addClass("border");
			$(this)
				.children(".project-image")
				.css("opacity", ".1");
			$(this).children(".project-image");
			$(this)
				.children(".project-title")
				.css("opacity", "1");
			$(this)
				.children(".button-wrapper")
				.css("opacity", "1");
			$(this).css("background-color", "#fff");
		},
		function() {
			$(this).removeClass("border");
			$(this)
				.children(".project-image")
				.css("opacity", "1");
			$(this)
				.children(".project-title")
				.css("opacity", "0");
			$(this)
				.children(".button-wrapper")
				.css("opacity", "0");
			$(this).css("background-color", "transparent");
		}
	);

	$("#home-button").click(function() {
		document.getElementById("home").scrollIntoView({ behavior: "smooth" });
	});

	$("#home-button").hover(
		function() {
			$(this).toggle("bounce", { times: 2 }, "slow");
		},
		function() {
			$(this).show();
		}
	);
});
