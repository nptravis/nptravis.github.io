requirejs.config({
	baseUrl: '../assets/js',
	paths: {
		carousel: "carousel",
		jquerymodal: ["//cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min"],
		jqueryui: "lib/jqueryui.min",
		jquery: "lib/jquery",
		index: "index",
		main: "main",
		slick: '../slick/slick-1.8.1/slick/slick',
		scrollAnimations: 'scrollAnimations'
	},
	shim: {
        /* Set bootstrap dependencies (just jQuery) */
        jquerymodal : ['jquery']
    }
});
