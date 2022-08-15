export const flex = (
  justify: string = 'initial',
  align: string = 'initial',
  direction: 'row' | 'column' | 'row-reverse' | 'column-reverse' = 'row',
  gap: string = 'initial'
): {
  display: string
  justifyContent: string
  alignItems: string
  flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  gap: string
} => ({
  display: 'flex',
  flexDirection: direction,
  justifyContent: justify,
  alignItems: align,
  gap: gap,
})
