export interface TextFieldProps {
  name: string
  margin?: 'none' | 'dense' | 'normal'
  label: string
  children?: string
  type: string
  fullWidth?: boolean
  autoFocus?: boolean
  variant?: 'standard' | 'filled' | 'outlined' | undefined
  onChangeHandler?: (value: string) => void
}
