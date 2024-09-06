import { Box } from '@mui/material';
import { Layout, Layouts, Responsive, WidthProvider, } from "react-grid-layout";
import LegendContainer from '../LegendContainer/LegendContainer';
import { useEffect, useState } from 'react';
import "react-grid-layout/css/styles.css";
import getUUID from '@/functions/getUUID';
import './custom-resize-handle.css'; 

const Dashboard = () => {
  const ResponsiveGridLayout = WidthProvider(Responsive);
    const initialLayout: Layout[] = [
      { i: getUUID(), x: 0, y: 0, w: 4, h: 6 },
      { i: getUUID(), x: 0, y: 0, w: 3, h: 4 },
      { i: getUUID(), x: Infinity, y: 0, w: 1, h: 2 }
    ];
  const [layouts, setLayouts] = useState<Layouts>();
  const currentBreakpoint = 'lg'

  useEffect(() => {
    setLayouts({'lg': initialLayout});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // const onLayoutChange = (newLayout: Layout[], allLayouts: ReactGridLayout.Layouts) => {
  //   setLayouts(prevLayouts => ({
  //     ...prevLayouts,
  //     ...Object.keys(allLayouts).reduce((acc, key) => {
  //       // If the current breakpoint's layout array doesn't exist in the previous layouts,
  //       // initialize it by copying from an existing layout that does include the custom properties
  //       if (!prevLayouts[key]) {
  //         // Use another layout as a template, typically 'lg' is a safe bet if it exists
  //         const templateLayout = prevLayouts['lg'] || [];
  //         // Initialize with a mapped version of the template that only takes ids to avoid position conflicts
  //         acc[key] = allLayouts[key].map(item => {
  //           const templateItem = templateLayout.find(t => t.i === item.i);
  //           return templateItem ? {
  //             ...item,
  //             chartType: templateItem.chartType // Preserve chartType from the template, adjust for more properties as needed
  //           } : {
  //             ...item,
  //             chartType: 'default' // Provide a default chartType if not found
  //           };
  //         });
  //       } else {
  //         // If it exists, update it by merging existing items with new layout changes
  //         acc[key] = allLayouts[key].map(layoutItem => {
  //           const existingItem = prevLayouts[key].find(prevItem => prevItem.i === layoutItem.i);
  //           return existingItem ? {
  //             ...existingItem,
  //             ...layoutItem,
  //           } : {
  //             ...layoutItem,
  //             chartType: 'default' // Provide a default if no existing item is found
  //           };
  //         });
  //       }
  //       return acc;
  //     }, {}),
  //   }));
  // };



  const responsiveProps = {
    breakpoints       : { lg: 1200, md: 960, sm: 720, xs: 480, xxs: 0 },
    cols              : { lg: 12, md: 8, sm: 6, xs: 4, xxs: 2 },
    layouts           : layouts,
    rowHeight         : 30,
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
        <ResponsiveGridLayout 
          {...responsiveProps}

          // onLayoutChange={(newLayout, layouts) => onLayoutChange(newLayout, layouts)}
        >
          {layouts !== undefined && layouts[currentBreakpoint].map((item: any) => (
            <Box
              key={item.i}
              data-grid={{ ...item }}
              className={`shadow`}
              style={{ display: "grid", borderRadius: '8px', backgroundColor:'#CFCEB7', border: '4px solid #262215'}}
            >
              {/* Draggable Header */}
              <Box className='custom-drag-handle' 
                sx={{
                  backgroundColor:'#A5501A', 
                  height:'28px', 
                  padding:'0 1rem',
                  display:'flex',
                  width:'100%',
                  borderRadius: '3px 3px 0 0',
                  overflow:'hidden',

                  '&:hover':{
                    cursor:'pointer'
                  }
                }} 
              >
                <h2 
                  style={{ 
                    color: '#f9f7f4', 
                    textOverflow:'ellipsis', 
                    whiteSpace:'nowrap', 
                    overflow:'hidden', 
                    width:'clamp(100px, 75%, 500px)',
                    userSelect: 'none',  
                  }}
                >
                  {`Item ${item.i.toUpperCase()}`}
                </h2>
              </Box>

              {/* Body */}
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
