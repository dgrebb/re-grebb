(function() {

    var $document = $(document);
    var $mainStoryImg = $('.main-story img')

    // mobile nav
    $('[data-res-navigation-activator]').on('click', function() {
        var $activator = $(this);
        $activator.toggleClass('res-nav-activator--active');
        $activator.next('.res-nav-list').toggleClass('res-nav-list--active');
    })

    // image swap
    var imageSwap = function(e) {
        e.preventDefault();
        var $this = $(this);

        // get main image's new values
        var primarySrcset = $this.attr('data-srcset-primary');
        var secondarySrcset = $this.attr('data-srcset-secondary');

        // get secondary, clicked image's new values
        var primarySwapSrc = $mainStoryImg.attr('data-srcset-primary');
        var secondarySwapSrc = $mainStoryImg.attr('data-srcset-secondary');

        // set the main image's new values
        $mainStoryImg.attr('srcset', primarySrcset);
        $mainStoryImg.attr('data-srcset-primary', primarySrcset);
        $mainStoryImg.attr('data-srcset-secondary', secondarySrcset);

        // set the secondary, clicked image's new values
        $this.attr('srcset', secondarySwapSrc);
        $this.attr('data-srcset-primary', primarySwapSrc);
        $this.attr('data-srcset-secondary', secondarySwapSrc);

    }

    $document.on('click', '.sub-story img', imageSwap);

})();