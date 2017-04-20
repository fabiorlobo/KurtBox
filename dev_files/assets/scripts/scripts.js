/* * * * * * * * * * * * * *
	ANCHORIFIC
* * * * * * * * * * * * * */

$('.content').anchorific({
    navigation: '.links'
});

/* * * * * * * * * * * * * *
	MENU
* * * * * * * * * * * * * */

$('.menu-button').click(function () {
    $('body').toggleClass('menu-open');
});

$('a[href^="#"]').click(function(){
    var the_id = $(this).attr("href");

    $('html, body').animate({
        scrollTop:$(the_id).offset().top
    }, 333);

    return false;
});
