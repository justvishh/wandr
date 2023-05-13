import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import LandingPage from './views/landing-page'
import FindALocalGuide from './views/find-a-local-guide'
import HowItWorks from './views/how-it-works'
import Features from './views/features'
import FindAGuide from './views/find-a-guide'
import Prices from './views/prices'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={LandingPage} exact path="/" />
        <Route component={FindALocalGuide} exact path="/find-a-local-guide" />
        <Route component={HowItWorks} exact path="/how-it-works" />
        <Route component={Features} exact path="/features" />
        <Route component={FindAGuide} exact path="/find-a-guide" />
        <Route component={Prices} exact path="/prices" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
