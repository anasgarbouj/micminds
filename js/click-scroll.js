$(document).ready(function() {
    var sectionArray = [1, 2, 3, 4, 5, 6, 7];

    function animateSection(section) {
        $(section).addClass('animate-section');
    }

    function updateActiveNavLink() {
        var scrollPos = $(document).scrollTop();

        $.each(sectionArray, function(index, value) {
            var sectionSelector = '#section_' + value;
            var section = $(sectionSelector);
            var sectionTop = section.offset().top - 83;
            var sectionBottom = sectionTop + section.height();

            // Check if the section is in the viewport
            if (scrollPos >= sectionTop - window.innerHeight * 0.3 && scrollPos < sectionBottom) {
                animateSection(section);
            }

            // Update navigation link state
            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                $('.navbar-nav .nav-item .nav-link').removeClass('active').addClass('inactive');
                $('.navbar-nav .nav-item .nav-link[href="' + sectionSelector + '"]').addClass('active').removeClass('inactive');
            }
        });
    }

    // Scroll Event
    $(document).scroll(function() {
        updateActiveNavLink();
    });

    // Click Event for Navigation Links
    $('.click-scroll').click(function(e) {
        e.preventDefault();
        var sectionID = $(this).attr('href');
        var offsetTop = $(sectionID).offset().top - 83;
        
        $('html, body').animate({
            'scrollTop': offsetTop
        }, 300, function() {
            animateSection(sectionID);
            updateActiveNavLink(); // Update active link after scrolling
        });
    });

    // Initial call to add animation to the first section on page load
    animateSection('#section_1');
    
});
