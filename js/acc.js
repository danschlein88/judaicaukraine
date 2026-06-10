let scrollPosition = 0;

function isMobileView() {
    return window.matchMedia('(max-width: 767px)').matches;
}

function openAccount() {
    scrollPosition = $(window).scrollTop();

    $('body')
        .addClass('no-scroll')
        .css('top', `-${scrollPosition}px`);

    $('.account__overlay').addClass('account__overlay_active');
    $('.account__block').addClass('account__block_active');
}

function closeAccount() {
    if (!$('.account__block').hasClass('account__block_active')) return;

    $('.account__overlay').removeClass('account__overlay_active');
    $('.account__block').removeClass('account__block_active');

    $('body')
        .removeClass('no-scroll')
        .css('top', '');

    $(window).scrollTop(scrollPosition);
}

function toggleAccountPopup() {
    $('.account-popup').toggleClass('account-popup_active');
}

function closeAccountPopup() {
    $('.account-popup').removeClass('account-popup_active');
}

$('#user-id').on('click', function(e) {
    if ($(e.target).closest('.account-popup').length) {
        return;
    }

    e.preventDefault();

    if (isMobileView()) {
        closeAccountPopup();

        if ($('.account__block').hasClass('account__block_active')) {
            closeAccount();
        } else {
            openAccount();
        }
    } else {
        closeAccount();
        toggleAccountPopup();
    }
});

$('.account__overlay').on('click', function() {
    closeAccount();
});

$(document).on('click', function(e) {
    const clickedOnUser = $(e.target).closest('#user-id').length;
    const clickedInsidePopup = $(e.target).closest('.account-popup').length;

    if (!clickedOnUser && !clickedInsidePopup) {
        closeAccountPopup();
    }
});