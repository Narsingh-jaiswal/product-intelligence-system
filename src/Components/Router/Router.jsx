import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import PublicRoute from './PublicRouter'
import Login from '../pages/Authentication/Login'
import SignUp from '../pages/Authentication/SignUp'
import ForgotPassword from '../pages/Authentication/ForgotPassword'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute component={Login} path="/" exact />
        <PublicRoute component={SignUp} path="/signup" />
        <PublicRoute component={ForgotPassword} path="/forgotpassword" />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
