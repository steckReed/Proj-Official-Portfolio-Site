import { Box } from '@mui/material';
import HeroSection from './components/modules/Hero/HeroSection/HeroSection';
import ProjectsCarousel from './components/modules/ProjectsCarousel/ProjectsCarousel';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh' }} >
      <Box sx={{ display: 'flex', height:'100vh' }}>
        <HeroSection/>
      </Box>
        <ProjectsCarousel/>
    </div>
  );
}
