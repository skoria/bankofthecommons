/* @flow */

import React, { Component } from 'react'
import {Router, Route, browserHistory, Link} from 'react-router'
import Home from './pages/home/home'
import Roadmap from './pages/roadmap/roadmap'
import Membership from './pages/membership/membership'
import Contact from './pages/contact/contact'

const NotFound = () => (
  <div className='notFound'>
    <span className='notFound_monkey'></span>
    <h1>Look behind you, a three headed monkey!</h1>
    <Link className='notFound_home' to={'/'}>Back to home</Link>
  </div>
)

class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
          <Route path='/' component={Home} />
          <Route path='/roadmap' component={Roadmap} />
          <Route path='/membership' component={Membership} />
          <Route path='/contact' component={Contact} />
          <Route path='*' component={NotFound} />
      </Router>
    )
  }
}

export default App
