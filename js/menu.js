let menuScrollPosition = 0;

function openCategoriesMenu() {
    menuScrollPosition = $(window).scrollTop();

    $('body')
        .addClass('no-scroll')
        .css('top', `-${menuScrollPosition}px`);

    $('.categories__block').addClass('categorie__box_active');
}

function closeCategoriesMenu() {
    $('.categories__block').removeClass('categorie__box_active');

    $('body')
        .removeClass('no-scroll')
        .css('top', '');

    $(window).scrollTop(menuScrollPosition);
}

$('#menu__link-btn').on('click', function(e) {
    e.preventDefault();

    if ($('.categories__block').hasClass('categorie__box_active')) {
        closeCategoriesMenu();
    } else {
        openCategoriesMenu();
    }
});

$(document).on('click', function(e) {
    const clickOnButton = $(e.target).closest('#menu__link-btn').length;
    const clickInsideMenu = $(e.target).closest('.categories__block').length;

    if (!clickOnButton && !clickInsideMenu) {
        if ($('.categories__block').hasClass('categorie__box_active')) {
            closeCategoriesMenu();
        }
    }
});