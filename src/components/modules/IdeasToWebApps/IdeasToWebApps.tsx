import CustomChip from '@/components/elements/CustomChip/CustomChip';
import LegendContainer from '../LegendContainer/LegendContainer';
import useRefScrollPercentage from '@/hooks/useRefScrollPercentage';
import { Box } from '@mui/material';
import { AnimationDefinition, distance, motion, useAnimate, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import ResponsiveImage from '@/components/elements/ResponsiveImage';
import Image from "next/image";
import TicketContainer from '@/components/elements/TicketContainer/TicketContainer';
import styles from './_IdeasToWebApps.module.scss';
import { AgileTimelineTicketsProps } from '@/types/types';
import useAnimationSequence from '@/hooks/useAnimationSequence';


const IdeasToWebApps = () => {
  // Container Ref
  const containerRef      = useRef<HTMLDivElement>(null);
  const scrollPercentage1 = useRefScrollPercentage(containerRef);

  // change to map
  const startAnimOn = new Map([
    ['item1', scrollPercentage1 > 0],
    ['item2', scrollPercentage1 > 40],
    ['item3', scrollPercentage1 > 70],
  ])

  
  // Settings for carousel items animations
  const carouselItemAnimSettings = {
    initial: { opacity: 0, bottom: '-125px', transform: 'scale(0.85)' },
    animate: { opacity: 1, bottom: '0', transform: 'scale(1)' }
  }

  // Animation control based on scroll percentage
  const carouselItem1 = (startAnimOn.get('item1'))  ?(carouselItemAnimSettings.animate) :(carouselItemAnimSettings.initial);
  const carouselItem2 = (startAnimOn.get('item2'))  ?(carouselItemAnimSettings.animate) :(carouselItemAnimSettings.initial);
  const carouselItem3 = (startAnimOn.get('item3'))  ?(carouselItemAnimSettings.animate) :(carouselItemAnimSettings.initial);


  
  const agileTimelineTicketsDelay = 0.9;
  const controlsArray = [ useAnimation(), useAnimation(), useAnimation(), useAnimation(), useAnimation() ];
  const [scope, animate] = useAnimate();

  const agileTimelineTickets: AgileTimelineTicketsProps[] = [
    {
      'size':'sm',
      'status':'on hold',
      'text':'Drag & Drop Package',
      'loadingBar':{'distance': '11%', 'delay': 1},

      'animationSequence':{
        'id': 'ticket1',
        'animStartOn': 'item3',

        'initial' : { opacity: 0, left: '0%'  },
        'animations': [
          {
            animate: { opacity: 1, },
            transition: { duration: 0.75, ease: 'backInOut', delay: agileTimelineTicketsDelay },
          }
        ],
      }
    },
    // {
    //   'size': 'sm',
    //   'status': 'completed',
    //   'text': 'Charting Package',
    //   'loadingBar': { 'distance': '7%', 'delay': 1 },
      
    //   'animationSequence':{
    //     'animStartOn': 'item3',

    //     'initial' : { opacity: 0, left: '0%'  },
    //     'animations': [
    //       {
    //         animate: { opacity: 1, },
    //         transition: { duration: 0.75, ease: 'backInOut', delay: agileTimelineTicketsDelay + 0.2 },
    //       },
    //     ],
    //   }
    // },
    // {
    //   'size': 'sm',
    //   'status': 'working on it',
    //   'text': 'Fetch Data From Source',
    //   'loadingBar': { 'distance': '15%', 'delay': 1 },

    //   'animationSequence': {
    //     'animStartOn': 'item3',

    //     'initial': { opacity: 0, left: '0%' },
    //     'animations': [
    //       {
    //         animate: { opacity: 1, },
    //         transition: { duration: 0.75, ease: 'backInOut', delay: agileTimelineTicketsDelay + 0.4 },
    //       },
    //       {
    //         animate: { left: '11%' },
    //         transition: { duration: 0.5, delay: 0.5 },
    //       },
    //     ],
    //   }
    // },
    // {
    //   'size': 'sm',
    //   'status': 'completed',
    //   'text': 'Build Drag & Drop Layout',
    //   'loadingBar': { 'distance': '89%', 'delay': 1 },

    //   'animationSequence': {
    //     'animStartOn': 'item3',

    //     'initial': { opacity: 0, left: '0%' },
    //     'animations': [
    //       {
    //         animate: { opacity: 1, },
    //         transition: { duration: 0.75, ease: 'backInOut', delay: agileTimelineTicketsDelay + 0.6 },
    //       },
    //       {
    //         animate: { left: '11%' },
    //         transition: { duration: 0.5, delay: 0.5 },
    //       },
    //     ],
    //   }
    // },
    // {
    //   'size': 'sm',
    //   'status': 'working on it',
    //   'text': 'Implement Charts in Layout',
    //   'loadingBar': { 'distance': '74%', 'delay': 1 },

    //   'animationSequence': {
    //     'animStartOn': 'item3',

    //     'initial': { opacity: 0, left: '0%' },
    //     'animations': [
    //       {
    //         animate: { opacity: 1, },
    //         transition: { duration: 0.75, ease: 'backInOut', delay: agileTimelineTicketsDelay + 1 },
    //       },
    //       {
    //         animate: { left: '26%' },
    //         transition: { duration: 0.75, delay: 0.5 },
    //       },
    //     ],
    //   }
    // },
  ]


  useAnimationSequence(controlsArray, agileTimelineTickets, startAnimOn);

  
  return(<>
    <Box ref={containerRef} sx={{ minHeight:'300vh' }}>
      <Box sx={{ position: 'sticky', top: '10%', display: 'grid', gap: '50px', }}>

        {/* Section Title */}
        <Box>
          <h4 
            style={{ 
              textAlign:'center',
              letterSpacing: '2px',
              fontWeight: 'normal',
              fontSize:'clamp(22px, 5vw, 26px)'
            }}
          >
            I Turn <CustomChip>Ideas</CustomChip> into
          </h4>
          <h1
            style={{ 
              position:'relative',
              top:'-2px',
              textAlign: 'center',
              letterSpacing: '-2px',
              fontWeight: 'bold',
              fontSize: 'clamp(48px, 8vw, 60px)',
            }}
          >
            Achievable Web Apps
          </h1>
        </Box>

        {/* Idea */}
        <motion.div
          initial     = {carouselItemAnimSettings.initial}
          animate     = {carouselItem1}
          transition  = {{ duration: 0.85, ease: 'backInOut', delay: 1 / 3, type: 'spring', bounce: 0 }}
          style={{ position: 'relative', gridColumn: 1, gridRow:2 }}
        >
          <LegendContainer title={'Idea'}>
            <p style={{ textAlign: 'center', fontSize:'24px', padding:'0 2rem' }}>
              Develop and implement an interactive dashboard to fetch internal data for analysis
            </p>
          </LegendContainer>
        </motion.div>

        {/* Wireframe */}
        <motion.div
          initial     = {carouselItemAnimSettings.initial}
          animate     = {carouselItem2}
          transition  = {{ duration: 0.85, ease: 'backInOut', delay: 1 / 3, type: 'spring', bounce: 0 }}
          style={{ position: 'relative', gridColumn: 1, gridRow:2 }}
        >
          <LegendContainer title={'Wireframe'}>
            <Box sx={{ display:'flex', justifyContent:'center', alignItems:'center' }}>

            <ResponsiveImage src="/images/wireframe-dashboard.png">
              <Image
                src={"/images/wireframe-dashboard.png"}
                alt={"A Picture of Me, Reed!"}
                draggable="false"
                layout="responsive"
                width={415}
                height={286}
                style={{
                  maxWidth:'415px',
                  height: 'auto',
                  objectFit: 'contain',
                  margin:'auto'
                }}
              />
            </ResponsiveImage>

            </Box>
          </LegendContainer>
        </motion.div>

        {/* Agile Timeline */}
        <motion.div
          initial     = {carouselItemAnimSettings.initial}
          animate     = {carouselItem3}
          transition  = {{ duration: 0.85, ease: 'backInOut', delay: 1 / 3, type: 'spring', bounce: 0 }}
          style={{ position: 'relative', gridColumn: 1, gridRow:2 }}
        >
          <LegendContainer title={'Agile Timeline'} width='clamp(250px, 85vw, 815px)'>
            <Box className={styles['agile-timeline-container']}>
              {/* Title */}
              <Box sx={{ paddingTop:'15px' }}>
                <p style={{ textAlign: 'center', fontSize: '24px' }}>
                  Deliverables In
                </p>
                <p style={{ textAlign: 'center', fontWeight:'bold', letterSpacing:'-2px', fontSize:'28px' }}>
                  2 - 3 Week Sprints
                </p>
              </Box>

              {/* Timeline */}
              <Box sx={{ display:'flex' }}>
                <span style={{ display: 'inline-block', height:'50px', border:'2px dashed #242424'}}/>

                <span style={{ display: 'inline-block', border: '2px dashed #242424', width:'100%', height:'0px', margin:'auto'}}/>

                <span style={{ display: 'inline-block', height: '50px', border: '2px dashed #242424' }} />
              </Box>

              {/* Tickets */}
              <Box ref={scope} className={styles['ticket-container']}>
                {agileTimelineTickets.map((val, key) => {
                  return(
                    <motion.div
                      key         = { key }
                      id          = { val.animationSequence.id }
                      animate     = { controlsArray[key] }
                      transition  = {{ duration: 0.75, ease: 'backInOut' }}
                      style       = {{ position:'relative' }}
                    >
                      <TicketContainer 
                        ticketNum   = {key + 1}
                        size        = {val.size}
                        status      = {val.status}
                        text        = {val.text}
                        loadingBar  = {val.loadingBar} 
                      />
                    </motion.div>
                  )
                })}
              </Box>
            </Box>
          </LegendContainer>
        </motion.div>

      </Box>
        
    </Box>
  </>)
}

export default IdeasToWebApps;
