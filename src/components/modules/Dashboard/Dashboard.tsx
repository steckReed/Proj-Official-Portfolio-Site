import { Box } from '@mui/material';
import LegendContainer from '../LegendContainer/LegendContainer';

const Dashboard = () => {

  
  return(<>
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
  </>)
}

export default Dashboard;
