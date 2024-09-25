$(document).ready(function(){
    // Smooth scroll for the success alert
    if ($('.alert-success').length) {
        $('html, body').animate({
            scrollTop: $('.alert-success').offset().top
        }, 1000);
    }
});
