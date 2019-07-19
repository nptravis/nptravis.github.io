requirejs.config({
	baseUrl: '../assets/js',
	paths: {
		jquerymodal: ["//cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min"],
		jqueryui: "jqueryui.min",
		jquery: "jquery",
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
