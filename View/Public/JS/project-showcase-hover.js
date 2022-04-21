$( document ).ready(function() {
  var projectShowcaseItemContainer     = $('.project-showcase-item-container');
  var projectShowcaseItem              = $('.project-showcase-item');
  var projectShowcaseItemDescContainer = $('.project-showcase-item-desc-container');
  

  // Event Listeners
    projectShowcaseItemContainer.hover(
      function() { 
        var thisElement = $( this );
        var thisProjectShowcaseItem = thisElement.children('iframe');
        var thisProjectShowcaseItemDescContainer = thisElement.children('div');
        
        thisProjectShowcaseItemDescContainer.addClass('slide-in-right-showcase');
        projectShowcaseItem.addClass('project-showcase-item-mini');
        thisProjectShowcaseItem.addClass('project-showcase-item-hover');
        thisElement.css('z-index', '2');
      },
      function() {
        projectShowcaseItemDescContainer.removeClass('slide-in-right-showcase');
        projectShowcaseItemDescContainer.css('width', '0px');
        // projectShowcaseItemDescContainer.css('display', 'none');
        // projectShowcaseItemDescContainer.css('z-index', '-1');
        projectShowcaseItem.removeClass('project-showcase-item-mini project-showcase-item-hover');
        projectShowcaseItemContainer.css('z-index', 'unset');
      }
    );
  // Event Listeners
});