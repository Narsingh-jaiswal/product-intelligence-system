import React, { useState } from 'react'
import { Box } from '@mui/system'
import { Button, TextField, Typography } from '@mui/material'

import InputTextField from '../InputTextField'

import eyedot from './../../../../assets/images/eyedot.svg'
import lock from './../../../../assets/images/lock.svg'
import mail from './../../../../assets/images/mail.svg'

import { useStyle } from '../styles'

const SignUp = ({ navigateTO }) => {
  const [userDetail, setUserDetail] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [passwordType, setPasswordType] = useState('password')
  const [confirmPasswordType, setConfirmPasswordType] = useState('password')

  const styles = useStyle()

  const onChangeHandler = (e) => {
    setUserDetail({
      ...userDetail,
      [e.target.name]: e.target.value.trimStart(),
    })
  }

  return (
    <>
      <Box className={styles.root}>
        <Typography className={styles.label}>Sign Up</Typography>
        <InputTextField
          name="name"
          value={userDetail.name}
          type="text"
          placeholder="Full Name"
          onChange={onChangeHandler}
        />
        <InputTextField
          name="email"
          value={userDetail.email}
          type="email"
          placeholder="Email"
          onChange={onChangeHandler}
          startlogo={mail}
        />
        <InputTextField
          name="password"
          value={userDetail.password}
          type={passwordType}
          placeholder="password"
          onChange={onChangeHandler}
          startlogo={lock}
          endlogo={eyedot}
          setPassword={setPasswordType}
        />

        <InputTextField
          name="confirmPassword"
          value={userDetail.confirmPassword}
          type={confirmPasswordType}
          placeholder="password"
          onChange={onChangeHandler}
          startlogo={lock}
          endlogo={eyedot}
          setPassword={setConfirmPasswordType}
        />

        <Button className={styles.loginButton} variant="contained">
          Sign Up
        </Button>
        <Typography className={styles.or}>Or</Typography>
        <Typography className={styles.option}>
          Already have an account?{' '}
          <Typography
            className={styles.optionLabel}
            component="span"
            onClick={() => navigateTO('')}
          >
            Login!
          </Typography>
        </Typography>
      </Box>
    </>
  )
}

export default SignUp
