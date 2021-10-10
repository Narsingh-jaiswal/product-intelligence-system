import { InputAdornment, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles({
  textField: {
    marginBottom: '30px !important',
    '& .MuiInputAdornment-root': {
      margin: 10,
    },
  },
  endLogo: {
    cursor: 'pointer',
  },
})

const InputTextField = (props) => {
  const styles = useStyles()

  const { startlogo, endlogo, setPassword, type } = props
  const setPasswordType = () => {
    type === 'password' ? setPassword('text') : setPassword('password')
  }

  return (
    <TextField
      variant="outlined"
      className={styles.textField}
      {...props}
      type={type}
      InputProps={{
        startAdornment: (
          <InputAdornment position="end">
            <img className={styles.logo} src={startlogo} alt="" />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end" className={styles.endLogo}>
            {endlogo && (
              <img
                className={styles.logo}
                src={endlogo}
                alt=""
                onClick={setPasswordType}
              />
            )}
          </InputAdornment>
        ),
      }}
    />
  )
}

export default InputTextField
