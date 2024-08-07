import { Box } from '@mui/material';
import HeroSection from '../components/modules/Hero/HeroSection/HeroSection';
import ProjectsCarousel from '../components/modules/ProjectsCarousel/ProjectsCarousel';
import DataToDesign from '@/components/sections/DataToDesign/DataToDesign';

export default function Home() {
  return (
    <Box sx={{ display:'flex', flexDirection:'column',gap:'5.5vh' }}>
      {/* Me & My Projects */}
      <Box sx={{ display: 'flex', minHeight:'100vh', flexWrap:'wrap', alignContent:'center', gap:'5.5vh', paddingBottom:'calc(2.5vh + 1rem)'}}>


        <Box sx={{ width:'100%' }}>
          <HeroSection />
        </Box>
        
        <ProjectsCarousel />
      </Box>

      {/* Data to Design */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignContent: 'center', paddingBottom: 'calc(2.5vh + 1rem)' }}>
        <DataToDesign />
      </Box>
    </Box>
  );
}
