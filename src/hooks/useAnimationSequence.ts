import { AgileTimelineTicketsProps } from '@/types/types';
import { AnimationControls, AnimationDefinition } from 'framer-motion';
import { useRef, useEffect } from 'react';

const useAnimationSequence = (
  controlsArray: AnimationControls[],
  agileTimelineTickets: AgileTimelineTicketsProps[],
  startAnimOn: Map<string, boolean>
) => {
  const previousShouldStartAnimation = useRef<{ [key: string]: boolean }>({});

  useEffect(() => {
    async function runAnimationSequence(ele: AgileTimelineTicketsProps, controls: AnimationControls) {
      const eleAnimSequence = ele.animationSequence;

      if (eleAnimSequence.animations) {
        for (const step of eleAnimSequence.animations) {
          if (step.animate) {
            await controls.start(step.animate, step.transition);
          }
        }
      }
    }

    agileTimelineTickets.forEach((ele, index) => {
      const eleAnimSequence = ele.animationSequence;

      // Validate that animStartOn is set correctly
      if (!eleAnimSequence.animStartOn || !startAnimOn.has(eleAnimSequence.animStartOn)) {
        console.warn('Warning: Please set `animStartOn` correctly when using useAnimationSequence');
        return;
      }

      const shouldStartAnimation  = startAnimOn.get(eleAnimSequence.animStartOn) ?? false;
      const previousState         = previousShouldStartAnimation.current[index] || false;

      if (shouldStartAnimation !== previousState) {
        const controls = controlsArray[index];

        // Handle transitioning from false to true
        if (shouldStartAnimation) {
          if (eleAnimSequence.initial) {
            controls.start(eleAnimSequence.initial as AnimationDefinition);
            
          } else {
            controls.start({ opacity: 1 });
          }

          runAnimationSequence(ele, controls);
        }

        // Handle transitioning from true to false
        else {
          if (eleAnimSequence.exit) {
            controls.start(eleAnimSequence.exit);

          } else if (eleAnimSequence.initial) {
            controls.start(eleAnimSequence.initial as AnimationDefinition);
            
          } else {
            controls.start({ opacity: 0 });
          }
        }

        // Update the previous state for this specific element's animation sequence
        previousShouldStartAnimation.current[eleAnimSequence.animStartOn] = shouldStartAnimation;
      }
    });
  }, [controlsArray, agileTimelineTickets, startAnimOn]);
};

export default useAnimationSequence;
