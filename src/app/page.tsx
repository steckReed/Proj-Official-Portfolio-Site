import { Box } from '@mui/material';
import DevelopmentVersionControl from '@/components/modules/DevelopmentVersionControl/DevelopmentVersionControl';
import IdeasToWebApps from '@/components/modules/IdeasToWebApps/IdeasToWebApps';
import MeAndProjects from '@/components/modules/MeAndProjects/MeAndProjects';

export default function Home() {
  return (
    <Box sx={{ display:'flex', flexDirection:'column',gap:'5.5vh' }}>
      {/* Me & My Projects */}
      <MeAndProjects />

      {/* Ideas to Web Apps (Vertical Carousel) */}
      <IdeasToWebApps />

      {/* Development & Version Control */}
      <DevelopmentVersionControl />
    </Box>
  );
}
