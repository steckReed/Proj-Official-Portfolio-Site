import { Box } from '@mui/material';
import { Layout, Responsive, WidthProvider, } from "react-grid-layout";
import LegendContainer from '../LegendContainer/LegendContainer';
import { useState } from 'react';
import "react-grid-layout/css/styles.css";

const initialLayout: Layout[] = [
  { i: "a", x: 0, y: 0, w: 4, h: 6},
  { i: "b", x: 0, y: 0, w: 3, h: 4},
  { i: "c", x: 5, y: 0, w: 1, h: 2}
];

const Dashboard = () => {
  const ResponsiveGridLayout = WidthProvider(Responsive);
  const [layout, setLayout] = useState(
    // {
    // lg:[
      initialLayout
    // ]
  // }
  );

  const responsiveProps = {
    breakpoints       : { lg: 1200, md: 960, sm: 720, xs: 480, xxs: 0 },
    cols              : { lg: 12, md: 8, sm: 6, xs: 4, xxs: 2 },
    rowHeight         : 30,
    layout            : layout,
    isResizable       : true,
    useCSSTransforms  : true,
    draggableHandle   : ".custom-drag-handle"
  };
  
  return (<>
    <span style={{ display: 'inline-block', height: '150px' }} />

    <LegendContainer title={'Release'} width='clamp(250px, 85vw, 1800px)' animateBorder>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(16px, 2.5vh, 25px)',
          padding: '0 1rem',
          height: '80vh',
          width: '100%',
          overflow:'auto'
        }}
      >
        <ResponsiveGridLayout {...responsiveProps}>
          {layout.map((item) => (
            <Box
              key={item.i}
              data-grid={{ ...item }}
              style={{ display: "grid", userSelect: 'none', borderRadius: '8px', overflow: 'hidden', backgroundColor:'#CFCEB7' }}
            >
              {/* Draggable Header */}
              <Box className='custom-drag-handle' 
                sx={{
                  backgroundColor:'#A5501A', 
                  height:'28px', 
                  padding:'0 1rem',
                  '&:hover':{
                    cursor:'pointer'
                  }
                }} 
              >
                <h2 style={{ color: '#f9f7f4' }}>{`Item ${item.i.toUpperCase()}`}</h2>
              </Box>

              <Box>
                
              </Box>
            </Box>
          ))}
        </ResponsiveGridLayout>
      </Box>
    </LegendContainer> 

    <span style={{ display: 'inline-block', height: '150px' }} />
  </>)
}

export default Dashboard;
