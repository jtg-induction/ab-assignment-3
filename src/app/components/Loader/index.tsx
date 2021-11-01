import React from 'react'
import { Box } from '@mui/system'
import styles from './styles'

const Loader = (): JSX.Element => {
  return (
    <Box sx={styles.body}>
      <Box sx={styles.loader}></Box>
    </Box>
  )
}
export default Loader
