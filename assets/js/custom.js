(function($){

	"use-strict";

	$(".menu-toggle").on("click", function(){
		$("body").toggleClass("menu--opened");
		console.log("working");
	});

})(jQuery);