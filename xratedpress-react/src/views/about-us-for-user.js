import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './about-us-for-user.css'

const AboutUsForUser = (props) => {
  return (
    <main className="about-us-for-user-container">
      <Helmet>
        <title>About-Us-for-User - XratedPress</title>
        <meta property="og:title" content="About-Us-for-User - XratedPress" />
      </Helmet>
      <header data-role="Header" className="about-us-for-user-header">
        <img
          alt="image"
          src="/external/picture1-1500h.png"
          className="about-us-for-user-image"
        />
        <nav className="about-us-for-user-nav">
          <Link to="/home-for-user" className="about-us-for-user-home">
            Home
          </Link>
          <Link
            to="/contact-us-for-user"
            className="about-us-for-user-contact-us"
          >
            Contact Us
          </Link>
          <Link to="/shop-for-user" className="about-us-for-user-shop">
            Shop
          </Link>
          <Link to="/about-us-for-user" className="about-us-for-user-about-us">
            About Us
          </Link>
        </nav>
        <div className="about-us-for-user-container1">
          <div className="about-us-for-user-btn-group"></div>
        </div>
        <div data-role="BurgerMenu" className="about-us-for-user-burger-menu">
          <svg viewBox="0 0 1024 1024" className="about-us-for-user-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="about-us-for-user-mobile-menu">
          <div className="about-us-for-user-nav1">
            <div className="about-us-for-user-container2">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="about-us-for-user-image1"
              />
              <div
                data-role="CloseMobileMenu"
                className="about-us-for-user-menu-close"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="about-us-for-user-icon02"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="about-us-for-user-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="about-us-for-user-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="about-us-for-user-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
        <span className="about-us-for-user-text">Welcome!</span>
        <Link to="/" className="about-us-for-user-register button">
          Log Out
        </Link>
      </header>
      <div className="about-us-for-user-hero">
        <div className="about-us-for-user-mission">
          <h1 className="about-us-for-user-text01">Our Mission</h1>
          <span className="about-us-for-user-text02">
            <span>
              Our objective is to give our customers high-quality, economical,
              and personalized t-shirt printing services. We employ innovative
              technology and environmentally safe materials to make long-lasting
              and comfortable t-shirts that reflect your personality, style and
              message. We can help you design and print t-shirts for your
              business, school, club, event, or personal usage, with quick
              turnaround and excellent customer service. We are enthusiastic
              about t-shirt printing and want to exceed your expectations.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
        <div className="about-us-for-user-mission1">
          <h1 className="about-us-for-user-text05">Our Vision</h1>
          <span className="about-us-for-user-text06">
            Our vision for our t-shirt printing company is to build a brand that
            provides high-quality, one-of-a-kind, and responsibly priced items
            to clients who want to express themselves via their apparel. My
            objective is to establish a loyal client base that appreciates my
            innovation and service, as well as to grow my business slowly and
            consistently.
          </span>
        </div>
        <div className="about-us-for-user-boss">
          <div className="about-us-for-user-gerard">
            <img
              alt="image"
              src="/external/SHOP/gerard-300h.jpg"
              className="about-us-for-user-image2"
            />
            <h1 className="about-us-for-user-text07">CEO</h1>
            <span className="about-us-for-user-text08">
              Gerard Mark Peralta
            </span>
          </div>
          <div className="about-us-for-user-gerard1">
            <img
              alt="image"
              src="/external/SHOP/jaranilla%2C%20jomari%20a.-300h.jpg"
              className="about-us-for-user-image3"
            />
            <h1 className="about-us-for-user-text09">CO-CEO</h1>
            <span className="about-us-for-user-text10">Jomari Jaranilla</span>
          </div>
        </div>
      </div>
      <footer className="about-us-for-user-footer">
        <div className="about-us-for-user-container3">
          <div className="about-us-for-user-logo">
            <img
              alt="logo"
              src="/external/picture1-1500h.png"
              className="about-us-for-user-image4"
            />
            <span className="about-us-for-user-text11">
              Professional T-Shirt printing company.
            </span>
          </div>
          <div className="about-us-for-user-links-container">
            <div className="about-us-for-user-container4">
              <div className="about-us-for-user-product-container">
                <span className="about-us-for-user-text12">Product</span>
                <Link to="/shop-for-user" className="about-us-for-user-navlink">
                  Shop
                </Link>
              </div>
              <div className="about-us-for-user-company-container">
                <span className="about-us-for-user-text13">Company</span>
                <Link
                  to="/about-us-for-user"
                  className="about-us-for-user-navlink1"
                >
                  About Us
                </Link>
                <Link
                  to="/contact-us-for-user"
                  className="about-us-for-user-navlink2"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="about-us-for-user-container5">
              <div className="about-us-for-user-contact">
                <span className="about-us-for-user-text14">Contact Us</span>
                <span className="about-us-for-user-text15">
                  <span className="about-us-for-user-text16">
                    jomariajaranilla@iskolarngbayan.pup.edu.ph
                  </span>
                  <br></br>
                  <br></br>
                  <span>gerardmarkcperalta@iskolarngbayan.pup.edu.ph</span>
                  <br></br>
                </span>
                <span>+63 919 820 9881</span>
              </div>
              <div className="about-us-for-user-socials">
                <span className="about-us-for-user-text22">Follow Us</span>
                <div className="about-us-for-user-icon-group1">
                  <a
                    href="https://twitter.com/jmrxjrnll"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="about-us-for-user-link"
                  >
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="about-us-for-user-icon10"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/jomskieboo/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="about-us-for-user-link1"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="about-us-for-user-icon12"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100077925273969"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="about-us-for-user-link2"
                  >
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="about-us-for-user-icon14"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-us-for-user-separator"></div>
        <span className="about-us-for-user-text23">
          © 2023 XRATED PRESS, All Rights Reserved.
        </span>
      </footer>
    </main>
  )
}

export default AboutUsForUser
