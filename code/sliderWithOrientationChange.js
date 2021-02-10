var pos = 0;
//number of slides
var totalSlides = $('#slider-wrap ul li').length;
//get the slide width
var sliderWidth = $('#slider-wrap').width();



$(document).ready(function(){

    pos = 0;
    //number of slides
    totalSlides = $('#slider-wrap ul li').length;
    //get the slide width
    sliderWidth = $('#slider-wrap').width();

    $('#slider-wrap ul#slider').width(sliderWidth*totalSlides);

    var autoSlider = setInterval(slideRight, 5000);
    
    $(window).resize(function(){
        sliderWidth = $('#slider-wrap').width()
        $('#slider-wrap ul#slider').width(sliderWidth*totalSlides);
        $('#slider-wrap ul#slider').css('transform', `translate3d(-${sliderWidth*pos}px, 0px, 0px)`); 
    });
    $( window ).bind( "orientationchange", function( event ) {
        sliderWidth = $('#slider-wrap').width()
        $('#slider-wrap ul#slider').width(sliderWidth*totalSlides);
        $('#slider-wrap ul#slider').css('transform', `translate3d(-${sliderWidth*pos}px, 0px, 0px)`); 
    });

});




function slideRight(){
    pos++;
    if(pos==totalSlides){ pos = 0; }
    //$('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 
    $('#slider-wrap ul#slider').css('transform', `translate3d(-${sliderWidth*pos}px, 0px, 0px)`); 
}