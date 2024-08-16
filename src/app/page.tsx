import { Box } from '@mui/material';
import HeroSection from '../components/modules/HeroSection/HeroSection';
import ProjectsCarousel from '../components/modules/ProjectsCarousel/ProjectsCarousel';
import LegendContainer from '@/components/modules/LegendContainer/LegendContainer';
import DevelopmentVersionControl from '@/components/modules/DevelopmentVersionControl/DevelopmentVersionControl';
import IdeasToWebApps from '@/components/modules/IdeasToWebApps/IdeasToWebApps';

export default function Home() {
  return (
    <Box sx={{ display:'flex', flexDirection:'column',gap:'5.5vh' }}>
      {/* Me & My Projects */}
      <Box sx={{ display: 'flex', minHeight:'100vh', flexWrap:'wrap', alignContent:'center', gap:'5.5vh', paddingBottom:'calc(2.5vh + 1rem)'}}>

        {/* Me */}
        <Box sx={{ width:'100%' }}>
          <HeroSection />
        </Box>
        
        {/* My Projects */}
        <ProjectsCarousel />
      </Box>


      {/* Data to Design */}
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', margin: '0 auto', gap: 'clamp(45px, 10vh, 125px)', paddingBottom: 'calc(2.5vh + 1rem)' }}>
        {/* Ideas to Web Apps (Vertical Carousel) */}
        <IdeasToWebApps />

        {/* Development & Version Control */}
        <DevelopmentVersionControl />

        {/* Dashboard */}
        <LegendContainer title={'Release'} width='clamp(250px, 85vw, 1800px)' animateBorder>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(16px, 2.5vh, 25px)',
              padding: '0 1rem',
              height: '80vh'
            }}
          >
            dashboard
          </Box>
        </LegendContainer>
      </Box>
    </Box>
  );
}
