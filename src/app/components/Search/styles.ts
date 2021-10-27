import { styled } from '@mui/material/styles'
const whitePreset1 = 'rgba(255,255,255,0.15)'
const whitePreset2 = 'rgba(255,255,255,0.25)'
export const SearchBar = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: whitePreset1,
  '&:hover': {
    backgroundColor: whitePreset2,
  },
  width: '95ch',
}))

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))
