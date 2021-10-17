import React, { useEffect, useState } from 'react'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'

import InputTextField from '../InputTextField'

import { useStyle } from '../styles'

import eyedot from './../../../../assets/images/eyedot.svg'
import lock from './../../../../assets/images/lock.svg'
import mail from './../../../../assets/images/mail.svg'
import { signIn } from '../../../../utils/user/signIn'
import { getData } from '../../../../api/api'
import { loginValidator } from '../../../../utils/validations'

const Login = ({ navigateTO }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordType, setPasswordType] = useState('password')
  const [error, setError] = useState({})

  useEffect(() => {
    getData()
      .then((data) => {
        console.log(data, '-------------')
      })
      .catch((error) => {
        console.log(error, '--------')
      })
  }, [])

  const styles = useStyle()

  const loginHandler = async () => {
    const { error: validatorResponse, isValid } = loginValidator({
      email,
      password,
    })
    if (!isValid) {
      setError(validatorResponse)
    } else {
      await signIn({ email, password }).then((userData) => {
        console.log(userData)
      })
    }
  }
  console.log(error)
  return (
    <>
      <Box className={styles.root}>
        <Typography className={styles.label}>Login</Typography>
        <InputTextField
          value={email}
          type="email"
          placeholder="Email"
          startlogo={mail}
          onChange={(e) => setEmail(e.target.value)}
          error={error?.email?.message}
        />

        <InputTextField
          value={password}
          type={passwordType}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          startlogo={lock}
          endlogo={eyedot}
          setPassword={setPasswordType}
          error={error?.password?.message}
        />

        {/* <Typography
          className={styles.forgotPassword}
          onClick={() => navigateTO('forgotpassword')}
        >
          Forgot Password
        </Typography> */}
        <Button
          className={styles.loginButton}
          variant="contained"
          onClick={loginHandler}
        >
          Login
        </Button>
        <Typography className={styles.or}>Or</Typography>
        <Typography className={styles.option}>
          You don’t have an account?{' '}
          <Typography
            className={styles.optionLabel}
            component="span"
            onClick={() => navigateTO('signup')}
          >
            Signup!
          </Typography>
        </Typography>
      </Box>
    </>
  )
}

export default Login
