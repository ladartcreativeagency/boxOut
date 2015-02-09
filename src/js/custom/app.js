
jQuery(document).ready(function($) {

	// var to trigger boxOut function
	var trigger = $("div.box a");

    init();

    // call all custom functions
    function init() {

    	// add class .clicked to trigger and not other anchor tags
    	$("div.box a").on("click", function() {
    		$("div.box a").removeClass("clicked");
    		$(this).addClass("clicked");
    		event.preventDefault();
    	});

    	// call boxOut
    	trigger.on("click", expandBox);

        console.log("HOORAY INIT!");
    }

    // write custom functions here
    function expandBox() {

    	// vars to make your life easier
    	var container = $("div.box"),
    		trigger = $("div.box a"),
    		vpw = $(window).width(),
    		containerHeight = $("section.content").height(),
    		selected = $("a.clicked").parent().parent();

    	if (trigger.hasClass("clicked")) {

    		selected.addClass("selected");

    		selected.css({
	    		"width": vpw + "px",
	    		"height": containerHeight + "px",
	    		"float": "none",
	    		"overflow": "none",
	    		"position": "absolute",
	    		"top": 0,
	    		"left": 0
	    	});

	    	trigger.css("display", "none");
    	}

    	if (container.hasClass("selected")) {

    		container.css("opacity", 0);
    		selected.css("opacity", 1);
    	}

    	console.log("expandBox works!");
    }

    console.log("app.js works!");

});
