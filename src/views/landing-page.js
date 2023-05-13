import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Feature from '../components/feature'
import Offer from '../components/offer'
import Guide from '../components/guide'
import Article from '../components/article'
import './landing-page.css'

const LandingPage = (props) => {
  return (
    <div className="landing-page-container">
      <Helmet>
        <title>Wandr</title>
        <meta property="og:title" content="Wandr" />
      </Helmet>
      <section className="landing-page-hero">
        <div className="landing-page-main">
          <div className="landing-page-video">
            <video
              src
              poster="/playground_assets/hero-cover1-1500h.png"
              className="landing-page-video1"
            ></video>
            <div className="landing-page-tint"></div>
          </div>
          <div className="landing-page-content">
            <header data-thq="thq-navbar" className="landing-page-navbar">
              <img
                alt="logo"
                src="/playground_assets/logo.svg"
                className="landing-page-logo"
              />
              <div data-thq="thq-burger-menu" className="landing-page-menu">
                <div className="landing-page-links">
                  <Link to="/features" className="landing-page-navlink link">
                    Features
                  </Link>
                  <Link
                    to="/how-it-works"
                    className="landing-page-navlink01 link"
                  >
                    How it works
                  </Link>
                  <span className="link">Prices</span>
                  <a
                    href="tel:+91 8105275650"
                    className="landing-page-link link"
                  >
                    Contact
                  </a>
                </div>
                <button className="landing-page-hamburger button">
                  <svg viewBox="0 0 1024 1024" className="landing-page-icon">
                    <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                  </svg>
                </button>
              </div>
              <div
                data-thq="thq-mobile-menu"
                className="landing-page-mobile-menu"
              >
                <div
                  data-thq="thq-mobile-menu-nav"
                  data-role="Nav"
                  className="landing-page-nav"
                >
                  <div className="landing-page-container1">
                    <img
                      alt="image"
                      src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                      className="landing-page-image"
                    />
                    <div
                      data-thq="thq-close-menu"
                      className="landing-page-menu-close"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="landing-page-icon02"
                      >
                        <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                      </svg>
                    </div>
                  </div>
                  <nav
                    data-thq="thq-mobile-menu-nav-links"
                    data-role="Nav"
                    className="landing-page-nav1"
                  >
                    <span className="landing-page-text01">About</span>
                    <span className="landing-page-text02">Features</span>
                    <span className="landing-page-text03">Pricing</span>
                    <span className="landing-page-text04">Team</span>
                    <span className="landing-page-text05">Blog</span>
                  </nav>
                  <div className="landing-page-container2">
                    <button className="landing-page-login button">Login</button>
                    <button className="button">Register</button>
                  </div>
                </div>
                <div className="landing-page-icon-group">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="landing-page-icon04"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="landing-page-icon06"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="landing-page-icon08"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </header>
            <div className="landing-page-center">
              <div className="landing-page-heading">
                <h1 className="landing-page-header">
                  See the world like a local
                </h1>
                <p className="landing-page-caption">
                  Find a local guide wherever you go at your own convenience.
                  Let&apos;s Wandr.
                </p>
              </div>
              <div className="landing-page-border">
                <div className="landing-page-filter">
                  <img
                    alt="image"
                    src="/playground_assets/location.svg"
                    className="landing-page-image1"
                  />
                  <input
                    type="text"
                    placeholder="Destination"
                    className="landing-page-textinput input"
                  />
                  <input
                    type="date"
                    placeholder="Date"
                    className="landing-page-textinput1 input"
                  />
                  <input
                    type="number"
                    placeholder="Group size"
                    className="landing-page-textinput2 input"
                  />
                  <div className="landing-page-search">
                    <img
                      alt="image"
                      src="/playground_assets/search.svg"
                      className="landing-page-icon10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="features" className="landing-page-feaures">
          <div className="landing-page-content1">
            <Feature Description="Wandr provides you the best hand picked guides for your group and for solo travelers."></Feature>
            <Feature
              Icon="/playground_assets/person.svg"
              Header="Private Tours"
              Description="Wandr also provides private tours. We enusre that  Our private tours are designed to meet your specific needs and interests, providing a flexible itinerary that can be customized to fit your schedule and preferences.they c"
            ></Feature>
          </div>
        </div>
      </section>
      <section id="tours" className="landing-page-quick-view">
        <div className="landing-page-main1">
          <div className="landing-page-heading1">
            <h2 className="landing-page-header1">See the world like a local</h2>
            <p className="landing-page-caption1">
              Now with Wandr your traveling comes to an ease. Explore the world
              like a stranger. 
            </p>
          </div>
          <div className="landing-page-sorting">
            <button className="landing-page-option-primary button">All</button>
            <button className="button-option button">Popular</button>
            <button className="button-option button">Featured</button>
            <button className="button-option button">Trending</button>
          </div>
        </div>
        <div className="landing-page-offers">
          <Link to="/">
            <div className="landing-page-offer-container">
              <Offer
                Image="/playground_assets/offers-11-1500w.png"
                Description="Crete is one of the most popular holiday destinations in Greece. 15% of all arrivals in Greece come through the city of Heraklion (port and airport), while charter journeys to Heraklion make up about 20% of all charter flights in Greece. The number of hotel beds on the island increased by 53%."
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="landing-page-offer-container1">
              <Offer
                Image="/playground_assets/offers-21-1500w.png"
                Guides="54 Local guides"
                Location="Barcelona, Spain"
                Description="Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture. The fantastical Sagrada Família church and other modernist landmarks designed by Antoni Gaudí dot the city. Museu Picasso and Fundació Joan Miró feature modern art by their namesakes. "
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="landing-page-offer-container2">
              <Offer
                Image="/playground_assets/offers-31-1500w.png"
                Guides="34 Local Guides"
                Location="Machu Picchu, Peru"
                Description="Machu Picchu is both a cultural and natural UNESCO World Heritage Site. Since its rediscovery in 1911, growing numbers of tourists have visited the site each year, with numbers exceeding 1.4 million in 2017.[57] As Peru's most visited tourist attraction, and a major revenue generator, it is continually exposed to economic and commercial forces"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="landing-page-offer-container3">
              <Offer
                Image="/playground_assets/offers-41-1500w.png"
                Guides="1 Local guide"
                Location="Doha, Qatar"
                Description="Doha is known for its modern architecture, luxurious hotels, high-end shopping malls, and vibrant nightlife. The city is home to several world-renowned museums and cultural institutions, including the Museum of Islamic Art, the National Museum of Qatar, and the Qatar National Library"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="landing-page-offer-container4">
              <Offer
                Image="/playground_assets/offers-51-1500w.png"
                Guides="6 Local guides"
                Location="Rhodes, Greece"
                Description="Rhodes, the largest of Greece’s Dodecanese islands, is known for its beach resorts, ancient ruins and remnants of its occupation by the Knights of St. John during the Crusades. The city of Rhodes has an Old Town featuring the medieval Street of the Knights and the castlelike Palace of the Grand Masters."
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="landing-page-offer-container5">
              <Offer
                Image="/playground_assets/offers-61-1500w.png"
                Guides="132 Local guides"
                Location="New York, USA"
                Description="New York, often called New York City[a] or NYC, is the most populous city in the United States. With a 2020 population of 8,804,190 distributed over 300.46 square miles (778.2 km2), New York City is the most densely populated major city in the United States and more than twice as populous as Los Angeles, the nation's second-largest city. New York City is located at the southern tip of New York State"
              ></Offer>
            </div>
          </Link>
          <Link to="/">
            <div className="landing-page-offer-container6"></div>
          </Link>
          <Link to="/">
            <div className="landing-page-offer-container7"></div>
          </Link>
          <Link to="/">
            <div className="landing-page-offer-container8"></div>
          </Link>
        </div>
        <div className="landing-page-pagination">
          <button className="landing-page-previous button-option button">
            <svg viewBox="0 0 1024 1024" className="landing-page-icon11">
              <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
            </svg>
            <span className="landing-page-text06">Previous</span>
          </button>
          <div className="landing-page-pages">
            <div className="landing-page-primary">
              <div className="landing-page-number-current page-current page">
                <span className="landing-page-text07">1</span>
              </div>
              <a
                href="https://www.lovehomeswap.com/blog/destinations-inspiration/the-50-most-visited-tourist-attractions-in-the-world"
                target="_blank"
                rel="noreferrer noopener"
                className="landing-page-link1"
              >
                <div className="landing-page-number page">
                  <span className="landing-page-text08">2</span>
                </div>
              </a>
            </div>
            <img
              alt="image"
              src="/playground_assets/more.svg"
              className="landing-page-more"
            />
          </div>
        </div>
      </section>
      <section id="how-it-works" className="landing-page-highlights">
        <div className="landing-page-highlight">
          <div className="landing-page-content2">
            <div className="landing-page-heading2">
              <h2 className="landing-page-header2">Explore</h2>
              <p className="landing-page-caption2">
                We recommend the best of the guides for you to become a local.
                The guide will help you wander to different places of the city
                you visit. 
              </p>
            </div>
            <button className="button-arrow button">
              <span className="landing-page-text09">Read more</span>
              <span className="landing-page-text10">&gt;</span>
            </button>
          </div>
          <div className="landing-page-image2">
            <img
              alt="image"
              src="/playground_assets/highlight-1-1500w.png"
              className="landing-page-image3"
            />
          </div>
        </div>
        <div className="landing-page-highlight1">
          <div className="landing-page-image4">
            <img
              alt="image"
              src="/playground_assets/highlight-2-1500w.png"
              className="landing-page-image5"
            />
          </div>
          <div className="landing-page-content3">
            <div className="landing-page-heading3">
              <h2 className="landing-page-header3">
                Your next trip starts here
              </h2>
              <p className="landing-page-caption3">
                <span>
                  From family resorts to boutique charmers: the highest-rated
                  stays around the world. Your stay starts from different
                  seasons starting from the tulip season until the Tuscany wine
                  tours.
                </span>
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="guides" className="landing-page-guides">
        <div className="landing-page-heading4">
          <h2 className="landing-page-header4">Meet our guides</h2>
          <p className="landing-page-caption4">
            Choose your guide in your Wandr app and let&apos;s make traveling
            fun.
          </p>
        </div>
        <div className="landing-page-list">
          <Link to="/">
            <div className="landing-page-guide-wrapper">
              <Guide Name="Pat Robert"></Guide>
            </div>
          </Link>
          <Link to="/">
            <div className="landing-page-guide-wrapper1">
              <Guide
                Name="Jerin Shaleen"
                Location="Paris, France"
                Portrait="/playground_assets/guide-2.png"
                rootClassName="guide-root-class-name2"
              ></Guide>
              <Guide
                Name="Sebi Miguel"
                Location="Paris, France"
                Portrait="https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHx3b21lbnxlbnwwfHx8fDE2ODE0OTgwMjU&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="guide-root-class-name4"
              ></Guide>
            </div>
          </Link>
          <Link to="/">
            <div className="landing-page-guide-wrapper2"></div>
          </Link>
          <Link to="/">
            <div className="landing-page-guide-wrapper3">
              <Guide
                Name="Benjamin Tom"
                Location="London, UK "
                Portrait="/playground_assets/guide-4.png"
                rootClassName="guide-root-class-name1"
              ></Guide>
            </div>
          </Link>
          <Guide
            Name="Divine Jose"
            Location="London, UK "
            Portrait="https://images.unsplash.com/photo-1440589473619-3cde28941638?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQ0fHx0b3VyJTIwZ3VpZGUlMjBwZW9wbGV8ZW58MHx8fHwxNjgxNDk2NjM1&amp;ixlib=rb-4.0.3&amp;q=80&amp;h=500"
            rootClassName="guide-root-class-name3"
          ></Guide>
          <Guide
            Name="Ussain Ahmed"
            Location="Bruges, Belgium"
            Portrait="/playground_assets/guide-3.png"
            rootClassName="guide-root-class-name"
          ></Guide>
        </div>
      </section>
      <section className="landing-page-articles">
        <div id="articles" className="landing-page-content4">
          <div className="landing-page-heading5">
            <h2 className="landing-page-header5">BLOG POSTS</h2>
          </div>
          <div className="landing-page-list1">
            <div className="landing-page-row">
              <Article
                Image="/playground_assets/articles-11-1500w.png"
                Header="The Pursuit of adventure "
                Description="We travel to enquire, to hear stories and to be awestruck by incredible scenery. To witness the ingenuity and defiance of individuals and the remarkable output of their cooperation. To be humbled by the history of yesterday, informed about the politics of today and excited by the possibilities of tomorrow.  We travel to have fun."
                rootClassName="article-root-class-name1"
              ></Article>
              <Article
                Image="/playground_assets/articles-21-1500w.png"
                Header="The Wales Way"
                Description="The article highlights a road trip itinerary that take us through the beautiful sceneries of Wales.  The moment you arrive on that page, you will see a full-screen video of drones flying around Wales together with many full-page photos of mountains and castles of Wales. If that doesn't create the best first impression for a travel website, I do not know what is."
                rootClassName="article-root-class-name"
              ></Article>
            </div>
            <div className="landing-page-row1">
              <Article
                Image="/playground_assets/articles-31-1500w.png"
                Header="Cookiesound Is Traveling"
                Description="Lima, Peru, is one of the world’s top destinations for travel when it comes to options for exploring delicious local cuisine.  Some restaurants in Lima are so well-known for being the absolute best at what they do, a visit is worth the entire trip to Lima, just to eat that one special meal.  Chez Wong is the home, the restaurant, the workplace of Chef Legend Javier Wong – and its a place that no foodie can ever forget.  The food is amazing, the atmosphere one of food creation magic – scroll down now, and read all the details of ‘Chez Wong’ Restaurant in Lima"
                rootClassName="article-root-class-name2"
              ></Article>
              <Article
                Image="/playground_assets/articles-41-1500w.png"
                Header="Be My Travel Muse"
                Description="Kristin is an adventurous solo female traveler and my resident expert on all things solo female travel. She isn’t afraid to get off the beaten path and explore less-visited destinations, sharing her tips and tricks along the way. She takes incredible photos and also makes amazing YouTube videos (she’s one of the most underrated travel YouTubers out there if you ask me). She’s been traveling for over 5 years now and creates insightful, entertaining content. Even if you’re not a solo female traveler, you’ll still enjoy her posts and videos."
                rootClassName="article-root-class-name3"
              ></Article>
            </div>
            <div className="landing-page-row2"></div>
          </div>
        </div>
      </section>
      <section id="find" className="landing-page-find">
        <div className="landing-page-heading6">
          <h2 className="landing-page-header6">Find a local guide now</h2>
          <p className="landing-page-caption5">
            By using Wandr, you can browse through a wide range of local guides
            who specialize in various destinations, languages, and interests.
            You can read reviews and ratings from other travelers to help you
            choose the best guide for your needs. Our goal is to help you create
            unforgettable memories and experiences that will stay with you long
            after your trip is over. Contact us today to find the perfect local
            guide for your next adventure.
          </p>
        </div>
        <Link to="/find-a-local-guide" className="landing-page-find1 button">
          Find a local guide
        </Link>
      </section>
      <section className="landing-page-footer">
        <div className="landing-page-content5">
          <div className="landing-page-main2">
            <div className="landing-page-branding">
              <div className="landing-page-heading7">
                <img
                  alt="image"
                  src="/playground_assets/logo.svg"
                  className="landing-page-image6"
                />
                <p className="landing-page-caption6">
                  Wandr like a local wherever you go
                </p>
              </div>
            </div>
            <div className="landing-page-links1">
              <div className="landing-page-items"></div>
              <div className="landing-page-items1"></div>
              <div className="landing-page-items2"></div>
            </div>
          </div>
          <span className="landing-page-copyright">
            © 2022 Character. All Rights Reserved.
          </span>
        </div>
      </section>
      <div>
        <DangerousHTML
          html={`<script>
  function initAccordion() {
    /*
    Accordion - Code Embed
    */
    const accordionContainers = document.querySelectorAll(
      '[data-role="accordion-container"]'
    ); // All accordion containers
    const accordionContents = document.querySelectorAll(
      '[data-role="accordion-content"]'
    ); // All accordion content
    const accordionIconsClosed = document.querySelectorAll(
      '[data-role="accordion-icon-closed"]'
    ); // All accordion closed icons
    const accordionIconsOpen = document.querySelectorAll(
      '[data-role="accordion-icon-open"]'
    ); // All accordion open icons

    accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionIconsClosed.forEach((icon) => {
      icon.style.display = "flex";
    });

    accordionIconsOpen.forEach((icon) => {
      icon.style.display = "none";
    });

    accordionContainers.forEach((accordionContainer, index) => {
      if (accordionContainer.classList.contains("initialised")) {
        return;
      }

      accordionContainer.classList.add("initiased");

      accordionContainer.addEventListener("click", () => {
        if (accordionContents[index].style.display === "flex") {
          // If the accordion is already open, close it
          accordionContents[index].style.display = "none";
          accordionIconsClosed[index].style.display = "flex";
          accordionIconsOpen[index].style.display = "none";
        } else {
          // If the accordion is closed, open it
          accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
          });

          accordionIconsClosed.forEach((accordionIcon) => {
            accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
          });

          accordionIconsOpen.forEach((accordionIcon) => {
            accordionIcon.style.display = "none";
          });

          accordionContents[index].style.display = "flex"; // Shows accordion content
          accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
          accordionIconsOpen[index].style.display = "flex";
        }
      });
    });
  }

  initAccordion();
</script>
`}
        ></DangerousHTML>
      </div>
    </div>
  )
}

export default LandingPage
