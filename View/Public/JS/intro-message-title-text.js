$( document ).ready(function() {
  var introMessageTitleTextContainer = $('#intro-message-title-text-container');
  var introMessageTitleTextA         = $('.intro-message-title-text-a');
  var introMessageTitleMobileClick   = $('#intro-message-title-mobile-click');

  // Mobile Click
    introMessageTitleMobileClick.click(
      function() {
        introMessageTitleTextContainer.addClass('intro-message-title-text-container-hover');
        introMessageTitleTextA.css('grid-row', 'unset');
        introMessageTitleTextA.removeClass('slide-in-top-title-text');
        introMessageTitleMobileClick.css('display', 'none');
      }
    );
  // Mobile Click

  // Item Grid Rows (Set/Unset)
    introMessageTitleTextContainer.hover(
      function() {
        introMessageTitleTextContainer.addClass('intro-message-title-text-container-hover');
        introMessageTitleTextA.css('grid-row', 'unset');
        introMessageTitleTextA.removeClass('slide-in-top-title-text');
      },
      function() { 
        introMessageTitleTextContainer.removeClass('intro-message-title-text-container-hover');
        introMessageTitleTextA.css('grid-row', '1'); 
        introMessageTitleMobileClick.css('display', 'block');
      }
    );
  // Item Grid Rows

  // Display Last Hovered Item
    introMessageTitleTextA.hover(
      function() { $( this ).css('z-index', '3'); },
      function() {
        introMessageTitleTextA.css('z-index', 'unset');
        $( this ).css('z-index', '2');
      }
    );
  // Display Last Hovered Item
});