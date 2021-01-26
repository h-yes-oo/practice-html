$(document).ready(function(){
    $('#header').append('<div id="dimmedUpper"></div>');
    var offCover = {
        layout : function(){
            if ($('html').hasClass('modal')) {
                setTimeout(function(){
                    $('#purchaseModal').css({'visibility':'visible', 'display':'flex','z-index':200});
                    $('#dimmedUpper').toggle();
                }, 200);
            } else {
                setTimeout(function(){
                    $('#dimmedUpper').toggle();
                    $('#purchaseModal').css({'visibility':'', 'display':'none','z-index':-100});
                }, 200);
            }
        }
    };

    $('#modalTrigger').click(function(e){
        $('html').toggleClass('modal');
        offCover.layout();
        e.preventDefault();
    });

    $('#dimmedUpper').click(function(e){
        if ($('html').hasClass('modal')) {
            $('#modalTrigger').trigger('click');
        }
        e.preventDefault();
    });
});