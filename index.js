$('.js-home').click(function (e) {
    e.preventDefault();
    $('.home').show();
    $('.portfolio').hide();
    $('.about').hide();
	/*console.log("Clicked!"); */
});

$('.js-portfolio').click(function (e) {
    e.preventDefault();
    $('.home').hide();
    $('.portfolio').show();
    $('.about').hide();
	/*console.log("Clicked!"); */
});

$('.js-about').click(function (e) {
    e.preventDefault();
    $('.home').hide();
    $('.portfolio').hide();
    $('.about').show();
	/*console.log("Clicked!"); */
});

/*  
May implement something later with picture of dogs, was not in original plans but was suggested
$('.js-dogs').click(function (e) {
    $('.js-dogs').toggle();
}); */