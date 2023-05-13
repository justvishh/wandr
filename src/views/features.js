import React from 'react'

import { Helmet } from 'react-helmet'

import './features.css'

const Features = (props) => {
  return (
    <div className="features-container">
      <Helmet>
        <title>Features - Wandr</title>
        <meta property="og:title" content="Features - Wandr" />
      </Helmet>
    </div>
  )
}

export default Features
