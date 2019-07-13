$(document).ready(function() {
	console.log("Dom Loaded");

	var navPos = $("nav").position().top;
	var lastPos = 0;
	var lockTimer;

	// event listeners ///////////////////////////////////////////////////////////////
	window.addEventListener("scroll", function(e) {
		var pos = $(window).scrollTop();
		var pos2 = pos + 50;
		var scrollBottom = pos + $(window).height();

		if (pos >= navPos + $("nav").height() && lastPos < pos) {
			growAnimation($("nav"));
		}

		if (pos < navPos && lastPos > pos) {
			$("nav").removeClass("fixed");
		}

		if (pos > $("#home").offset().top) {
			highlight("#Home");
		}

		if (pos > $("#about").offset().top) {
			highlight("#About");
			$("nav").addClass("fixed");
			$("#about").css({
				marginTop: 50
			});
			flyIn();
		} else {
			$("nav").removeClass("fixed");
			$("#about").css({
				marginTop: 0
			});
		}

		if (pos > $("#projects").offset().top) {
			highlight("#Projects");
		}

		if (pos > $("#blog").offset().top) {
			highlight("#Blog");
		}

		if (pos > $("#contact").offset().top) {
			highlight("#Contact");
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

	function flyIn() {
		$("#first-icon").animate(
			{
				marginLeft: "0px",
				opacity: "1"
			},
			700
		);
		$("#second-icon").animate(
			{
				marginRight: "0px",
				opacity: "1"
			},
			700
		);
		$("#third-icon").animate(
			{
				marginLeft: "0px",
				opacity: "1"
			},
			700
		);
		$("#fourth-icon").animate(
			{
				marginRight: "0px",
				opacity: "1"
			},
			700
		);
		$(".fade-in-text").animate(
			{
				opacity: 1
			},
			1000
		);
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
});
