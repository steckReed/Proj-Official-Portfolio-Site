import { Box } from '@mui/material';
import HeroSection from '../components/modules/Hero/HeroSection/HeroSection';
import ProjectsCarousel from '../components/modules/ProjectsCarousel/ProjectsCarousel';
import DataToDesign from '@/components/modules/DataToDesign/DataToDesign';

export default function Home() {
  return (<>
    {/* Me & My Projects */}
    <Box sx={{ display: 'flex', minHeight:'100vh', flexWrap:'wrap', alignContent:'center', gap:'5.5vh', paddingBottom:'calc(2.5vh + 1rem)'}}>


      <Box sx={{ width:'100%' }}>
        <HeroSection />
      </Box>
      
      <ProjectsCarousel />
    </Box>

    <Box sx={{ display: 'flex', minHeight: '100vh', flexWrap: 'wrap', alignContent: 'center', gap: '5.5vh', paddingBottom: 'calc(2.5vh + 1rem)' }}>
      <DataToDesign/>
    </Box>
  </>);
}
