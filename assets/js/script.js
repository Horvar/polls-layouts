$(document).ready(function(){

    //slick-sliders
    if ( $('#modesSlider1, #modesSlider2').length ) {
        $('#modesSlider1').slick({
            draggable: false,
            asNavFor: '#modesSlider2',
            prevArrow: $('#modesPrev'),
            nextArrow: $('#modesNext')
        })
        $('#modesSlider2').slick({
            arrows: false,
            draggable: false,
            fade: true,
            asNavFor: '#modesSlider1'
        })
    }

    //hamburger
    if ( $('#hamburger, .mobile-menu').length ) {
        $('#hamburger').click(function(){
            $(this).toggleClass('is-active')
            $('.mobile-menu').toggleClass('is-active')
        })
        $('.mobile-menu__overlay').click(function(){
            $('#hamburger').toggleClass('is-active')
            $('.mobile-menu').toggleClass('is-active')
        })

    }

})