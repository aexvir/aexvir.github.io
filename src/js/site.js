(function(){
    const pageContainer = $('#page-container');
    const mobileMediaQuery = window.matchMedia('only screen and (max-width: 767px)');

    function replacePageContent(page, fromHome, onHiddenCallback) {
        TweenMax.to(pageContainer, (fromHome ? 0 : .5), {ease: Power4.easeOut, y: '+=25', opacity: 0, onComplete: function () {
            pageContainer.html($('#' + page).html())
            pageContainer.scrollTop(0);
            pageContainer.css('background-image', 'none');
            if(typeof onHiddenCallback === 'function')
                onHiddenCallback();
            TweenMax.to('#page-container', .5, {ease: Power4.easeOut, y: '-=25', opacity: 1});
        }});
    }

    function slideCoverUp(reverse, callback) {
        TweenMax.to($('#av-logo'), 1, {ease: Power4.easeOut, scale: (reverse ? 1 : 0.2), top: (reverse ? '50%' : '2rem')});
        TweenMax.to($('#menu .spacer'), 1, {ease: Power4.easeOut, width: (reverse ? '0' : '100%')});
        TweenMax.to($('#page-cover'), 0.5, {y: (reverse ? '0%' : '-100%'), display: (reverse ? 'block' : 'none'), onComplete: callback});
        $('#av-logo').toggleClass('reduced', !reverse)
    }

    function scrollHero() {
        var scrollVar = $('#page-container').scrollTop().toFixed(2);

        if(scrollVar < 500) {
            var opacity = Math.max((100 - .5 * scrollVar)/100, 0);
            
            var menuStyling = {
                'background': 'rgba(35, 35, 35, ' + (1 - opacity - .15) + ')'
            }
            
            if (Modernizr.backdropfilter) {
                menuStyling = {
                    'background': 'rgba(35, 35, 35, ' + (1 - opacity - .25) + ')',
                    'backdrop-filter': 'blur(' + (scrollVar/50) + 'px)'
                }
            }

            $('#menu').css(menuStyling);
        }
    }

    function accessDirectory(dir) {
        return 0;
    }

    $(document).on('click', '.directory', function() {
        var clickedElement = $(this);
        var currentPage = pageContainer.data('contains');
        var newPage = clickedElement.data('dir');
        $('.selected.directory').removeClass('selected');
        clickedElement.addClass('selected');

        if(currentPage !== newPage) {
            if(currentPage === 'home') {
                if(newPage === 'about') {
                    slideCoverUp(false, function () {
                        replacePageContent(newPage, true, function () {
                            pageContainer.css('background-image', 'linear-gradient(0deg, rgba(24,24,24,1) 20%, rgba(22,22,22,0.85) 50%, rgba(22,22,22,0.75) 100%), url(' + $('#' + newPage).data('background') + ')');
                        });
                    });
                } else {
                    slideCoverUp(false, function () {
                        replacePageContent(newPage, true);
                    });
                }
            } else if (newPage === 'home') {
                replacePageContent(newPage);
                slideCoverUp(true);
            } else if (newPage === 'about') {
                replacePageContent(newPage, false, function () {
                    pageContainer.css('background-image', 'linear-gradient(0deg, rgba(24,24,24,1) 20%, rgba(22,22,22,0.85) 50%, rgba(22,22,22,0.75) 100%), url(' + $('#' + newPage).data('background') + ')');
                });
            } else {
                replacePageContent(newPage);
            }
            pageContainer.data('contains', newPage);
        }
    });

    $(document).on('click', '.project', function () {
        var clickedProject = $(this);
        $('#dynamic').load('/static/html/' +clickedProject.data('content'));
        replacePageContent('dynamic', false, function () {
            pageContainer.css('background-image', 'linear-gradient(0deg, rgba(24,24,24,1) 20%, rgba(22,22,22,0.85) 50%, rgba(22,22,22,0.75) 100%), url(' + clickedProject.data('background') + ')');
            $('#dynamic').empty();
            var projectGallery = new Swiper ('.swiper-container', {
                direction: 'horizontal',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
            });
            $('.gallery>.swiper-container>.button').click(function() {
                var clickedButton = $(this);
                if(clickedButton.hasClass('next')) {
                    projectGallery.slideNext();
                } else {
                    projectGallery.slidePrev();
                }
            });
        });
        pageContainer.data('contains', 'dynamic');
    });

    function responsiveFeatureToggle() {
        if(mobileMediaQuery.matches) {
            pageContainer.unbind('scroll');
            $('#menu-trigger').click(function () {
                TweenMax.to('#menu', .75, {ease: Power4.easeOut, y: 0});
            });
            const resumeHeader = $('#about').find('.content>.header');
            $('#about>.resume>.sidebar>.photo').append(resumeHeader);
            $('.gist>.experience').each(function (i, e) {
                const dateRange = $(e).find('.daterange').detach();
                $(e).find('.title>.name').before(dateRange);
            });
        } else {
            pageContainer.scroll(function(){
                window.requestAnimationFrame(scrollHero);
            });
            const resumeHeader = $('#about>.resume>.sidebar>.photo').find('.header');
            $('#about').find('.content>.gist').before(resumeHeader);
            $('.gist>.experience').each(function (i, e) {
                const dateRange = $(e).find('.daterange').detach();
                $(e).find('.essence').before(dateRange);
            });
        }
    }

    mobileMediaQuery.addListener(responsiveFeatureToggle);

    responsiveFeatureToggle();

    // Logo animation
    TweenMax.set('#av-logo', {x: '-50%', y: '-50%', left: '50%', top: '50%'});
    TweenMax.to($('#av-logo img'), 4, {delay: 0.5, ease: Elastic.easeOut.config( 1.5, 0.25), rotationX: 0});
    TweenMax.to($('#menu'), .75, {delay: 0.5, ease: Power4.easeOut, top: 0, opacity: 1});
})();