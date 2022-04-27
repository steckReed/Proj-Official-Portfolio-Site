    var sa_CenterScreenCalc;
    function scrollAnimationActivate() { sa_CenterScreenCalc = $(window).scrollTop() + ($(window).height() / 2); }

    function scrollAnimationGetWindow(sa_TopEleId, sa_BottomEleId){
        try  { var sa_TopEleIndicator = $(sa_TopEleId).offset().top; }
        catch{ var sa_TopEleIndicator = 0; }
        var sa_BottomEleIndicator = $(sa_BottomEleId).offset().top + $(sa_BottomEleId).height();

        return (sa_BottomEleIndicator >= sa_CenterScreenCalc) && (sa_TopEleIndicator <= sa_CenterScreenCalc)
    }

    // https://stackoverflow.com/questions/24596027/javascript-only-using-specific-parameter-in-function
    // https://stackoverflow.com/questions/11796093/is-there-a-way-to-provide-named-parameters-in-a-function-call-in-javascript
    function scrollAnimation(sa_EleId, sa_TopEleId, sa_AnimationIn, sa_TimeDelay=300, sa_AnimationOut='',  sa_BottomEleId='body', sa_RemoveAnimation=0) {
      setTimeout(function(){ 
        if(scrollAnimationGetWindow(sa_TopEleId, sa_BottomEleId)) {
            $(sa_EleId).removeClass(sa_AnimationOut).addClass(sa_AnimationIn);
        }
      }, sa_TimeDelay);

      if(sa_RemoveAnimation){ // Extra if to remove potentially un-needed calc
        if(!scrollAnimationGetWindow(sa_TopEleId, sa_BottomEleId)) {
            $(sa_EleId).removeClass(sa_AnimationIn).addClass(sa_AnimationOut);
        }
      }
    }