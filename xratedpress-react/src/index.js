import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import LadiesShortSleevePremium from './views/ladies-short-sleeve-premium'
import Home from './views/home'
import Login from './views/login'
import HomeForUser from './views/home-for-user'
import AboutUs from './views/about-us'
import ContactUsForUser from './views/contact-us-for-user'
import AboutUsForUser from './views/about-us-for-user'
import OrderSuccessful from './views/order-successful'
import SignUp from './views/sign-up'
import MenLongSleevePremium from './views/men-long-sleeve-premium'
import KidShortSleevePremium from './views/kid-short-sleeve-premium'
import ContactUs from './views/contact-us'
import Shop from './views/shop'
import MenShortSleevePremium from './views/men-short-sleeve-premium'
import MessageSent from './views/message-sent'
import ShopForUser from './views/shop-for-user'

const App = () => {
  return (
    <Router>
      <div>
        <Route
          component={LadiesShortSleevePremium}
          exact
          path="/ladies-short-sleeve-premium"
        />
        <Route component={Home} exact path="/" />
        <Route component={Login} exact path="/login" />
        <Route component={HomeForUser} exact path="/home-for-user" />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={ContactUsForUser} exact path="/contact-us-for-user" />
        <Route component={AboutUsForUser} exact path="/about-us-for-user" />
        <Route component={OrderSuccessful} exact path="/order-successful" />
        <Route component={SignUp} exact path="/sign-up" />
        <Route
          component={MenLongSleevePremium}
          exact
          path="/men-long-sleeve-premium"
        />
        <Route
          component={KidShortSleevePremium}
          exact
          path="/kid-short-sleeve-premium"
        />
        <Route component={ContactUs} exact path="/contact-us" />
        <Route component={Shop} exact path="/shop" />
        <Route
          component={MenShortSleevePremium}
          exact
          path="/men-short-sleeve-premium"
        />
        <Route component={MessageSent} exact path="/message-sent" />
        <Route component={ShopForUser} exact path="/shop-for-user" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
