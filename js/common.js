/***   Preloader code   ***/

$(document).ready(function($) {
    var Body = $('body');
    Body.addClass('preloader-site');
});
$(window).ready(function() {
    setTimeout(function() {
        $('.preloader-wrapper').fadeOut();
        $('body').removeClass('preloader-site');
    }, 1000);
});
