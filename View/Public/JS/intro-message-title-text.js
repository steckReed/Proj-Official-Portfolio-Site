$( document ).ready(function() {
  var introMessageTitleTextA = $('.intro-message-title-text-a'); // Get '.intro-message-title-text-a' Elements

  // Item Grid Rows (Set/Unset)
    $('#intro-message-title-text-container').hover(
      function() {
        introMessageTitleTextA.css('grid-row', 'unset');           // Unset grid rows of items
        introMessageTitleTextA.removeClass('slide-in-top-title-text');        // Remove Animation
      },
      function() { introMessageTitleTextA.css('grid-row', '1'); }, // Set grid rows of items
    );
  // Item Grid Rows

  // Display Last Hovered Item
    introMessageTitleTextA.hover(
      function() { $( this ).css('z-index', '3'); },               // Set item index to top
      function() {
        introMessageTitleTextA.css('z-index', 'unset');            // Unset all item indexs
        $( this ).css('z-index', '2');                             // Set last item hovered to top
      }
    );
  // Display Last Hovered Item
});