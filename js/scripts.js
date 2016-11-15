(function() {

    // mobile nav
    $('[data-res-navigation-activator]').on('click', function() {
        console.log('opening mobile nav');
        $(this).toggleClass('res-nav-activator--active');
        $(this).next('.res-nav-list').toggleClass('res-nav-list--active');
    })
})();