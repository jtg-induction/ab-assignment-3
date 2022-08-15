export interface TextFieldProps {
  name?: string
  margin?: 'none' | 'dense' | 'normal'
  label?: string
  children?: string
  type?: string
  fullWidth?: boolean
  autoFocus?: boolean
  variant?: 'standard' | 'filled' | 'outlined' | undefined
  onChangeHandler?: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void
  onBlurHandler?: (
    e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>
  ) => void
  helperText?: string | boolean
  error?: boolean
}
