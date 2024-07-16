'use client';

import Image from "next/image";
import ResponsiveImage from '../../../elements/ResponsiveImage';
import { motion } from "framer-motion"
import OptimizedVideo from '@/app/components/elements/OptimizedVideo';


const HeroSection =() =>{

  return (
    <div 
      style={{ 
        display:'flex',
        flexWrap:'wrap',
        width:'fit-content',
        margin: 'auto',
        userSelect: 'none'
      }}
    >
      {/* Left-hand text */}
      <motion.div 
        initial     = {{ opacity: 0, left:'100px' }}
        animate     = {{ opacity: 1, left:'15px' }}
        exit        = {{ opacity: 0 }}
        transition  = {{ duration: 1.5, ease:'backInOut' }}

        style       = {{ position: 'relative', bottom: '14px', display:'grid', height:'min-content', margin:'auto' }}
      >
        
        <motion.div 
          initial     = {{ opacity: 0, left:'100px' }}
          animate     = {{ opacity: 1, left:'unset', right:'2vw' }}
          exit        = {{ opacity: 0 }}
          transition  = {{ duration: 1.25, ease: 'backInOut', delay:0.15 }}

          style       = {{ position: 'relative' }}
        >
          <h5 style={{ fontSize:'24px', fontWeight:400 }}>
            Hello world
          </h5>
        </motion.div>

        <h1 
          style={{ 
            textTransform: 'uppercase', 
            fontSize: 'clamp(32px, 95vw, 128px)', 
            textAlign: 'right', padding:'0',
            margin:'0', 
            lineHeight:'69%'
          }}
        >
          {"I\'m"}
        </h1>
      </motion.div>

      {/* Picture of me */}
      <motion.div 
        initial     = {{ opacity: 0 }}
        animate     = {{ opacity: 1 }}
        exit        = {{ opacity: 0 }}
        transition  = {{ duration: 0.5, ease:'backInOut' }}
        style       = {{ margin:'auto', zIndex:1 }}
      >
        <ResponsiveImage src="/images/rs-headshot.png">
          <Image
            src={"/images/rs-headshot.png"}
            alt={"A Picture of Me, Reed!"}
            draggable="false"
            width={252}
            height={252}
            style={{
              borderRadius: '50%',
              objectFit: 'contain'
            }}
          />
        </ResponsiveImage>
      </motion.div>

      {/* Right-hand text */}
      <motion.div 
        initial     = {{ opacity: 0, right:'100px' }}
        animate     = {{ opacity: 1, right:'25px' }}
        exit        = {{ opacity: 0 }}
        transition  = {{ duration: 1.5, ease:'backInOut' }}
        style       = {{ position: 'relative', top: '15px', display: 'grid', margin: 'auto', zIndex: 1 }}
      >
        <h1 
          style={{ 
            textTransform: 'uppercase', 
            fontSize: 'clamp(32px, 95vw, 128px)', 
            padding: '0', 
            margin: '0', 
            lineHeight: '69%'
          }}
        >
          Reed
        </h1>

        <motion.div
          initial    = {{ opacity: 0, right: '100px' }}
          animate    = {{ opacity: 1, right: 'unset', left: '2vw' }}
          exit       = {{ opacity: 0 }}
          transition = {{ duration: 1.25, ease: 'backInOut', delay:0.15 }}

          style      = {{ position: 'relative', marginLeft: '0' }}
        >
          <h5 style={{ fontSize: '24px', textAlign:'right', fontWeight:400 }}>a Full Stack Developer</h5>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HeroSection;
