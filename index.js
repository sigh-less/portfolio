$('.js-home').click(function (e) {
    e.preventDefault();
    $('.home').show();
    $('.portfolio').hide();
    $('.contact').hide();
	/*console.log("Clicked!"); */
});

$('.js-portfolio').click(function (e) {
    e.preventDefault();
    $('.home').hide();
    $('.portfolio').show();
    $('.contact').hide();
	/*console.log("Clicked!"); */
});

$('.js-about').click(function (e) {
    e.preventDefault();
    $('.home').hide();
    $('.portfolio').hide();
    $('.contact').show();
	/*console.log("Clicked!"); */
});
