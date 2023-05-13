import React from 'react'

import { Helmet } from 'react-helmet'

import './prices.css'

const Prices = (props) => {
  return (
    <div className="prices-container">
      <Helmet>
        <title>Prices - Wandr</title>
        <meta property="og:title" content="Prices - Wandr" />
      </Helmet>
      <div className="prices-pricing">
        <div className="prices-container1">
          <div className="prices-container2">
            <h1>Membership Plans</h1>
            <span className="prices-text01">
              <span>
                Pricing for a monthly-member starts at ₹1000 and for an
                annual-member starts at ₹8000
              </span>
              <br></br>
              <br></br>
              <span>*T&amp;C applied </span>
            </span>
          </div>
          <div className="prices-container3">
            <div className="prices-container4">
              <span className="prices-text06">Monthly</span>
              <span className="prices-text07">₹1000</span>
              <span className="prices-text08">
                We choose the perfect Wandr for you according to the city you
                choose. 
              </span>
              <button className="prices-button button">Learn More</button>
            </div>
            <div className="prices-container5">
              <span className="prices-text09">Annual</span>
              <span className="prices-text10">₹8000</span>
              <span className="prices-text11">
                You get to choose your own Wandr. Look at their reviews and
                you&apos;ll be good to go.
              </span>
              <button className="prices-button1 button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prices
