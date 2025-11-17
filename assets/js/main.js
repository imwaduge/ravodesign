(function ($) {
  ("use strict");

  /*
|--------------------------------------------------------------------------
| Ravo Design
|--------------------------------------------------------------------------
|--------------------------------------------------------------------------
| TABLE OF CONTENTS:
|--------------------------------------------------------------------------
| 1. Preloader
| 2. Mobile Menu
| 3. Sticky Header
| 4. Dynamic Background
| 5. Slick Slider
| 6. Isotop Initialize
| 7. Modal Video
| 8. Accordian
| 9. Social Button Hover
| 10. Light Gallery
| 11. Scroll Up
| 12. Full Screen SwiperSlider
| 13. Button Hover Move  Animation
| 14. Register GSAP
| 15. Config GSAP
| 16. Cursor Moving
| 17. Hero text Animation
| 18. Text Typing Animation
| 19. Words Typing Animation
| 20. Heading Title Animation
| 21. P tag text Animation
| 22. Blog section Animation
| 23. Startup Agency Animation
| 24. Stagger Text Up and Downs Animation
| 25. ShowsZoom Center Animation
| 26. ShowsLeftSide Animation
| 27. ShowsRightSide Animation
| 28. ShowsDown Animation
| 29. ShowsUp Animation
| 30. Funfact Counting Animation
| 31. Text  popup Animation


/*--------------------------------------------------------------
    Scripts initialization
--------------------------------------------------------------*/
  $.exists = function (selector) {
    return $(selector).length > 0;
  };

  $(document).ready(function () { // <-- මෙතන වෙනස් කළා
    $(window).trigger("scroll");
    $(window).trigger("resize");
    preloader();
  });

  $(function () {
    $(window).trigger("resize");
    mainNav();
    stickyHeader();
    dynamicBackground();
    swiperInit();

    modalVideo();
    hoverTab();

    scrollUp();
    fullScreenSwiperSlider();
  });

  $(window).on("scroll", function () {
    showScrollUp();
  });
  /*-------------------------------------------------
      1. preloader  
 --------------------------------------------------------------*/
  function preloader() {
    $(".cs_preloader_in").fadeOut();
    $(".cs_preloader").delay(150).fadeOut("slow");
  }

  /*--------------------------------------------------------------
                                                                                                                                            2. Mobile Menu
                                                                                                                                           --------------------------------------------------------------*/
  function mainNav() {
    $(".cs_nav").append('<span class="cs_munu_toggle"><span></span></span>');
    $(".menu-item-has-children").append(
      '<span class="cs_munu_dropdown_toggle"></span>'
    );

    
    $(".cs_munu_toggle").on("click", function () {
      $(this)
        .toggleClass("cs_toggle_active")
        .siblings(".cs_nav_list")
        .slideToggle();
    });





    $(".cs_munu_dropdown_toggle").on("click", function () {
      $(this).toggleClass("active").siblings("ul").slideToggle();
      $(this).parent().toggleClass("active");
    });

    $(".menu-item-has-black-section").append(
      '<span class="cs_munu_dropdown_toggle_1"></span>'
    );

    $(".cs_munu_dropdown_toggle_1").on("click", function () {
      $(this).toggleClass("active").siblings("ul").slideToggle();
      $(this).parent().toggleClass("active");
    });

    $(".cs_mode_btn").on("click", function () {
      $(this).toggleClass("active");
      $("body").toggleClass("cs_dark");
    });
    // Side Nav
    $(".cs_icon_btn").on("click", function () {
      $(".cs_side_header").addClass("active");
    });
    $(".cs_close, .cs_side_header_overlay").on("click", function () {
      $(".cs_side_header").removeClass("active");
    });
    //  Menu Text Split
    $(".cs_animo_links > li > a").each(function () {
      let xxx = $(this).html().split("").join("</span><span>");
      $(this).html(`<span class="cs_animo_text"><span>${xxx}</span></span>`);
    });
  }

  /*--------------------------------------------------------------
     3. Sticky Header
--------------------------------------------------------------*/
  function stickyHeader() {
    var $window = $(window);
    var lastScrollTop = 0;
    var $header = $(".cs_sticky_header");
    var headerHeight = $header.outerHeight() + 30;

    $window.scroll(function () {
      var windowTop = $window.scrollTop();

      if (windowTop >= headerHeight) {
        $header.addClass("cs_gescout_sticky");
      } else {
        $header.removeClass("cs_gescout_sticky");
        $header.removeClass("cs_gescout_show");
      }

      if ($header.hasClass("cs_gescout_sticky")) {
        if (windowTop < lastScrollTop) {
          $header.addClass("cs_gescout_show");
        } else {
          $header.removeClass("cs_gescout_show");
        }
      }

      lastScrollTop = windowTop;
    });
  }

  /*--------------------------------------------------------------
       4. Dynamic Background
-------------------------------------------------------------*/
  function dynamicBackground() {
    $("[data-src]").each(function () {
      var src = $(this).attr("data-src");
      $(this).css({
        "background-image": "url(" + src + ")",
      });
    });
  }

  /*--------------------------------------------------------------    
     5. Slick Slider
 --------------------------------------------------------------*/

  function swiperInit() {
    if ($.exists(".cs_slider_1")) {
      var swiper = new Swiper(".cs_slider_1", {
        loop: true,
        speed: 1000,
        autoplay: false,
        pagination: {
          el: ".cs_pagination",
          clickable: true,
        },
      });
    }
    if ($.exists(".cs_slider_2")) {
      var swiper = new Swiper(".cs_slider_2", {
        loop: true,
        speed: 1000,
        autoplay: false,
        pagination: {
          el: ".cs_pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".cs_swiper_button_next",
          prevEl: ".cs_swiper_button_prev",
        },
      });
    }
    if ($.exists(".cs_slider_3")) {
      var swiper = new Swiper(".cs_slider_3", {
        loop: true,
        speed: 1000,
        autoplay: false,
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: {
          el: ".cs_pagination",
          clickable: true,
        },
      });
    }
    if ($.exists(".cs_slider_4")) {
      var swiper = new Swiper(".cs_slider_4", {
        loop: true,
        speed: 1000,
        autoplay: true,
        pagination: {
          el: ".cs_pagination",
          clickable: true,
        },
      });
    }
    if ($.exists(".cs_slider_5")) {
      var swiper = new Swiper(".cs_slider_5", {
        loop: true,
        speed: 1000,
        autoplay: false,
        slidesPerView: "auto",
        centeredStartd: true,
        spaceBetween: 30,
        pagination: {
          el: ".cs_pagination",
          clickable: true,
        },
      });
    }
    if ($.exists(".cs_slider_6")) {
      var swiper = new Swiper(".cs_slider_6", {
        loop: true,
        speed: 1000,
        autoplay: false,
        slidesPerView: "auto",
        centeredStartd: true,
        spaceBetween: 30,
        pagination: {
          el: ".cs_pagination",
          clickable: true,
        },
      });
    }


    if ($.exists(".cs_horizontal_scrolls")) {
          var swiper = new Swiper(".cs_horizontal_scrolls", {
          loop: true,
          speed: 1000,
          slidesPerView: "auto",
          centeredSlides: true, // "centeredStartd" යන්න "centeredSlides" ලෙස නිවැරදි කළා
          autoplay: {
          delay: 3000, // තත්පර 3කට වරක් swipe වීම
          disableOnInteraction: false, // User interact කළත් auto-play නතර නොවීම
        },
        pagination: {
          el: ".cs_pagination",
          clickable: true,
        },
      });
    }


    /*if ($.exists(".cs_horizontal_scrolls")) {
      var swiper = new Swiper(".cs_horizontal_scrolls", {
        loop: true,
        speed: 1000,
        autoplay: false,
        slidesPerView: "auto",
        centeredStartd: true,
        pagination: {
          el: ".cs_pagination",
          clickable: true,
        },
      });
    } */
  }




  /*-------------------------------------------------------------
       6. Isotop Initialize
 --------------------------------------------------------------*/




// --- Consolidated Portfolio Initialization (FIX FOR ALL ISSUES) ---

// function isotopInit() {
//     // This function will now be empty, as we are moving its logic
// }

// $(window).on('load', function() {
//     // Check if the portfolio container exists
//     if ($.exists(".cs_isotop_items_details")) {
//         var $portfolioGrid = $(".cs_isotop_items_details");

//         // 1. Initialize Isotope Grid Layout first
//         var $isotopeInstance = $portfolioGrid.isotope({
//             itemSelector: '.cs_item',
//             layoutMode: 'fitRows',
//             percentPosition: true
//         });

//         // 2. Then, initialize the LightGallery Popup
//         lightGallery(document.getElementById('animated-thumbnails-gallery'), {
//             selector: '.cs_portfolio',
//             thumbnail: true,
//             animateThumb: false,
//             zoomFromOrigin: false,
//             allowMediaOverlap: true,
//             toggleThumb: true,
//             download: false,
//             controls: false,
//             counter: false,
//             backdropCloseable: true
//         });

//         // 3. Finally, activate the Category Filter Buttons
//         $('.cs_isotop_item_menu').on('click', 'li', function() {
//             var filterValue = $(this).attr('data-filter');
//             $(this).siblings('.active').removeClass('active');
//             $(this).addClass('active');
//             $isotopeInstance.isotope({ filter: filterValue });
//         });
        
//         // Failsafe to ensure layout is correct on tricky devices like the Pixel 5
//         setTimeout(function() {
//             $isotopeInstance.isotope('layout');
//         }, 100);
//     }

//     // Initialize the other isotope instance if it exists
//     if ($.exists(".cs_creative_protfolio_details")) {
//         var $creative_protfolio = $(".cs_creative_protfolio_details").isotope({});
//         $(".cs_creative_protfolio_menu").on("click", "li", function () {
//             var filterValue = $(this).attr("data-filter");
//             $creative_protfolio.isotope({
//                 filter: filterValue,
//             });
//         });
//     }
// });


// --- Consolidated Portfolio Initialization (with URL Hash Filtering) ---

function isotopInit() {
    // This function is intentionally left empty in the original file, 
    // as the logic is moved to the $(window).on('load') function.
}






// =================================================================================
// ===== START: PORTFOLIO CUSTOM "ALL" FILTER ORDER ================================
// =================================================================================

// "All" filter එකේදී පමණක් පෙන්විය යුතු පිලිවෙල මෙතන define කරන්න
var customAllOrder = [
    // --- 1 සිට 15 දක්වා: Logo, UI/UX, Graphic, Image යන සියල්ලම ---
    'logo1', 'uiux1', 'graphic1', 'image1',
    'logo2', 'uiux2', 'graphic2', 'image2',
    'logo3', 'uiux3', 'graphic3', 'image3',
    'logo4', 'uiux4', 'graphic4', 'image4',
    'logo5', 'uiux5', 'graphic5', 'image5',
    'logo6', 'uiux6', 'graphic6', 'image6',
    'logo7', 'uiux7', 'graphic7', 'image7',
    'logo8', 'uiux8', 'graphic8', 'image8',
    'logo9', 'uiux9', 'graphic9', 'image9',
    'logo10', 'uiux10', 'graphic10', 'image10',
    'logo11', 'uiux11', 'graphic11', 'image11',
    'logo12', 'uiux12', 'graphic12', 'image12',
    'logo13', 'uiux13', 'graphic13', 'image13',
    'logo14', 'uiux14', 'graphic14', 'image14',
    'logo15', 'uiux15', 'graphic15', 'image15', // uiux15 න් අවසන්

    // --- 16 සිට 28 දක්වා: UI/UX නැත. Logo, Graphic, Image ---
    'logo16', 'graphic16', 'image16',
    'logo17', 'graphic17', 'image17',
    'logo18', 'graphic18', 'image18',
    'logo19', 'graphic19', 'image19',
    'logo20', 'graphic20', 'image20',
    'logo21', 'graphic21', 'image21',
    'logo22', 'graphic22', 'image22',
    'logo23', 'graphic23', 'image23',
    'logo24', 'graphic24', 'image24',
    'logo25', 'graphic25', 'image25',
    'logo26', 'graphic26', 'image26',
    'logo27', 'graphic27', 'image27',
    'logo28', 'graphic28', 'image28', // image28 න් අවසන්

    // --- 29 සිට 40 දක්වා: UI/UX සහ Image නැත. Logo, Graphic ---
    'logo29', 'graphic29',
    'logo30', 'graphic30',
    'logo31', 'graphic31',
    'logo32', 'graphic32',
    'logo33', 'graphic33',
    'logo34', 'graphic34',
    'logo35', 'graphic35',
    'logo36', 'graphic36',
    'logo37', 'graphic37',
    'logo38', 'graphic38',
    'logo39', 'graphic39',
    'logo40', 'graphic40', // logo40 න් අවසන්

    // --- 41 සිට 60 දක්වා: Graphic පමණි ---
    'graphic41',
    'graphic42',
    'graphic43',
    'graphic44',
    'graphic45',
    'graphic46',
    'graphic47',
    'graphic48',
    'graphic49',
    'graphic50',
    'graphic51',
    'graphic52',
    'graphic53',
    'graphic54',
    'graphic55',
    'graphic56',
    'graphic57',
    'graphic58',
    'graphic59',
    'graphic60' // graphic60 න් අවසන්
];
















// =================================================================================
// ===== START: PORTFOLIO FILTER + LOAD MORE + PROGRESS LOADER ===================
// =================================================================================

$(window).on('load', function() {

    // Check if the portfolio container exists
    if ($.exists(".cs_isotop_items_details")) {
        var $portfolioGrid = $(".cs_isotop_items_details");
        var $filterMenu = $("#portfolio-filter-menu");
        var $loadMoreContainer = $('#load-more-container');
        var $loadMoreBtn = $('#load-more-btn');
        
        // --- NEW: Select Loader Elements ---
        var $loader = $('#portfolio-loader');
        var $percentageText = $('#portfolio-percentage');
        // --- END NEW ---

        // --- Load More Settings ---
        var itemsToShowInitially = 12; // මුලින් පෙන්වන ගණන
        var itemsToLoadOnClick = 6;   // Click කළ විට පෙන්වන ගණන
        // --------------------------

        

        // 1. Initialize Isotope Grid Layout first
        var $isotopeInstance = $portfolioGrid.isotope({
            itemSelector: '.cs_item',
            layoutMode: 'fitRows',
            percentPosition: true,
            transitionDuration: '0.8s',
            // --- NEW: Custom sort function එක එකතු කිරීම ---
            getSortData: {
              customAll: function(itemElem) {
                var dataId = $(itemElem).attr('data-id');
                var index = customAllOrder.indexOf(dataId); // උඩ හදපු array එකෙන් index එක හොයනවා
                return (index === -1) ? 999 : index; // හම්බුනේ නැත්නම් අන්තිමට දානවා
              }
            }
        });
        
        // --- NEW: Use imagesLoaded to track progress ---
        var imgLoad = $isotopeInstance.imagesLoaded();
        var totalImages = imgLoad.images.length;
        var loadedImages = 0;

        // Update percentage on 'progress'
        imgLoad.on('progress', function(instance, image) {
            loadedImages++;
            var percent = Math.floor((loadedImages / totalImages) * 100);
            $percentageText.text(percent + '%');
        });

        // --- NEW: Run setup code ONLY after ALL images are loaded ---
        imgLoad.on('always', function(instance) {
            
            // 1. Hide the loader
            $percentageText.text('100%');
            setTimeout(function() {
                $loader.fadeOut(500);
                $percentageText.fadeOut(500);
            }, 250); // Show 100% briefly before hiding

            // --- Load More Management Function ---
            function manageHiddenItems(filterValue) {
                var $items = $portfolioGrid.find('.cs_item');
                var $filteredItems;
                
                // --- MODIFIED: "All" filter එකට custom order එක අනුව $filteredItems සකස් කිරීම ---
                if (filterValue === '*') {
                    // customAllOrder array එකේ පිලිවෙලට $items ටික sort කරලා අලුත් jQuery object එකක් හදනවා
                    var sortedItems = $items.sort(function(a, b) {
                        var idA = $(a).attr('data-id');
                        var idB = $(b).attr('data-id');
                        var indexA = customAllOrder.indexOf(idA);
                        var indexB = customAllOrder.indexOf(idB);
                        
                        if (indexA === -1) indexA = 999; // හම්බුනේ නැත්නම් අන්තිමට
                        if (indexB === -1) indexB = 999; // හම්බුනේ නැත්නම් අන්තිමට
                        
                        return indexA - indexB;
                    });
                    $filteredItems = sortedItems;
                } else {
                    // අනිත් filter වලට සාමාන්‍ය විදියට $filteredItems සකස් කිරීම
                    $filteredItems = $items.filter(filterValue);
                }
                // ---------------------------------------------------------------------------------
                
                // 1. සියලුම items මුලින්ම 'hidden-item' class එක දමා සඟවයි (reset කිරීමට)
                $items.addClass('hidden-item');
                
                // 2. Filter වූ/Sort වූ items වලින්, මුලින් පෙන්විය යුතු ගණන (itemsToShowInitially) නැවත පෙන්වයි.
                $filteredItems.slice(0, itemsToShowInitially).removeClass('hidden-item');
                
                // 3. "Load More" button එක පෙන්වීම හෝ සඟවීම තීරණය කරයි.
                if ($filteredItems.length > itemsToShowInitially) {
                    $loadMoreContainer.fadeIn();
                } else {
                    $loadMoreContainer.fadeOut();
                }
            }


            // --- Load More Button Click Handler (MODIFIED) ---
            $loadMoreBtn.off('click').on('click', function(e) {
                e.preventDefault();
                
                var activeFilter = $filterMenu.find('li.active').attr('data-filter') || '*';

                // 1. Isotope ට පවසනවා ඊළඟ layout එකේදී කිසිඳු animation එකක් (0s) භාවිතා නොකරන ලෙස.
                $isotopeInstance.isotope({ transitionDuration: 0 });

                // 2. අලුතින් පෙන්විය යුතු items ටික සොයා ගනී.
                var $hiddenFilteredItems;
                
                // --- MODIFIED: "All" filter එකට custom order එක අනුව $hiddenFilteredItems සකස් කිරීම ---
                if (activeFilter === '*') {
                    var $hiddenItems = $portfolioGrid.find('.cs_item.hidden-item');
                    // customAllOrder array එකේ පිලිවෙලට $hiddenItems ටික sort කරලා අලුත් jQuery object එකක් හදනවා
                    var sortedHiddenItems = $hiddenItems.sort(function(a, b) {
                        var idA = $(a).attr('data-id');
                        var idB = $(b).attr('data-id');
                        var indexA = customAllOrder.indexOf(idA);
                        var indexB = customAllOrder.indexOf(idB);
                        
                        if (indexA === -1) indexA = 999;
                        if (indexB === -1) indexB = 999;
                        
                        return indexA - indexB;
                    });
                    $hiddenFilteredItems = sortedHiddenItems;
                } else {
                     // අනිත් filter වලට සාමාන්‍ය විදියට $hiddenFilteredItems සකස් කිරීම
                    $hiddenFilteredItems = $portfolioGrid.find('.cs_item.hidden-item').filter(activeFilter);
                }
                // ---------------------------------------------------------------------------------------

                var $itemsToReveal = $hiddenFilteredItems.slice(0, itemsToLoadOnClick);

                if ($itemsToReveal.length > 0) {
                    // 3. එම items වලින් 'hidden-item' class එක ඉවත් කරයි.
                    $itemsToReveal.removeClass('hidden-item');
                }
                
                // 4. --- MODIFIED: "All" filter එක නම්, custom sort එකත් එක්ක filter run කිරීම ---
                if (activeFilter === '*') {
                    $isotopeInstance.isotope({ filter: activeFilter, sortBy: 'customAll' });
                } else {
                    // අනිත් filter වලට sort කිරීමක් නැතුව (default order) filter run කිරීම
                    $isotopeInstance.isotope({ filter: activeFilter, sortBy: 'original-order' });
                }
                // ------------------------------------------------------------------------------
                
                // 5. Load කිරීමට තව items නැත්නම් button එක සඟවයි.
                if ($hiddenFilteredItems.length <= itemsToLoadOnClick) {
                    $loadMoreContainer.fadeOut();
                }

                // 6. Transition වේගය නැවත සාමාන්‍ය (0.8s) අගයට reset කිරීම
                setTimeout(function() {
                    $isotopeInstance.isotope({ transitionDuration: '0.8s' });
                }, 100); 

            });
            
            
            // 2. Then, initialize the LightGallery Popup
            lightGallery(document.getElementById('animated-thumbnails-gallery'), {
                selector: '.cs_portfolio',
                thumbnail: true,
                animateThumb: false,
                zoomFromOrigin: false,
                allowMediaOverlap: true,
                toggleThumb: true,
                download: false,
                controls: false,
                counter: false,
                backdropCloseable: true
            });

            // 3. Activate Category Filter Buttons (MODIFIED)
            $filterMenu.on('click', 'li', function() {
                var $this = $(this);
                var filterValue = $this.attr('data-filter');
                var newHash = $this.attr('data-hash');

                // Update active class
                $this.siblings('.active').removeClass('active');
                $this.addClass('active');

                // 1. Call the load-more manager to reset hidden items
                manageHiddenItems(filterValue); 

                // 2. --- MODIFIED: "All" filter එක නම්, custom sort එකත් එක්ක filter run කිරීම ---
                if (filterValue === '*') {
                    $isotopeInstance.isotope({ filter: filterValue, sortBy: 'customAll' });
                } else {
                    // අනිත් filter වලට sort කිරීමක් නැතුව (default order) filter run කිරීම
                    $isotopeInstance.isotope({ filter: filterValue, sortBy: 'original-order' });
                }
                // ------------------------------------------------------------------------------

                // Update URL hash without jumping
                if(history.pushState) {
                    history.pushState(null, null, '#' + newHash);
                } else {
                    window.location.hash = newHash;
                }
            });

            // 4. Function to read URL hash and trigger filter on page load (MODIFIED)
            function filterFromHash() {
                var hash = window.location.hash.replace('#', '');
                var filterValue = '*'; // Default filter
                var sortByValue = 'customAll'; // "All" filter එකට default sort එක
                
                if (hash && hash !== 'all') {
                    var $matchingFilter = $filterMenu.find('li[data-hash="' + hash + '"]');

                    if ($matchingFilter.length > 0) {
                        // Found a matching filter
                        filterValue = $matchingFilter.attr('data-filter');
                        sortByValue = 'original-order'; // අනිත් filter වලට default sort එක

                        // Update active class
                        $filterMenu.find('.active').removeClass('active');
                        $matchingFilter.addClass('active');

                        // Scroll to the portfolio section
                        var $section = $('#portfolio-grid-section');
                        if ($section.length > 0) {
                            $('html, body').animate({
                                scrollTop: $section.offset().top - 100 // -100 for sticky header offset
                            }, 500);
                        }
                    }
                }
                
                // --- MODIFIED: Page load එකේදීම අදාළ filter සහ sort එක apply කිරීම ---
                manageHiddenItems(filterValue);
                $isotopeInstance.isotope({ filter: filterValue, sortBy: sortByValue });
                // --------------------------------------------------------------------
            }

            // Run the hash filter function on load
            filterFromHash();

            // Failsafe layout for tricky devices
            setTimeout(function() {
                $isotopeInstance.isotope('layout');
            }, 300); // Increased delay for safety

        }); // --- END: imagesLoaded 'always' event ---

    } // --- END: if ($.exists...
    

    // Initialize the other isotope instance if it exists
    if ($.exists(".cs_creative_protfolio_details")) {
        var $creative_protfolio = $(".cs_creative_protfolio_details").isotope({});
        $(".cs_creative_protfolio_menu").on("click", "li", function () {
            var filterValue = $(this).attr("data-filter");
            $creative_protfolio.isotope({
                filter: filterValue,
            });
        });
    }
});

// =================================================================================
// ===== END: PORTFOLIO FILTER + LOAD MORE LOGIC ===================================
// =================================================================================


















  /*--------------------------------------------------------------
         7. Modal Video
 --------------------------------------------------------------*/
  function modalVideo() {
    $(document).on("click", ".cs_video_open", function (e) {
      e.preventDefault();
      var video = $(this).attr("href");
      video = video.split("?v=")[1].trim();
      $(".cs_video_popup_container iframe").attr(
        "src",
        `https://www.youtube.com/embed/${video}`
      );
      $(".cs_video_popup").addClass("active");
    });
    $(".cs_video_popup_close, .cs_video_popup_layer").on("click", function (e) {
      $(".cs_video_popup").removeClass("active");
      $("html").removeClass("overflow-hidden");
      $(".cs_video_popup_container iframe").attr("src", "about:blank");
      e.preventDefault();
    });
  }

  /*--------------------------------------------------------------
         8. Accordian    
--------------------------------------------------------------*/

  $(".cs_accordeon .cs_accordion_body")
    .hide()
    .prev()
    .on("click", function () {
      $(this)
        .parents(".cs_accordeon")
        .find(".cs_accordion_body")
        .not(this)
        .slideUp()
        .prev()
        .removeClass("active cs_icon");
      $(this)
        .next()
        .not(":visible")
        .slideDown()
        .prev()
        .addClass("active cs_icon");
    });

  /*--------------------------------------------------------------
         9. Social Button Hover
--------------------------------------------------------------*/
  function hoverTab() {
    $(".cs_hover_tab").on("mouseenter", function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
  }

  // }
  /*--------------------------------------------------------------
       10. Light Gallery
--------------------------------------------------------------*/
  // function lightGalleryInit() {
  //   if ($.exists("#animated-thumbnails-gallery")) {
  //     lightGallery(document.getElementById("animated-thumbnails-gallery"), {
  //       animateThumb: false,
  //       zoomFromOrigin: false,
  //       allowMediaOverlap: true,
  //       toggleThumb: true,
  //     });
  //   }
  // }
  








// function lightGalleryInit() {
//   // For Portfolio Page Gallery
//   if ($.exists("#animated-thumbnails-gallery")) {
//     lightGallery(document.getElementById("animated-thumbnails-gallery"), {
//       selector: '.cs_portfolio',
//       thumbnail: true,
//       animateThumb: false,
//       zoomFromOrigin: false,
//       allowMediaOverlap: true,
//       toggleThumb: true,
//       download: false,
//       controls: false // FIX: මෙතනින් Next/Previous arrows ඉවත් කිරීම
//     });
//   }
// }


// --- Ravo Portfolio - LightGallery Final Configuration (with Backdrop Close) ---
function lightGalleryInit() {
  if ($.exists("#animated-thumbnails-gallery")) {
    
    // Initialize lightGallery on the main container
    lightGallery(document.getElementById("animated-thumbnails-gallery"), {
      selector: '.cs_portfolio',      // Which items to click
      thumbnail: true,              // Show thumbnails
      animateThumb: false,
      zoomFromOrigin: false,
      allowMediaOverlap: true,
      toggleThumb: true,
      download: false,              // Hide download button
      controls: false,              // Hide next/prev arrows
      counter: false,               // Hide image count
      backdropCloseable: true       // FIX: මෙතනින් background එක click කළාම close වීමට සලස්වයි
    });
  }
}










  /*--------------------------------------------------------------
      11. Scroll Up
--------------------------------------------------------------*/
  function scrollUp() {
    $(".cs_scrollup").on("click", function (e) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        0
      );
    });
  }

  function showScrollUp() {
    let scroll = $(window).scrollTop();
    if (scroll >= 350) {
      $(".cs_scrollup").addClass("cs_scrollup_show");
    } else {
      $(".cs_scrollup").removeClass("cs_scrollup_show");
    }
  }

  /*--------------------------------------------------------------
      12. Full Screen SwiperSlider
 --------------------------------------------------------------*/
  function fullScreenSwiperSlider() {
    if ($.exists(".cs_fullscreen_swiper_slider")) {
      var swiper = new Swiper(".cs_fullscreen_swiper_slider", {
        direction: "vertical",
        mousewheel: true,
        loop: true,
        speed: 1000,
        pagination: {
          el: ".cs_swiper_pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".cs_swiper_button_next",
          prevEl: ".cs_swiper_button_prev",
        },
      });
    }
  }

  /*--------------------------------------------------------------
       13. Button Hover Move  Animation
 --------------------------------------------------------------*/
  if ($.exists(".cs_hero_btn")) {
    $(".cs_hero_btn").on("mouseenter", function (e) {
      var x = e.pageX - $(this).offset().left;
      var y = e.pageY - $(this).offset().top;

      $(this).find("span").css({
        top: y,
        left: x,
      });
    });

    $(".cs_hero_btn").on("mouseout", function (e) {
      var x = e.pageX - $(this).offset().left;
      var y = e.pageY - $(this).offset().top;

      $(this).find("span").css({
        top: y,
        left: x,
      });
    });
    // Button Move Animation
    const all_btns = gsap.utils.toArray(".cs_round_btn_wrap");
    if (all_btns.length > 0) {
      var all_btn = gsap.utils.toArray(".cs_round_btn_wrap");
    } else {
      var all_btn = gsap.utils.toArray("#cs_round_btn_wrap");
    }
    const all_btn_cirlce = gsap.utils.toArray(".cs_hero_btn");
    all_btn.forEach((btn, i) => {
      $(btn).on("mousemove", function (e) {
        callParallax(e);
      });

      function callParallax(e) {
        parallaxIt(e, all_btn_cirlce[i], 80);
      }

      function parallaxIt(e, target, movement) {
        var $this = $(btn);
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;

        gsap.to(target, 0.5, {
          x: ((relX - $this.width() / 2) / $this.width()) * movement,
          y: ((relY - $this.height() / 2) / $this.height()) * movement,
          ease: Power2.easeOut,
        });
      }
      $(btn).on("mouseleave", function (e) {
        gsap.to(all_btn_cirlce[i], 0.5, {
          x: 0,
          y: 0,
          ease: Power2.easeOut,
        });
      });
    });
  }

  /*--------------------------------------------------------------
        14. Register GSAP
 --------------------------------------------------------------*/
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);

  /*--------------------------------------------------------------
         15. Config GSAP
 --------------------------------------------------------------*/
  gsap.config({
    nullTargetWarn: false,
  });

  const widthall = window.innerWidth;

  const smoother = ScrollSmoother.create({
    content: "#scrollsmoother-container",
    smooth: 1.2,
    normalizeScroll: widthall < 991 ? true : false,
    ignoreMobileResize: true,
    effects: widthall > 991 ? true : false,
    smoothTouch: true,
  });

  /*--------------------------------------------------------------
        16. Cursor Moving
 --------------------------------------------------------------*/

  function mousemoveHandler(e) {
    try {
      let tl = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        },
      });

      // Main Cursor Moving
      tl.to(".cs_cursor_1", {
        ease: "power2.out",
      }).to(
        ".cs_cursor_2",
        {
          ease: "power2.out",
        },
        "-=0.4"
      );
    } catch (error) {
      console.log(error);
    }
  }
  document.addEventListener("mousemove", mousemoveHandler);

  /*--------------------------------------------------------------
      17.Hero text Animation
 --------------------------------------------------------------*/

  let HomeDigital = gsap.timeline({});
  let mark = document.querySelector(".cs_hero .anim_banner_text_left");
  let eting = document.querySelector(".cs_hero .anim_banner_text_right");
  let cs_hero_style5_subtext = document.querySelector(".cs_hero .anim_subtext");

  let split_creatives = new SplitText(mark, {
    type: "chars,words",
  });
  let split_solutions = new SplitText(eting, {
    type: "chars,words",
  });
  let split_cs_hero_style5_subtext = new SplitText(cs_hero_style5_subtext, {
    type: "chars words",
  });

  HomeDigital.from(split_creatives.chars, {
    duration: 1.2,
    x: 100,
    autoAlpha: 0,
    stagger: 0.05,
  });
  HomeDigital.from(
    split_solutions.chars,
    {
      duration: 1,
      x: 100,
      autoAlpha: 0,
      stagger: 0.01,
    },
    "-=1"
  );

  HomeDigital.from(
    split_cs_hero_style5_subtext.words,
    {
      duration: 1,
      x: 50,
      autoAlpha: 0,
      stagger: 0.05,
    },
    "-=1"
  );

  /*--------------------------------------------------------------
            18. Text Typing Animation
--------------------------------------------------------------*/

  let textTextWrittings = gsap.utils.toArray(".anim_text_writting");
  textTextWrittings.forEach((splitTextLine) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitTextLine,
        start: "top 90%",
        end: "bottom 60%",
        scrub: false,
        markers: false,
        toggleActions: "play none none none",
      },
    });
    let textCharsWritting = new SplitText(splitTextLine, {
      type: "chars, words",
    });
    tl.from(
      textCharsWritting.chars,
      {
        duration: 0.5,
        x: 100,
        autoAlpha: 0,
        stagger: 0.1,
      },
      "-=1"
    );
  });

  /*--------------------------------------------------------------
        19. Words Typing Animation
 --------------------------------------------------------------*/

  let textWordWrittings = gsap.utils.toArray(".anim_word_writting");

  textWordWrittings.forEach((splitWordLine) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitWordLine,
        start: "top 90%",
        end: "bottom 60%",
        scrub: false,
        markers: false,
        toggleActions: "play none none none",
      },
    });
    let textWordWritting = new SplitText(splitWordLine, {
      type: "words",
    });
    tl.from(
      textWordWritting.words,
      {
        duration: 0.7,
        x: 100,
        delay: 0.5,
        autoAlpha: 0,
        stagger: 0.2,
      },
      "-=1"
    );
  });

  /*--------------------------------------------------------------
              20. Heading Title Animation
--------------------------------------------------------------*/

  let splitTitleLines = gsap.utils.toArray(".anim_heading_title");

  splitTitleLines.forEach((splitTextLine) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitTextLine,
        start: "top 90%",
        end: "bottom 20%",
        scrub: false,
        markers: false,
        toggleActions: "play none none none",
      },
    });
    const itemSplitted = new SplitText(splitTextLine, {
      type: "words, lines",
    });

    gsap.set(splitTextLine, {
      perspective: 400,
    });

    itemSplitted.split({
      type: "lines",
    });
    tl.from(itemSplitted.lines, {
      duration: 1,
      delay: 0.3,
      opacity: 0,
      rotationX: -80,
      force3D: true,
      transformOrigin: "top center -50",
      stagger: 0.1,
    });
  });

  let btnAnims = gsap.utils.toArray(".cs_btn_anim");
  btnAnims.forEach((btnAnim) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: btnAnim,
        start: "top 95%", /* Trigger animation 90% එක තව ටිකක් ඉක්මනට පටන් ගැනීම */
        end: "bottom 20%",
        scrub: false,
        markers: false,
        toggleActions: "play push none none",
      },
    });
    gsap.set(btnAnim, {
      opacity: 0,
      x: 100,
    });

    tl.to(btnAnim, {
      duration: 1,
      delay: 0.1, /* FIX: Delay අගය 0.8 සිට 0.1 දක්වා අඩු කිරීම */
      opacity: 1,
      x: 0, /* x අගය 0 කිරීම */
    });
  });

  /*--------------------------------------------------------------
   21. P tag text Animation
 --------------------------------------------------------------*/

  let splitTextLines = gsap.utils.toArray(".anim_text");

  splitTextLines.forEach((splitTextLine) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitTextLine,
        start: "top 90%",
        duration: 2,
        end: "bottom 60%",
        scrub: false,
        markers: false,
        toggleActions: "play none none none",
      },
    });

    const itemSplitted = new SplitText(splitTextLine, {
      type: "lines",
    });
    gsap.set(splitTextLine, {
      perspective: 400,
    });
    itemSplitted.split({
      type: "lines",
    });
    tl.from(itemSplitted.lines, {
      duration: 1,
      delay: 0.5,
      opacity: 0,
      rotationX: -80,
      force3D: true,
      transformOrigin: "top center -50",
      stagger: 0.1,
    });
  });

  /*--------------------------------------------------------------
   22. Blog section Animation
 --------------------------------------------------------------*/

  let blogAnim = gsap.utils.toArray(".anim_blog");
  gsap.set(blogAnim, {
    opacity: 0,
    y: -100,
    x: -100,
  });

  if (blogAnim) {
    blogAnim.forEach((item, i) => {
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: "top center+=200",
          markers: false,
        },
        opacity: 1,
        x: -0,
        y: -0,
        ease: "power2.out",
        duration: 2,
        stagger: 0.5,
      });
    });
  }

  /*--------------------------------------------------------------
    23. Startup Agency Animation
 --------------------------------------------------------------*/

  let cs_startup_agency = gsap.utils.toArray(".cs_startup_agency.cs_card");
  cs_startup_agency.forEach((cs_startup) => {
    gsap.set(cs_startup, {
      opacity: 0,
      x: +100,
    });

    gsap.to(cs_startup, {
      scrollTrigger: {
        trigger: cs_startup,
        start: "top center+=200",
        markers: false,
      },
      opacity: 1,
      x: -0,
      ease: "power2.out",
      duration: 2,
      stagger: {
        each: 0.4,
      },
    });
  });

  /*--------------------------------------------------------------
      24. Stagger Text Up and Downs Animation
 --------------------------------------------------------------*/

  let aminTextUpanddowns = gsap.utils.toArray(".anim_text_upanddowns");
  let aminTextUpanddownChar = new SplitText(aminTextUpanddowns, {
    type: "chars",
  });

  let textUpanddown = gsap.timeline({
    scrollTrigger: {
      trigger: aminTextUpanddowns,
      start: "top 90%",
      end: "bottom 60%",
      scrub: false,
      markers: false,
      toggleActions: "play none none none",
    },
  });

  textUpanddown.from(aminTextUpanddownChar.chars, {
    duration: 2,
    opacity: 0,
    delay: 0.5,
    scale: 1.2,
    stagger: 0.5,
    y: 50,
    rotationX: 100,
    transformOrigin: "0% 30% -30",
    ease: "elastic",
    stagger: 0.05,
  });

  /*--------------------------------------------------------------
         25. ShowsZoom Center Animation
 --------------------------------------------------------------*/

  let divShowsZoom = gsap.utils.toArray(".anim_div_ShowZoom");
  divShowsZoom.forEach((showsZoom) => {
    gsap.set(showsZoom, {
      opacity: 0,
      scale: 0,
    });

    gsap.to(showsZoom, {
      scrollTrigger: {
        trigger: showsZoom,
        start: "top 90%",
        end: "bottom 60%",
        markers: false,
      },
      opacity: 1,
      scale: 1,
      delay: 0.5,
      ease: "power3.out",
      duration: 1,
      stagger: 0.5,
    });
  });

  /*--------------------------------------------------------------
      26. ShowsLeftSide Animation
 --------------------------------------------------------------*/

  let divShowsLeftSide = gsap.utils.toArray(".anim_div_ShowLeftSide");
  divShowsLeftSide.forEach((showsLeft) => {
    gsap.set(showsLeft, {
      opacity: 0,
      x: -100,
    });

    gsap.to(showsLeft, {
      scrollTrigger: {
        trigger: showsLeft,
        start: "top 90%",
        end: "bottom 60%",
        markers: false,
      },
      opacity: 1,
      x: -0,
      ease: "power2.out",
      duration: 2,
      stagger: 0.5,
    });
  });

  /*--------------------------------------------------------------
      27. ShowsRightSide Animation
 --------------------------------------------------------------*/

  let divShowsRightSide = gsap.utils.toArray(".anim_div_ShowRightSide");
  divShowsRightSide.forEach((showsRight) => {
    gsap.set(showsRight, {
      opacity: 0,
      x: +100,
    });

    gsap.to(showsRight, {
      scrollTrigger: {
        trigger: showsRight,
        start: "top 90%",
        end: "bottom 60%",
        markers: false,
      },
      opacity: 1,
      x: -0,
      ease: "power2.out",
      duration: 2,
      stagger: 0.5,
    });
  });

  /*--------------------------------------------------------------
        28. ShowsDown Animation
 --------------------------------------------------------------*/

  let divShowsDowns = gsap.utils.toArray(".anim_div_ShowDowns");
  divShowsDowns.forEach((showsDown) => {
    gsap.set(showsDown, {
      opacity: 0,
      y: +100,
    });

    gsap.to(showsDown, {
      scrollTrigger: {
        trigger: showsDown,
        start: "top 90%",
        end: "bottom 60%",
        markers: false,
      },
      opacity: 1,
      y: -0,
      ease: "power2.out",
      duration: 2,
      stagger: 1,
    });
  });

  /*--------------------------------------------------------------
         29. ShowsUp Animation
 --------------------------------------------------------------*/

  let divShowsUps = gsap.utils.toArray(".anim_div_ShowUps");
  divShowsUps.forEach((showsUp) => {
    gsap.set(showsUp, {
      opacity: 0,
      y: -100,
    });

    gsap.to(showsUp, {
      scrollTrigger: {
        trigger: showsUp,
        start: "top 90%",
        end: "bottom 60%",
        markers: false,
      },
      opacity: 1,
      y: -0,
      ease: "power2.out",
      duration: 2,
      stagger: 0.5,
    });
  });

  /*--------------------------------------------------------------
         30. Funfact Counting Animation
 --------------------------------------------------------------*/
  const count_number = gsap.utils.toArray(".cs_funfact.cs_style1");
  const count_id = gsap.utils.toArray(".amin_auto_count");
  if (count_number) {
    count_id.forEach((num) => {
      gsap.from(num, {
        scrollTrigger: {
          trigger: num,
          start: "top center+=200",
          markers: false,
        },
        delay: 2,
        innerText: 0,
        duration: 3,
        snap: {
          innerText: 1,
        },
      });
    });
    gsap.from(count_number, {
      scrollTrigger: {
        trigger: count_number,
        start: "top center+=200",
        markers: false,
      },
      duration: 2,
      scale: 0.5,
      opacity: 0,
      delay: 0.5,
      stagger: 0.2,
      ease: "elastic",
      force3D: true,
    });
  }

  /*--------------------------------------------------------------
    31. Text  popup Animation
--------------------------------------------------------------*/

  let text_anim_top = gsap.utils.toArray(".anim_text_popup");

  text_anim_top.forEach((splitTextLine2) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitTextLine2,
        start: "top 90%",
        end: "bottom 60%",
        toggleActions: "play none none none",
      },
    });

    const itemSplitted = new SplitText(splitTextLine2, {
        type: "words",
      }),
      textNumWords = itemSplitted.words.length;

    gsap.delayedCall(0.05, function () {
      for (var i = 0; i < textNumWords; i++) {
        tl.from(
          itemSplitted.words[i],
          1,
          {
            force3D: true,
            scale: Math.random() > 0.5 ? 0 : 2,
            opacity: 0,
          },
          Math.random()
        );
      }
    });
  });

  /*--------------------------------------------------------------
       33. Lading pages btn
--------------------------------------------------------------*/

  let revealContainers = document.querySelectorAll(".reveal");

  revealContainers.forEach((container) => {
    let image = container.querySelector("img");
    console.log(image);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 90%",
        end: "bottom 10%",
        markers: false,
        toggleActions: "play none none none",
      },
    });

    tl.set(container, { autoAlpha: 1 });
    tl.from(container, 1.5, {
      xPercent: -100,
      duration: 2,
      ease: Power2.out,
    });
    tl.from(image, 1.5, {
      xPercent: 100,
      scale: 1.3,
      delay: -1.5,
      ease: Power2.out,
    });
  });
  /*--------------------------------------------------------------
       33. Lading pages btn
--------------------------------------------------------------*/
  if ($.exists(".cs_toggle")) {
    $("#open").on("click", function () {
      $(this).hide();
      $("#clecel").show();
      $(".setting_mode").css("right", "120px");
      $(".cs_mode_btn").css({
        right: "0",
      });
    });

    $("#clecel").on("click", function () {
      $(this).hide();
      $("#open").show();
      $(".setting_mode").css("right", "0");
      $(".cs_mode_btn").css({
        right: "-120px",
      });
    });

    $(".js-mode-type button").on("click", function (e) {
      $(this).addClass("active").siblings().removeClass("active");
      var mode_val = $(".js-mode-type button.active").attr("data-mode");
      if (mode_val == "dark") {
        $("body").addClass("dark");
      } else {
        $("body").removeClass("dark");
      }
    });
  }
  /*--------------------------------------------------------------
       32. Lading pages btn
--------------------------------------------------------------*/
  if ($.exists("#home-btn")) {
    const homeButton = document.querySelector("#home-btn");
    const sectionHome = document.querySelector("#home");
    homeButton.addEventListener("click", () => {
      gsap.to(window, {
        duration: 0.3,
        scrollTo: sectionHome,
      });
    });
    const pageButton = document.querySelector("#page-btn");
    const sectionInner = document.querySelector("#innerpages");
    pageButton.addEventListener("click", () => {
      gsap.to(window, {
        duration: 0.3,
        scrollTo: sectionInner,
      });
    });
    const featuresButton = document.querySelector("#features-btn");
    const sectionfeatures = document.querySelector("#features");
    featuresButton.addEventListener("click", () => {
      gsap.to(window, {
        duration: 0.3,
        scrollTo: sectionfeatures,
      });
    });
  }

  // End of use strict
})(jQuery);






