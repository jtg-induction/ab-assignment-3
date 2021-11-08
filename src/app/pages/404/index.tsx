import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Typography } from '@mui/material'
import styles from './styles'
import { ReactComponent as ErrorSign } from '@Images/error.svg'

const PageNotFound = () => {
  const { t } = useTranslation()
  return (
    <Box sx={styles.root}>
      <ErrorSign />
      <Typography sx={styles.errorText} variant="h3">{t('thisPageCouldNotBeFound')}</Typography>
    </Box>
  )
}
export default PageNotFound
