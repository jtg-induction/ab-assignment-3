import { useHistory } from 'react-router'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { ToastContainer, toast } from 'react-toastify'
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
import { useFormik } from 'formik'
import { MyLoader } from '@Components/index'

export const Login: React.FC = () => {
  const dispatch: Dispatch<AnyAction> = useDispatch()
  const { username, helperText, isLoading } = useSelector(
    (state: IAppState) => state.login,
    shallowEqual
  )
  const history = useHistory()

  const formik = useFormik({
    initialValues: {
      username: '',
      token: '',
    },
    onSubmit: (values) => {
      if (values.username === '' || values.token === '') {
        dispatch(setHelperText('Please fill all the fields'))
      } else {
        dispatch(setIsLoading(true))
        LoginService(values.username, values.token).then((message) => {
          dispatch(setIsLoading(false))
          if (message === 'error') history.push('/error')
          else if (message === 'fail') {
            dispatch(setHelperText('Wrong username or token'))
          } else {
            dispatch(setUsername(values.username))
            dispatch(setPassword(values.token))
            dispatch(setIsLoggedIn(true))
            dispatch(setHelperText('Successfully logged in!'))
          }
        })
      }
    },
    validateOnBlur: true,
    validateOnChange: true,
  })

  useEffect(() => {
    if (helperText !== '') {
      toast(helperText)
      dispatch(setHelperText(''))
    }
  }, [helperText, dispatch])

  if (isLoading) {
    return <MyLoader />
  } else {
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
        <Box component="form" onSubmit={formik.handleSubmit} noValidate>
          <TextField
            name="username"
            margin="normal"
            label="Username"
            children={formik.values.username}
            type="text"
            onBlurHandler={formik.handleBlur}
            onChangeHandler={formik.handleChange}
            fullWidth
            autoFocus
          />
          <TextField
            name="token"
            margin="normal"
            label="Token"
            children={formik.values.token}
            type="password"
            onBlurHandler={formik.handleBlur}
            onChangeHandler={formik.handleChange}
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
}