// --- Ravo Interactive Sections: Services & Portfolio (FINAL) ---

$(document).ready(function() {

    // Function for Services Section
    function handleServiceInteraction() {
        var windowWidth = $(window).width();

        // DESKTOP: Hover functionality
        if (windowWidth > 991) {
            $('#interactive-services .service-header').off('click');
            var firstService = $('#interactive-services li:first-child');

            if (firstService.length > 0) {
                var firstImage = firstService.data('image');
                var firstTitle = firstService.data('title');
                var firstSubServices = firstService.find('.servicecontentsub').html(); // Get sub-services HTML

                if(firstImage) $('#service-image').attr('src', firstImage);
                if(firstTitle) $('#service-title').text(firstTitle);
                if(firstSubServices) $('#service-description').html(firstSubServices); // Use .html() to render list
            }

            $('#interactive-services li').off('mouseenter').on('mouseenter', function() {
                var newImage = $(this).data('image');
                var newTitle = $(this).data('title');
                var newSubServices = $(this).find('.servicecontentsub').html(); // Get sub-services HTML

                if(newImage) $('#service-image').attr('src', newImage);
                if(newTitle) $('#service-title').text(newTitle);
                if(newSubServices) $('#service-description').html(newSubServices); // Use .html() to render list
                
                $('#interactive-services li').removeClass('active');
                $(this).addClass('active');
            });
            
        } 
        // MOBILE: Accordion functionality
        else {
            $('#interactive-services li').off('mouseenter');
            
            $('#interactive-services li').each(function() {
                var mobileImgSrc = $(this).data('image-mobile');
                if (mobileImgSrc) {
                  $(this).find('.service-content img').attr('src', mobileImgSrc);
                }
            });

            $('#interactive-services .service-header').off('click').on('click', function() {
                var parentLi = $(this).closest('li');
                
                parentLi.siblings().removeClass('active').find('.service-content').slideUp();
                parentLi.toggleClass('active').find('.service-content').slideToggle();
            });
        }
    }

    // Function for Portfolio Section
    function handlePortfolioImages() {
        var windowWidth = $(window).width();

        $('.project_successfull .cs_portfolio').each(function() {
            var $this = $(this);
            var desktopImg = $this.attr('href');
            var mobileImg = $this.data('mobile-image');
            var $imgTag = $this.find('.cs_portfolio_img img');

            if (windowWidth <= 767 && mobileImg) {
                $imgTag.attr('src', mobileImg);
            } else {
                $imgTag.attr('src', desktopImg);
            }
        });
    }

    // Initialize functions on page load and resize
    if ($('#interactive-services').length) {
        handleServiceInteraction();
        $(window).on('resize', handleServiceInteraction);
    }
    if ($('.project_successfull').length) {
        handlePortfolioImages();
        $(window).on('resize', handlePortfolioImages);
    }

});











