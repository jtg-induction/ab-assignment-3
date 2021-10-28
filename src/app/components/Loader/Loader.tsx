import React from 'react'
import { Box } from '@mui/system'
import styles from './styles'

export const Loader: React.FC<{}> = () => {
  return (
    <Box sx={styles.body}>
      <Box sx={styles.loader}></Box>
    </Box>
  )
}
