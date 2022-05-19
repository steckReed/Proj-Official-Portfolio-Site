$( document ).ready(function() {
  var contianer     = $('#project-showcase-fs-mixin-contianer');
  var test     = $('#project-showcase-fs-mixin-cover-learn-more-btn');

  
  
  
  // Event Listeners
    contianer.hover(
      function() { 
        test.css('visibility','visible');
      },
      function() {
        test.css('visibility','hidden');
      }
    );
  // Event Listeners

});