$(function(){
    
     $('a.ajax_add_to_cart').click(function () {
        var title = $(this).attr("rel");
        $(".popup").fadeIn(500);
        $("body").append("<div id='overlay'></div>");
        $('#overlay').show().css('opacity','0.8');
        $('.popup .popup-cont').prepend("<div id='tov-title'>&mdash; "+title+" &mdash;</div>");
        $("input[type='hidden']").val(title);                          
        $('a.close, #overlay').click(function () {
            $('.popup').fadeOut(100);
            $('#overlay').remove();
            $('#tov-title').remove();
            return false;
        });
        $('.popup').click(function(e){
            e.stopPropagation();    
        });
        return false;                
    });
    
    $('.rew-slider').slick({
        infinite: true,
        autoplay: false,
        dots: false,
        arrows: true,
        fade: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<span data-role="none" class="slick-prev animate" aria-label="Previous" tabindex="0" role="button"></span>',
        nextArrow: '<span data-role="none" class="slick-next animate" aria-label="Next" tabindex="0" role="button"></span>',
    });
});
 