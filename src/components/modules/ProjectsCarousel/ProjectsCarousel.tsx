'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Box } from '@mui/material';
import { ProjectsProps } from '@/types/types';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LaunchIcon from '@mui/icons-material/Launch';

const ProjectsCarousel = () => {
  const myProjects: ProjectsProps[] = [
    { name:'Planets Wallpaper',
      desc:'Pure HTML, SCSS, JS Image Re-Creation',
      ribbon:'Front-end',
      url:'https://steckreed.github.io/ReCreations/Planets%20Wallpaper/',
      github:'https://github.com/steckReed/ReCreations/tree/Minimalistic/Planets%20Wallpaper',
      referenceLink:'https://steckreed.github.io/ReCreations/Planets%20Wallpaper/reference-img.html',
    },
    {
      name: 'D&D Character Creator',
      desc: 'Next.js Web App to Assits in Creation of D&D Character Sheets',
      ribbon: 'Full-stack',
      status: 'In Development',
      url: 'https://dnd-character-builder-3eb70.web.app/characters/new',
      github: 'https://github.com/steckReed/dnd-character-creator',
    },
    {
      name: 'Adventure Niagara Falls',
      desc: 'Pure HTML, SCSS, JS Image Re-Creation of Niagara Falls Logo Found On Mug',
      ribbon: 'Front-end',
      url: 'https://steckreed.github.io/ReCreations/Adventure%20Niagara%20Falls/',
      github: 'https://github.com/steckReed/ReCreations/tree/Minimalistic/Adventure%20Niagara%20Falls',
    },
    {
      name: 'Casette Tape',
      desc: 'Pure HTML, SCSS, JS Image Re-Creation of a Casette',
      ribbon: 'Front-end',
      url: 'https://steckreed.github.io/ReCreations/Cassette%20Tape/',
      github: 'https://steckreed.github.io/ReCreations/Cassette%20Tape/',
    },
    {
      name: 'Abstract Boho',
      desc: 'Pure HTML, SCSS, JS Image Re-Creation',
      ribbon: 'Front-end',
      url: 'https://steckreed.github.io/ReCreations/Abstract%20Boho%201/',
      referenceLink: 'https://steckreed.github.io/ReCreations/Abstract%20Boho%201/reference-img.html',
      github: 'https://github.com/steckReed/ReCreations/tree/Minimalistic/Abstract%20Boho%201',
    },
  ]

  const projectAnimDelay = 2.15;

  return (
    <Swiper
      grabCursor={true}
      loop={true}
      spaceBetween={50}
      breakpoints={{
        320: {
          slidesPerView: 1.25,
          spaceBetween: 10,
          centeredSlides:true,
        },
        500: {
          slidesPerView: 1.5,
          spaceBetween: 20,
          centeredSlides: true,
        },
        900: {
          slidesPerView: 2.75,
          spaceBetween: 30,
          centeredSlides: false,
        },
        1400: {
          slidesPerView: 3.75,
          spaceBetween: 40,
          centeredSlides: false,
        },
      }}

      style={{ display: 'inherit' }}
    >
      {myProjects.map((project: ProjectsProps, i:number)=>{ return(
        <SwiperSlide
          key={i} 
          style={{ display: 'inherit', height: '450px', width: 'clamp(150px, 85vw, 200px)', userSelect: 'none'}}
        >
          <motion.div
            key={i} 
            initial     = {{ opacity: 0, bottom:'-100px' }}
            animate     = {{ opacity: 1, bottom:'0' }}
            exit        = {{ opacity: 0 }}
            transition  = {{ duration: 0.75, ease: 'backInOut', delay: projectAnimDelay + i/6, type: 'spring', bounce:0 }}
            style={{
              display: 'grid',
              gridTemplateRows: 'min-content auto',
              position: 'relative',
              height: '100%',
              width:'100%',
              backgroundColor: 'white',
              boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
              borderRadius: '14px',
              overflow: 'hidden'
            }}
          >
            {/* Project Details (Name, Desc, etc.) */}
            <Box sx={{ display:'grid', minHeight:'115px' }}>
              <div style={{ gridColumn: 1, gridRow: 1, margin:'auto 0', padding:'12px 24px' }}>
                <h2>
                  {project.name} 
                  <Link href={project.url} target='_blank' style={{ textDecoration: 'none', color: 'black', paddingLeft:'4px' }}>
                    <LaunchIcon sx={{ fontSize: '18px' }} />
                  </Link>
                </h2>
                
                <p>{project.desc}</p>
              </div>
              
              {/* Project Status */}
              {project?.status && (
                <motion.div
                  initial={{ opacity: 0, right: '-100%', top: '-100%' }}
                  animate={{ opacity: 1, right: '-38%', top: '32%' }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: 'backInOut', delay: projectAnimDelay + 0.75, type: 'spring', bounce: 0 }}
                  style={{
                    gridColumn: 1,
                    gridRow: 1,
                    position: 'relative',
                    right: '-100px', top: '-100px',
                    height: 'min-content',
                    width: '100%',
                    backgroundColor: '#ef5555',
                    color: 'white',
                    borderRadius: '0 0 6px 6px',
                    padding: '0.5rem',
                    whiteSpace: 'nowrap',
                    transform: 'rotate(45deg)',
                    textAlign:'center'
                  }}
                >
                  <p> {project?.status} </p>
                </motion.div>
              )}
            </Box>

            {/* Iframe & GitHub Link */}
            <Box sx={{ display:'grid', borderRadius: 4, overflow:'hidden' }}>

              {/* GitHub Link */}
              <motion.div 
                initial     = {{ opacity: 0, right:'-100px' }}
                animate     = {{ opacity: 1, right:'0' }}
                exit        = {{ opacity: 0 }}
                transition={{ duration: 0.75, ease: 'backInOut', delay:projectAnimDelay + 0.5, type: 'spring', bounce:0 }}
                style = {{ 
                  gridColumn:1, 
                  gridRow:1, 
                  position:'absolute', 
                  bottom:15, 
                  backgroundColor:'white', 
                  borderRadius:'6px 0 0 6px',
                  padding:'0.5rem'
                }}
              >
                <Link href={project.github} target='_blank' style={{ textDecoration:'none', color:'black' }}>GitHub Link 🎉</Link>
              </motion.div>

              {/* Site Iframe */}
              <iframe src={project.url} style={{ gridColumn: 1, gridRow: 1, height: '100%', width: '100%' }} frameBorder="0"></iframe>
            </Box>
          </motion.div>
        </SwiperSlide>
      )})}
    </Swiper>
  );
};

export default ProjectsCarousel;