// --- Ravo Portfolio - Responsive Images ---

$(document).ready(function() {

    function handlePortfolioImages() {
        var windowWidth = $(window).width();

        $('.project_successfull .cs_portfolio').each(function() {
            var $this = $(this);
            var desktopImg = $this.attr('href');
            var mobileImg = $this.data('mobile-image');
            var $imgTag = $this.find('.cs_portfolio_img img');

            if (windowWidth <= 767 && mobileImg) {
                // Mobile view: use the mobile image
                $imgTag.attr('src', mobileImg);
            } else {
                // Desktop view: use the desktop image
                $imgTag.attr('src', desktopImg);
            }
        });
    }

    // Run on page load and on window resize
    if ($('.project_successfull').length) {
        handlePortfolioImages();
        $(window).on('resize', handlePortfolioImages);
    }

});












// --- Ravo Contact Form - AJAX Submission ---

$(document).ready(function() {
    
    // #contact-form එක submit කරනකොට මේ function එක run වෙනවා
    $('#contact-form').on('submit', function(e) {
        
        // Form එක redirect වෙන එක නවත්වනවා
        e.preventDefault(); 
        
        var form = $(this);
        var url = form.attr('action');
        var method = form.attr('method');
        var formData = form.serialize(); // Form එකේ data ටික එකතු කරගන්නවා
        var statusDiv = $('#form-status');
        var submitButton = form.find('button[type="submit"]');

        // Submit button එක disable කරලා, "Sending..." කියලා දානවා
        submitButton.prop('disabled', true).find('span').text('Sending...');

        // AJAX request එක යවනවා
        $.ajax({
            type: method,
            url: url,
            data: formData,
            dataType: 'json',
            success: function(response) {
                // Success වුනොත්...
                statusDiv.html('<p class="success">Thanks! Your message has been sent successfully.</p>').fadeIn();
                form.trigger("reset"); // Form එක clear කරනවා
                submitButton.prop('disabled', false).find('span').text('Send Now');

                // තත්පර 5කට පස්සේ success message එක fade out කරනවා
                setTimeout(function() {
                    statusDiv.fadeOut();
                }, 5000);
            },
            error: function(response) {
                // Error එකක් ආවොත්...
                statusDiv.html('<p class="error">Oops! Something went wrong. Please try again later.</p>').fadeIn();
                submitButton.prop('disabled', false).find('span').text('Send Now');

                // තත්පර 5කට පස්සේ error message එක fade out කරනවා
                setTimeout(function() {
                    statusDiv.fadeOut();
                }, 5000);
            }
        });
    });
});


























// --- Ravo Portfolio - Load More Button -------------------------------------------------------
// 
//  !!! THIS SCRIPT IS NOW DELETED !!!
//  The logic has been moved into the main `$(window).on('load', ...)` function
//  to integrate it with the Isotope filter.
//
// ---------------------------------------------------------------------------------------------
















// --- Consolidated Portfolio Initialization (FIX FOR ALL ISSUES) ---

// --- Isotope Layout Refresh FIX for Specific Mobile Devices ---
$(window).on('load', function() {
  if ($.exists(".cs_isotop_items_details")) {
    
    // Check if the screen width is less than 768px (mobile)
    if ($(window).width() < 768) {
      
      // A short delay to ensure the browser has fully rendered the page
      setTimeout(function() {
        // Force Isotope to re-calculate and apply the correct layout
        $('.cs_isotop_items_details').isotope('layout');
      }, 300); // Use a slightly longer delay for reliability
    }
  }
});