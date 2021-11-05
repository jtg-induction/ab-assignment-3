import React from 'react'
import { SxProps, Theme } from '@mui/system'
export type AppBarProps = {
  root: SxProps<Theme>
  content: SxProps<Theme>
  searchList: SxProps<Theme>
  searchForm: React.CSSProperties
  roundedBtn: SxProps<Theme>
  language: SxProps<Theme>
}
