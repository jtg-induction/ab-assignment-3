import { useHistory } from 'react-router'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { TextField, Button } from '@Components/index'
import { AppRoute } from '@Constants/index'
import { setHelperText } from '@Store/login'
import { setUserData } from '@Store/user'
import { LoginService } from '@Services/login'
import { ReactComponent as Logo } from '@Images/Github-logo.svg'
import {
  Box,
  Typography,
  Container,
  FormHelperText,
  Avatar,
} from '@mui/material'
import styles from './styles'

export const Login: React.FC = () => {
  const dispatch: Dispatch<AnyAction> = useDispatch()
  const { username, helperText } = useSelector(
    (state: IAppState) => state.login,
    shallowEqual
  )
  const history = useHistory()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const formUsername: FormDataEntryValue | null = data.get('username')
    const formPassword: FormDataEntryValue | null = data.get('password')
    if (notValid(formUsername) || notValid(formPassword)) {
      dispatch(setHelperText('Please fill all the fields'))
    } else {
      dispatch(setHelperText(''))
      LoginService(formUsername, formPassword).then((result) => {
        if (!result) {
          history.push('/error')
        } else {
          if (result.isLoggedIn) {
            console.log(result)
            dispatch(setUserData(result))
            history.push(AppRoute.PrivateRoutes.Profile)
          } else {
            dispatch(setHelperText('Wrong username or password'))
          }
        }
      })
    }
  }
  const notValid = (entry: FormDataEntryValue | null) =>
    entry == null || entry === ''
  return (
    <Container maxWidth="md" sx={styles.content}>
      <Box>
        <Avatar>
          <Logo />
        </Avatar>
        <Typography color="text.primary" variant="h5">
          Sign in to GitHub
        </Typography>
      </Box>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          name="username"
          margin="normal"
          label="Username"
          children={username}
          type="text"
          fullWidth
          autoFocus
        />
        <TextField
          name="password"
          margin="normal"
          label="Password"
          type="password"
          fullWidth
        />
        <FormHelperText sx={styles.helperText}>{helperText}</FormHelperText>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          children="Sign In"
          sx={styles.submitButton}
          fullWidth
        />
      </Box>
    </Container>
  )
}
