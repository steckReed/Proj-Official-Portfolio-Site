import { TicketSizes, TicketStatusMap, TicketTypes } from '@/types/types';
import { Box, Tooltip } from '@mui/material';
import { MotionValue } from 'framer-motion';

interface Props {
  ticketNum : string | number,
  text      : string,
  status    ?: TicketTypes,
  size      ?: TicketSizes,
  loadingBar ?: {
    distance  : number | string
    delay     : number | string // MotionValue<number>
  },
}

const TicketContainer = ({
  ticketNum,
  text,
  status      = 'not started',
  size        = 'lg',
  loadingBar  = undefined,
}: Props) => {

  // "Media Query" for mobile to remove ticket text, but keep status & number
  
  const ticketStatusInfo = TicketStatusMap[status];

  const ticketContainerStyle = {
    'lg': { 
      minHeight : '50px',
      height    : 'fit-content',
      padding   : '0 1rem 0 0.5rem',
      fontSize  : '24px',
      gap       : '12px',
    },
    'sm': { 
      minHeight : '34px',
      height    : 'fit-content',
      padding   : '0 0.85rem 0 0.5rem',
      fontSize  : '18px',
      gap       : '8px',
    }
  }

  const statusNumContainerStyle = {
    'lg': {
      gap: '12px'
    },
    'sm': {
      gap: '8px'
    }
  }

  const statusDotStyle = {
    'lg': {
      height  : '30px',
      width   : '30px'
    },
    'sm':{
      height  : '24px',
      width   : '24px'
    }
  }

  return (<>
    <Box sx={{ display:'flex', flexDirection:'column' }}>
      <Tooltip title={ticketStatusInfo.desc} placement='top' arrow disableInteractive>
        <Box 
          sx={{ 
            display:'flex',
            alignItems:'center',
            backgroundColor:'#242424', 
            borderRadius:'12px', 
            color:'#F9F7F4',
            width:'fit-content',
            ...ticketContainerStyle[size]
          }}
        >
          {/* Ticket status & number */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', ...statusNumContainerStyle[size] }}>
              <span style={{ backgroundColor: ticketStatusInfo.color, borderRadius: '50%', ...statusDotStyle[size] }}/>
            <p>#{ticketNum}</p>
          </Box>

          {/* Ticket Name */}
          <p>{text}</p>
        </Box>
      </Tooltip>

      {(loadingBar) && (<>
        <span 
          style={{ 
            height: '6px', 
            backgroundColor: ticketStatusInfo.color, 
            borderRadius: '25px',
            width: loadingBar.distance
          }} 
        />
      </>)}
    </Box>
  </>)
};

export default TicketContainer;
