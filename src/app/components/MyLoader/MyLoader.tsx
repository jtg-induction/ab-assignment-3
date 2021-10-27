import { Box } from '@mui/system'
import React from 'react'

export const MyLoader: React.FC = () => {
  return (
    <Box
      sx={{
        m: 0,
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 0,
      }}
    >
      <Box
        sx={{
          width: '40px',
          height: '40px',
          border: '5px solid rgba(29, 161, 242, 0.2)',
          borderLeftColor: '#2c974b',
          borderRadius: '50%',
          background: 'transparent',
          animationName: 'rotatesloader',
          animationIterationCount: 'infinite',
          animationDuration: '1s',
          animationTimingFunction: 'linear',
          position: 'relative',
          '@keyframes rotatesloader': {
            from: {
              transform: 'rotate(0)',
            },
            to: {
              transform: 'rotate(360deg)',
            },
          },
        }}
      ></Box>
    </Box>
  )
}
