var animationSpeed = 80;

setInterval(function() {
    var container = $('.animatedBkg svg'),
        items = container.find('polyline'),
        numberOfItems = items.length,
        randomSel;

    function randomSel() {
        return Math.floor((Math.random() * numberOfItems));
    };

    items.eq(randomSel()).attr('class', 'animFadeIn');
    items.eq(randomSel()).attr('class', 'animFadeOut');
}, animationSpeed);
