requirejs.config({
	baseUrl: '/assets/js',
	paths: {
		carousel: "lib/carousel",
		jquerymodal: ["//cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min"],
		jqueryui: "lib/jqueryui.min",
		jquery: "lib/jquery",
		index: "index",
		main: "main",
		slick: 'lib/slick.min',
		scrollAnimations: 'custom/scrollAnimations'
	},
	shim: {
        /* Set dependencies */
        jquerymodal : ['jquery']
    }
});
