$('#menu__link-btn').on('click', function(e){
    e.preventDefault;
    $('.categories__block').toggleClass('categorie__box_active');
});


$(document).on('click', function(e) {
    if (
        !$(e.target).closest('#menu__link-btn').length &&
        !$(e.target).closest('.categories__block').length
    ) {
        $('.categories__block').removeClass('categorie__box_active');
    }
});