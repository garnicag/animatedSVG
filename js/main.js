var animationSpeed = 80;

setInterval(function() {
    var container = $('.animatedBkg svg'),
        items = container.find('polyline'),
        numberOfItems = items.length;

    function randomSel() {
        return Math.floor(Math.random() * numberOfItems);
    };

    function randomColor() {
    	return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };

    items.eq(randomSel()).attr('class', 'animFadeIn').attr('fill', randomColor());
    items.eq(randomSel()).attr('class', 'animFadeOut');

}, animationSpeed);