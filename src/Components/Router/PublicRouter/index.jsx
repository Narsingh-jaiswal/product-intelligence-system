import React, { useEffect, useState } from 'react'

import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import { Redirect, Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import logo from '../../../assets/images/FullLogo.png'
import { auth } from '../../../services/firebase/firebase'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    '& > img': {
      width: 200,
      marginBottom: 62,
    },
  },
})

const PublicRoute = ({ component: Component, ...rest }) => {
  const [isLogin, setIsLogin] = useState(false)

  const styles = useStyles()
  const history = useHistory()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      return authUser?.uid ? setIsLogin(true) : setIsLogin(false)
    })
  }, [])

  const navigateTO = (link) => {
    history.push(`/${link}`)
  }

  return (
    <Box className={styles.root}>
      <>
        <img src={logo} alt="" />
        <Route
          {...rest}
          render={(props) =>
            isLogin ? (
              <Redirect to="dashboard" />
            ) : (
              <Component {...props} navigateTO={navigateTO} />
            )
          }
        />
      </>
    </Box>
  )
}

export default PublicRoute
