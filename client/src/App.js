import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MpShow from './components/MpShow'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/mps" >
            <MpShow />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </BrowserRouter>
    </>

  )
}

export default App