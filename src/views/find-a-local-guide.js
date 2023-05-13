import React from 'react'

import { Helmet } from 'react-helmet'

import './find-a-local-guide.css'

const FindALocalGuide = (props) => {
  return (
    <div className="find--local-guide-container">
      <Helmet>
        <title>Find-a-local-guide - Wandr</title>
        <meta property="og:title" content="Find-a-local-guide - Wandr" />
      </Helmet>
    </div>
  )
}

export default FindALocalGuide
