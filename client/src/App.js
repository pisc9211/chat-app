import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import io from 'socket.io-client'

import SignIn from './components/SignIn/SignIn'
import Chat from './components/Chat/Chat'

const App = () => {

  return (
    <Router>
      <Route path="/" exact component={SignIn} />
      <Route path="/chat" component={Chat} />
    </Router>
  )
}

export default App