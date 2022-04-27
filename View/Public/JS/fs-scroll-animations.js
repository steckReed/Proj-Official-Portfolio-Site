
    //constantly grabs the center of the screen to be used in checking whether an element is on screen
    var sa_CenterScreenCalc;
    function scrollAnimationActivate() { sa_CenterScreenCalc = $(window).scrollTop() + ($(window).height() / 2); }

    function scrollAnimationGetWindow(sa_TopEleId, sa_BottomEleId){
        try  { var sa_TopEleIndicator = $(sa_TopEleId).offset().top; }
        catch{ var sa_TopEleIndicator = 0; }
        
        var sa_BottomEleIndicator = $(sa_BottomEleId).offset().top + $(sa_BottomEleId).height();

        return (sa_BottomEleIndicator >= sa_CenterScreenCalc) && (sa_TopEleIndicator <= sa_CenterScreenCalc)
    }

    function scrollAnimation(sa_EleId, sa_TopEleId, sa_BottomEleId, sa_AnimationIn, sa_TimeDelay=300, sa_AnimationOut='') {
      setTimeout(() => { 
        if(scrollAnimationGetWindow(sa_TopEleId, sa_BottomEleId)) {
            $(sa_EleId).removeClass(sa_AnimationOut).addClass(sa_AnimationIn);
        }
      }, sa_TimeDelay);

      if(!scrollAnimationGetWindow(sa_TopEleId, sa_BottomEleId)){
          $(sa_EleId).removeClass(sa_AnimationIn).addClass(sa_AnimationOut);
      }
    }