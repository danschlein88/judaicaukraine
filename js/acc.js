$('#user-id').on('click', function(e) {
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    if (isMobile) {
        e.preventDefault();

        $('.account__overlay').toggleClass('account__overlay_active');
        $('.account__block').toggleClass('account__block_active');
    }

    // На desktop preventDefault не вызывается,
    // поэтому ссылка внутри <a href="/account"> сработает сама.
});

$('.account__overlay').on('click', function() {
    $('.account__overlay').removeClass('account__overlay_active');
    $('.account__block').removeClass('account__block_active');
});

