import { useHistory } from 'react-router'
import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useTranslation } from 'react-i18next'
import { useFormik } from 'formik'
import { Box, Typography, Container, Avatar } from '@mui/material'
import _ from 'lodash'
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
import Constants from '@Constants/index'
import styles from './styles'

const Login: React.FC = () => {
  const { t } = useTranslation()
  const dispatch: Dispatch<AnyAction> = useDispatch()
  const { helperText, isLoading } = useSelector(
    (state: IAppState) => state.login,
    shallowEqual
  )
  const history = useHistory()
  const signInFormConfig = Constants.signInformConfig

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    formik.handleSubmit()
    if (
      _.isEmpty(formik.values[signInFormConfig.username.name]) ||
      _.isEmpty(formik.values[signInFormConfig.token.name])
    ) {
      dispatch(setHelperText(Constants.ToastMessages.FILL_ALL))
    } else {
      dispatch(setIsLoading(true))
      LoginService(
        formik.values[signInFormConfig.username.name],
        formik.values[signInFormConfig.token.name]
      ).then((message) => {
        dispatch(setIsLoading(false))
        if (message === 'error') history.push('/404/error')
        else if (message === 'fail') {
          dispatch(setHelperText(Constants.ToastMessages.WRONG_INFO))
        } else {
          dispatch(setUsername(formik.values[signInFormConfig.username.name]))
          dispatch(setPassword(formik.values[signInFormConfig.token.name]))
          dispatch(setIsLoggedIn(true))
          dispatch(setHelperText(Constants.ToastMessages.LOGIN_SUCCESS))
        }
      })
    }
  }

  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      [signInFormConfig.username.name]: '',
      [signInFormConfig.token.name]: '',
    },
    validate: (values) => {
      const errors: {
        [key: string]: string
      } = {
        [signInFormConfig.username.name]: '',
        [signInFormConfig.token.name]: '',
      }
      const errorMessage = 'This field is required'
      errors[signInFormConfig.username.name] =
        (_.isEmpty(values[signInFormConfig.username.name]) || '') &&
        errorMessage

      errors[signInFormConfig.token.name] =
        (_.isEmpty(values[signInFormConfig.token.name]) || '') && errorMessage

      return errors
    },
    onSubmit: (values) => {},
    validateOnBlur: true,
    validateOnChange: true,
  })

  useEffect(() => {
    if (helperText) {
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
              {t('title')}
            </Typography>
          </React.Fragment>
        )}
      </Box>

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          name={signInFormConfig.username.name}
          margin="normal"
          label={t(`label.${signInFormConfig.username.label}`)}
          children={formik.values.username}
          type={signInFormConfig.username.type}
          onBlurHandler={formik.handleBlur}
          onChangeHandler={formik.handleChange}
          helperText={
            formik.touched[signInFormConfig.username.name] &&
            formik.errors[signInFormConfig.username.name]
          }
          error={
            (formik.errors[signInFormConfig.username.name] ? true : false) &&
            formik.touched[signInFormConfig.username.name]
          }
          fullWidth
        />
        <TextField
          name={signInFormConfig.token.name}
          margin="normal"
          label={t(`label.${signInFormConfig.token.label}`)}
          children={formik.values.token}
          type={signInFormConfig.token.type}
          onBlurHandler={formik.handleBlur}
          onChangeHandler={formik.handleChange}
          helperText={
            formik.touched[signInFormConfig.token.name] &&
            formik.errors[signInFormConfig.token.name]
          }
          error={
            (formik.errors[signInFormConfig.token.name] ? true : false) &&
            formik.touched[signInFormConfig.token.name]
          }
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          children={t('signIn')}
          sx={styles.submitButton}
          disabled={isLoading}
          fullWidth
        />
      </Box>
      <ToastContainer
        position="bottom-right"
        hideProgressBar={true}
        autoClose={Constants.ToastConstants.TIMEOUT}
        theme="dark"
      />
    </Container>
  )
}
export default Login
