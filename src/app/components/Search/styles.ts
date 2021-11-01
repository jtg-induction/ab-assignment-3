import { styled } from '@mui/material/styles'
import { flex } from '@Src/utilities'
export const SearchBar = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.typography.pxToRem(40),
  backgroundColor: theme.colors.white.preset1,
  '&:hover': {
    backgroundColor: theme.colors.white.preset2,
  },
}))

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  ...flex('center', 'center'),
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
}))
