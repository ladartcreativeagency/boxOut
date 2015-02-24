
jQuery(document).ready(function($) {

	// vars to trigger boxOut function
	var trigger = $("div.box a.viewMore"),
        closeMe = $("div.closeWrap a.remove");

    boxOut();

    // call all custom functions
    function boxOut() {

    	// add class .clicked to selected var trigger and not other anchor tags
    	$("div.box a.viewMore").on("click", function() {
    		$("div.box a.viewMore").removeClass("clicked");
    		$(this).addClass("clicked");
    		event.preventDefault();
    	});

        /*==========  expand box  ==========*/
    	// for laptop/desktop
    	trigger.on("click", expandBox);
        // for touch screens
        trigger.on("touchstart", expandBox);
        // for window resize
        window.onresize = function(event) {
            trigger.on("click", expandBox);
        }
        /*==========  **********  ==========*/

        /*==========  close box  ==========*/
        // for laptop/desktop
        closeMe.on("click", closeBox);
        // for touch screens
        closeMe.on("touchstart", closeBox);
        // for window resize
        window.onresize = function(event) {
            closeMe.on("click", closeBox);
        }
        /*==========  *********  ==========*/

        console.log("HOORAY boxOut!");
    }

    // expand the container
    function expandBox() {

    	// vars to make your life easier
    	var container = $("div.box"),
    		trigger = $("div.box a.viewMore"),
    		vpw = $(window).width(),
    		containerHeight = $("section.content").height(),
    		selected = $("a.clicked").parent().parent();

        // check for class to begin magic
    	if (trigger.hasClass("clicked")) {

            // add class to container to expand
    		selected.addClass("selected");
            // remove .notExpanded class
            selected.removeClass("notExpanded");
            // apply class to close btn to make it visible
            $(".selected div.closeWrap a").addClass("close");

            // dynamically add proper width and height to expanding container
            TweenLite.to(selected, 0.3, {width: vpw + "px",
                                        height: containerHeight + "px"});

            // hide var trigger
            TweenLite.to(trigger, 0.01, {opacity: 0});
    	}

        // check for class on container
    	if (container.hasClass("selected")) {

            // hide containers that aren't expanded
            TweenLite.to(container, 0.3, {opacity: 0});
            TweenLite.to(selected, 0.3, {opacity: 1.0});
    	}

    	console.log("expandBox works!");
    }

    // close expanded container
    function closeBox() {

        // vars to make your life easier
        var closeMe = $("div.closeWrap a.close"),
            viewMore = $("div.box a.viewMore"),
            container = $("div.box"),
            vpw = $(window).width(),
            containerHeight = $("div.notExpanded").height(),
            selected = $("a.clicked").parent().parent();

        // remove class on close trigger
        closeMe.removeClass("close");
        // reset height
        TweenLite.to(selected, 0.3, {height: 100 + "%"});
        // add .notExpanded class
        selected.addClass("notExpanded");
        // remove class that has styles for expanded container
        selected.removeClass("selected");
        // show var trigger to allow container to expand again
        TweenLite.to(viewMore, 0.1, {opacity: 1, delay: 0.8});
        // show other containers that weren't expanded
        TweenLite.to(container, 0.2, {opacity: 1.0, delay: 0.5});

        // container size for small screens
        if (vpw < 768) {
            TweenLite.to(container, 0.3, {width: 100 + "%"});
        }

        // container size for medium screens
        if ((vpw > 767) && (vpw < 1025)) {
            TweenLite.to(container, 0.3, {width: 50 + "%"});
        }

        // container size for large screens
        if (vpw > 1024) {
            TweenLite.to(container, 0.3, {width: 25 + "%"});
        }

        console.log("closeBox works!");
    }

    console.log("app.js works!");

});
