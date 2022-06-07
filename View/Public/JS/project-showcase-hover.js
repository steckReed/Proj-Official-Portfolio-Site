$( document ).ready(function() {
  var projectShowcaseItemContainer     = $('.project-showcase-item-container');
  var projectShowcaseItem              = $('.project-showcase-item');
  var projectShowcaseItemReferenceImg  = $('.project-showcase-item-reference-img');
  var projectShowcaseItemDescContainer = $('.project-showcase-item-desc-container');
  var projectShowcaseItemStackRibbon   = $('.project-showcase-item-stack-ribbon');
  

  // Event Listeners
    projectShowcaseItemContainer.hover(
      function() { 
        // iFrame Expand
          var thisElement = $( this );
          var thisProjectShowcaseItem = thisElement.children('iframe');
          projectShowcaseItem.addClass('project-showcase-item-mini');
          projectShowcaseItemReferenceImg.addClass('project-showcase-item-mini');
          thisProjectShowcaseItem.addClass('project-showcase-item-hover');
        // iFrame Expand
        
        // Display Stack Ribbon
          var thisProjectShowcaseItemStackRibbon = thisElement.children('div.project-showcase-item-stack-ribbon');
          thisProjectShowcaseItemStackRibbon.addClass('slide-in-top-stack-ribbon');
        // Display Stack Ribbon

        // Display Description
          var thisProjectShowcaseItemDescContainer = thisElement.children('div.project-showcase-item-desc-container');
          thisProjectShowcaseItemDescContainer.addClass('slide-in-right-showcase');
        // Display Description

        // z-index Showcase Update
          var nextShowcaseContainers = thisElement.nextAll('.project-showcase-item-container');
          var i = nextShowcaseContainers.length;
          thisElement.css('z-index', i+1);
          nextShowcaseContainers.each(function() { $(this).css('z-index',i); i--; });
        // z-index Showcase Update
      },
      function() {
        // Reset To Default
        projectShowcaseItemDescContainer.removeClass('slide-in-right-showcase');
        projectShowcaseItemDescContainer.css('width', '0px');
        projectShowcaseItem.removeClass('project-showcase-item-mini project-showcase-item-hover');
        projectShowcaseItemReferenceImg.removeClass('project-showcase-item-mini project-showcase-item-hover');
        projectShowcaseItemContainer.css('z-index', 'unset');
        projectShowcaseItemStackRibbon.removeClass('slide-in-top-stack-ribbon');
        projectShowcaseItemDescContainer.css('width', '0px');
      }
    );
  // Event Listeners

  $('.project-showcase-recreations-toggle').click(function () {
    var thisElement = $( this );
    thisElement.closest('.project-showcase-item-container').children('.project-showcase-item').toggleClass('dis-none');
    thisElement.closest('.project-showcase-item-container').children('.project-showcase-item-reference-img').toggleClass('dis-none');
  });
});