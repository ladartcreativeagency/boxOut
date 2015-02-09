
jQuery(document).ready(function($) {

	// var to trigger boxOut function
	var trigger = $("div.box a.viewMore");

    init();

    // call all custom functions
    function init() {

    	// add class .clicked to trigger and not other anchor tags
    	$("div.box a").on("click", function() {
    		$("div.box a").removeClass("clicked");
    		$(this).addClass("clicked");
    		event.preventDefault();
    	});

    	// expand box
    	trigger.on("click", expandBox);

        console.log("HOORAY INIT!");
    }

    // expand the container
    function expandBox() {

    	// vars to make your life easier
    	var container = $("div.box"),
    		trigger = $("div.box a.viewMore"),
    		vpw = $(window).width(),
    		containerHeight = $("section.content").height(),
    		selected = $("a.clicked").parent().parent();

    	if (trigger.hasClass("clicked")) {

    		selected.addClass("selected");
            $(".selected div.closeWrap a").addClass("close");

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

            var closeMe = $("div.closeWrap a.close");

    		container.css("opacity", 0);
    		selected.css("opacity", 1);
            closeMe.css("opacity", 1);
    	}

    	console.log("expandBox works!");
    }

    // close the container
    function closeBox() {

        var closeMe = $("div.closeWrap a.close"),
            trigger = $("div.box a.viewMore"),
            selected = $("a.clicked").parent().parent();


        console.log("closeBox works!");
    }

    console.log("app.js works!");

});
