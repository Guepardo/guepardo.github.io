//Auto Slider Height Calculation According to Window
jQuery(function () {
    jQuery('#carousel-area .item').css({
        'height': ((jQuery(window).height())) + 'px'
    });
    jQuery(window).resize(function () {
        jQuery('#carousel-area .item').css({
            'height': ((jQuery(window).height())) + 'px'
        });
    });
});


//WOW Scroll Spy
var wow = new WOW({
    //disabled for mobile
    mobile: false
});
wow.init();

//Text Rotator
$(document).ready(function () {
    $(".rotate-text .rotate").textrotator({
        animation: "flipUp",
        speed: 3000,
        autoPlay: true,
        autoPlayDelay: 1000
    });
});


//Bootsrap slider carousel
$('#carousel-slider').carousel();

$('a[data-slide="prev"]').click(function () {
    $('#carousel-slider').carousel('prev');
});

$('a[data-slide="next"]').click(function () {
    $('#carousel-slider').carousel('next');
});


//Bootsrap About us slider carousel
$('#carousel-about').carousel();

$('a[data-slide="prev"]').click(function () {
    $('#carousel-about').carousel('prev');
});

$('a[data-slide="next"]').click(function () {
    $('#carousel-about').carousel('next');
});


//Nice Scroll
$(document).ready(

    function () {

        $("html").niceScroll({
            cursorcolor: "rgba(0, 0, 0, 0.5)",
            cursorwidth: "10px",
            cursorborderradius: "0px",
            autohidemode: "cursor",
            cursorborder: 'none',
            zindex: '99999'
        });

    }

);


// countUp
var options = {
    useEasing: true, // toggle easing
    useGrouping: true, // 1,000,000 vs 1000000
    separator: ',', // character to use as a separator
    decimal: '.', // character to use as a decimal
}
var useOnComplete = false;
var useEasing = true;
var useGrouping = true;

// create instance
window.onscroll = function () {

    var demo = new countUp("myTargetElement", 90, 240, 0, 10, options);
    demo.start();

    var demo = new countUp("myTargetElement2", 55, 192, 0, 10, options);
    demo.start();

    var demo = new countUp("myTargetElement3", 55, 183456, 0, 10, options);
    demo.start();
}


//Contact Form

$('#submit').click(function(){

$.post("assets/php/send.php", $(".contact-form").serialize(),  function(response) {   
 $('#success').html(response);
});
return false;

});