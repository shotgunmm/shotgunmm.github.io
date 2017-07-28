var offLeft = '',
    offerWdt = $('#pss').outerWidth(true),
    leftPos = offLeft + offerWdt,
    carousel = '',
    bxslidevar = '',
    prevactive = '';

$(document).ready(function() {
    allevents();
});



function allevents() {

    // waterwheelCarousel
    if ($("#carousel").length > 0) {
        carousel = $("#carousel").waterwheelCarousel({
            flankingItems: 3,
            separation: 250,
            movingToCenter: function($item) {
                $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
            },
            movedToCenter: function($item) {
                $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
            },
            movingFromCenter: function($item) {
                $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
            },
            movedFromCenter: function($item) {
                $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
            },
            clickedCenter: function($item) {
                $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
            }
        });

        $('#prev').bind('click', function() {
            carousel.prev();
            return false
        });

        $('#next').bind('click', function() {
            carousel.next();
            return false;
        });

        $('#reload').bind('click', function() {
            newOptions = eval("(" + $('#newoptions').val() + ")");
            carousel.reload(newOptions);
            return false;
        });
    }
}
