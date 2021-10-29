import { useHistory } from 'react-router'
import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useFormik } from 'formik'
import {
  Box,
  Typography,
  Container,
  FormHelperText,
  Avatar,
} from '@mui/material'
import {
  setHelperText,
  setIsLoading,
  setIsLoggedIn,
  setPassword,
  setUsername,
} from '@Store/login'
import { LoginService } from '@Services/login'
import { TextField, Button, Loader } from '@Components/index'
import { ReactComponent as Logo } from '@Images/Github-logo.svg'
import constants from '@Constants/index'
import styles from './styles'
var _ = require('lodash')

export const Login: React.FC = () => {
  const dispatch: Dispatch<AnyAction> = useDispatch()
  const { helperText, isLoading } = useSelector(
    (state: IAppState) => state.login,
    shallowEqual
  )
  const history = useHistory()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    formik.handleSubmit()
    const { username, token } = formik.values
    if (_.isEmpty(username) || _.isEmpty(token)) {
      dispatch(setHelperText('Please fill all the fields'))
    } else {
      dispatch(setIsLoading(true))
      LoginService(username, token).then((message) => {
        dispatch(setIsLoading(false))
        if (message === 'error') history.push('/error')
        else if (message === 'fail') {
          dispatch(setHelperText('Wrong username or token'))
        } else {
          dispatch(setUsername(username))
          dispatch(setPassword(token))
          dispatch(setIsLoggedIn(true))
          dispatch(setHelperText('Successfully logged in!'))
        }
      })
    }
  }

  const formik = useFormik({
    validateOnMount: true,
    validate: (values) => {
      const errors = { username: '', token: '' }
      errors.username = _.isEmpty(values.username)
        ? 'This field is required'
        : ''
      errors.token = _.isEmpty(values.token) ? 'This field is required' : ''
      return errors
    },
    initialValues: {
      username: '',
      token: '',
    },
    onSubmit: (values) => {},
    validateOnBlur: true,
    validateOnChange: true,
  })

  useEffect(() => {
    if (helperText !== '') {
      toast(helperText)
      dispatch(setHelperText(''))
    }
  }, [helperText, dispatch])

  return (
    <Container maxWidth="md" sx={styles.content}>
      <Box sx={styles.title}>
        {isLoading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <Avatar>
              <Logo />
            </Avatar>
            <Typography color="text.primary" variant="h5">
              Sign in to GitHub
            </Typography>
          </React.Fragment>
        )}
      </Box>

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          name="username"
          margin="normal"
          label="Username"
          children={formik.values.username}
          type="text"
          onBlurHandler={formik.handleBlur}
          onChangeHandler={formik.handleChange}
          helperText={formik.touched.username ? formik.errors.username : ''}
          error={
            formik.errors.username === ''
              ? false
              : formik.touched.username
              ? true
              : false
          }
          fullWidth
        />
        <TextField
          name="token"
          margin="normal"
          label="Token"
          children={formik.values.token}
          type="password"
          onBlurHandler={formik.handleBlur}
          onChangeHandler={formik.handleChange}
          helperText={formik.touched.token ? formik.errors.token : ''}
          error={
            formik.errors.token === ''
              ? false
              : formik.touched.token
              ? true
              : false
          }
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
        autoClose={constants.Toast.TOAST_TIMEOUT}
        theme="dark"
      />
    </Container>
  )
}
