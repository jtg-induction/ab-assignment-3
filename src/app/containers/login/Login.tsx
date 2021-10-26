import { useHistory } from 'react-router'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TextField, Button } from '@Components/index'
import { AppRoute } from '@Constants/index'
import {
  setHelperText,
  setIsLoading,
  setIsLoggedIn,
  setPassword,
  setUsername,
} from '@Store/login'
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
import { useEffect } from 'react'

export const Login: React.FC = () => {
  const dispatch: Dispatch<AnyAction> = useDispatch()
  const { username, helperText, isLoading } = useSelector(
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
      dispatch(setIsLoading(true))
      LoginService(formUsername, formPassword).then((message) => {
        dispatch(setIsLoading(false))
        if (message === 'error') history.push('/error')
        else if (message === 'fail')
          dispatch(setHelperText('Wrong username or token'))
        else {
          dispatch(setUsername('' + formUsername))
          dispatch(setPassword('' + formPassword))
          dispatch(setIsLoggedIn(true))
          dispatch(setHelperText('Successfully logged in!'))
        }
      })
    }
  }
  const notValid = (entry: FormDataEntryValue | null) =>
    entry == null || entry === ''

  useEffect(() => {
    if (helperText !== '') {
      toast(helperText)
      dispatch(setHelperText(''))
    }
  }, [helperText, dispatch])

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
          label="Token"
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
          disabled={isLoading}
          fullWidth
        />
      </Box>
      <ToastContainer
        position="bottom-right"
        hideProgressBar={true}
        autoClose={5000}
        theme="dark"
      />
    </Container>
  )
}
