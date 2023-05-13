import React from 'react'

import { Helmet } from 'react-helmet'

import './find-a-guide.css'

const FindAGuide = (props) => {
  return (
    <div className="find--guide-container">
      <Helmet>
        <title>Find-a-guide - Wandr</title>
        <meta property="og:title" content="Find-a-guide - Wandr" />
      </Helmet>
      <h1>
        <span>Find a guide</span>
        <br></br>
        <br></br>
      </h1>
      <span className="find--guide-text04">
        <span>
          Welcome to our &quot;Find a guide&quot; service, where we offer you
          the opportunity to connect with experienced and knowledgeable guides
          from around the world. Our service is designed to help you make the
          most of your travels by providing you with insider access to the best
          local experiences and attractions.
        </span>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <span>
          Using our &quot;Find a guide&quot; service, you can browse through a
          wide range of guides who specialize in various destinations,
          languages, and interests. Whether you&apos;re looking for a cultural
          experience, an adventure, or simply want to explore a new city or
          country, our guides can help you make the most of your trip.
        </span>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <span>
          Our guides are passionate about their cities and countries, and they
          are eager to share their knowledge and insights with you. They can
          take you off the beaten path and show you hidden gems that you might
          otherwise miss. They can also provide you with practical advice and
          tips to help you navigate your destination like a local.
        </span>
      </span>
    </div>
  )
}

export default FindAGuide
