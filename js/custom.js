/**************************************
    File Name: custom.js
    Template Name: Holy Garden
    Created By: HTML.Design
    http://html.design - twitter.com/htmldotdesign
**************************************/

(function ($) {
    "use strict";
    /**************************************
    TOOLTIP
    **************************************/
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    /**************************************
    LOADER
    **************************************/
    $(window).load(function () {
        $("#preloader").on(500).fadeOut();
        $(".preloader").on(600).fadeOut("slow");
    });

    /**************************************
    BACK TO TOP
    **************************************/
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 1) {
            jQuery('.dmtop').css({ bottom: "25px" });
        } else {
            jQuery('.dmtop').css({ bottom: "-100px" });
        }
    });
    jQuery('.dmtop').click(function () {
        jQuery('html, body').animate({ scrollTop: '0px' }, 800);
        return false;
    });

    /**************************************
    COUNTER
    **************************************/
    function count($this) {
        var current = parseInt($this.html(), 10);
        current = current + 1;

        $this.html(++current);
        if (current > $this.data('count')) {
            $this.html($this.data('count'));
        } else {
            setTimeout(function () { count($this) }, 50);
        }
    }

    $(".stat-timer").each(function () {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
    });

    /**************************************
    CAROUSEL
    **************************************/
    $('.carousel').carousel({
        interval: 3000
    })
})(jQuery);

/**************************************
TABBED
**************************************/
function openCategory(evt, catName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(catName).style.display = "block";
    evt.currentTarget.className += " active";

    location.hash = "#tom";
    location.hash = "#marknad";
} 