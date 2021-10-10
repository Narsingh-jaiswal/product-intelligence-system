import React, { useState } from 'react'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'

import InputTextField from '../InputTextField'

import { useStyle } from '../styles'

import eyedot from './../../../../assets/images/eyedot.svg'
import lock from './../../../../assets/images/lock.svg'
import mail from './../../../../assets/images/mail.svg'

const Login = ({ navigateTO }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordType, setPasswordType] = useState('password')

  const styles = useStyle()

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
        />

        <InputTextField
          value={password}
          type={passwordType}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          startlogo={lock}
          endlogo={eyedot}
          setPassword={setPasswordType}
        />

        <Typography
          className={styles.forgotPassword}
          onClick={() => navigateTO('forgotpassword')}
        >
          Forgot Password
        </Typography>
        <Button className={styles.loginButton} variant="contained">
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
