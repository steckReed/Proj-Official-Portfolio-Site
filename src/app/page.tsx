import { Box } from '@mui/material';
import HeroSection from './components/modules/Hero/HeroSection/HeroSection';
import ProjectsCarousel from './components/modules/ProjectsCarousel/ProjectsCarousel';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh'}} >
      <Box sx={{ display: 'flex', minHeight:'100vh', flexWrap:'wrap', alignContent:'center', gap:'5.5vh'}}>
        <Box sx={{ width:'100%' }}>
          <HeroSection />
        </Box>
        
        <ProjectsCarousel />
      </Box>
    </div>
  );
}
