$( document ).ready(function() {
  var projectShowcaseItemContainer = $('.project-showcase-item-container');
  var projectShowcaseItem          = $('.project-showcase-item');

  // Event Listeners
    projectShowcaseItemContainer.hover(
      function() { 
        projectShowcaseItem.addClass('project-showcase-item-mini');
        projectShowcaseItemContainer.css('z-index', 'unset');
        $( this ).css('z-index', '2'); 
      },
      function() {
        projectShowcaseItem.removeClass('project-showcase-item-mini');
        projectShowcaseItemContainer.css('z-index', 'unset');
      }
    );
  // Event Listeners
});