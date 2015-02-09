
jQuery(document).ready(function($) {

	// var to trigger boxOut function
	var trigger = $("div.box a.viewMore");
        closeMe = $("div.closeWrap a.close");

    init();

    // call all custom functions
    function init() {

    	// add class .clicked to trigger and not other anchor tags
    	$("div.box a.viewMore").on("click", function() {
    		$("div.box a.viewMore").removeClass("clicked");
    		$(this).addClass("clicked");
    		event.preventDefault();
    	});

    	// expand box
    	trigger.on("click", expandBox);

        // close box
        closeMe.on("click", closeBox);

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
	    		"height": containerHeight + "px"
	    	});

	    	trigger.css("display", "none");
    	}

    	if (container.hasClass("selected")) {

    		container.css("opacity", 0);
    		selected.css("opacity", 1);
    	}

    	console.log("expandBox works!");
    }

    // close expanded container
    function closeBox() {

        // var closeMe = $("div.closeWrap a.close"),
        //     viewMore = $("div.box a.viewMore"),
        //     selected = $("a.close").parent().parent();

        // closeMe.removeClass("close");
        // selected.removeClass("selected");
        // viewMore.css("display", "block");

        console.log("closeBox works!");
    }

    console.log("app.js works!");

});
