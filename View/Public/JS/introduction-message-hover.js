$( document ).ready(function() {
  var introMessageTitleTextContainer = $('#intro-message-title-text-container');
  var introMessageTitleTextA         = $('.intro-message-title-text-a');
  var introMessageTitleMobileClick   = $('#intro-message-title-mobile-click');

  // Functions
    function closeIntroContainer(){
      introMessageTitleTextContainer.removeClass('intro-message-title-text-container-hover');
      introMessageTitleTextA.css('grid-row', '1');  
      introMessageTitleMobileClick.css('display', 'block');
    }
    function expandIntroContainer(){
      introMessageTitleTextContainer.addClass('intro-message-title-text-container-hover');
      introMessageTitleTextA.css('grid-row', 'unset');
      introMessageTitleTextA.removeClass('slide-in-top-title-text');
    }
  // Functions

  // Event Listeners
    // Mobile Click
    introMessageTitleMobileClick.click(
      function() {
        expandIntroContainer();
        introMessageTitleMobileClick.css('display', 'none');
      }
    );

    // Item Grid Rows (Set/Unset)
    introMessageTitleTextContainer.hover(
      function() { expandIntroContainer(); },
      function() { closeIntroContainer(); }
    );

    // Display Last Hovered Item
      introMessageTitleTextA.hover(
        function() { 
          $( this ).css('z-index', '3');
          $( this ).children().addClass('intro-message-title-text-gradient');
        },
        function() {
          introMessageTitleTextA.css('z-index', 'unset');
          $( this ).css('z-index', '2');
          $( this ).children().removeClass('intro-message-title-text-gradient');
        }
      );
      introMessageTitleTextA.click(
        function() { 
          closeIntroContainer();

          introMessageTitleTextA.css('z-index', 'unset');
          $( this ).css('z-index', '2');
        }
      );
    // Display Last Hovered Item
  // Event Listeners
});