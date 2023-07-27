import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './shirts.css'

const Shirts = (props) => {
  return (
    <div className={`shirts-container ${props.rootClassName} `}>
      <img alt={props.KIDS_alt} src={props.KIDS_src} className="shirts-kids" />
      <img alt={props.MAN_alt} src={props.MAN_src} className="shirts-man" />
      <img
        alt={props.LADIES_alt}
        src={props.LADIES_src}
        className="shirts-ladies"
      />
      <img
        alt={props.KIDS_alt1}
        src={props.KIDS_src1}
        className="shirts-kids1"
      />
      <span className="shirts-premium-cotton-adult">{props.menlongsleeve}</span>
      <span className="shirts-premium-cotton-ladies">
        {props.kidsshortsleeve}
      </span>
      <span className="shirts-premium-cotton-kids">{props.menshortsleeve}</span>
      <span className="shirts-premium-cotton-kids1">
        {props.ladiesshortsleeve}
      </span>
      <span className="shirts-price">{props.menlongsleeveprice}</span>
      <span className="shirts-price1">{props.menlongsleeveprice1}</span>
      <span className="shirts-price2">{props.menlongsleeveprice11}</span>
      <span className="shirts-price3">{props.menlongsleeveprice111}</span>
      <div className="shirts-container1">
        <div className="shirts-container2">
          <Link to="/login" className="shirts-navlink button">
            <span className="shirts-text">Buy Now</span>
            <svg viewBox="0 0 1024 1024" className="shirts-icon">
              <path
                d="M885.589 228.053c-8.149-9.344-19.883-14.72-32.256-14.72h-589.611l-8.32-49.664c-3.413-20.565-21.205-35.669-42.069-35.669h-96c-23.595 0-42.667 19.072-42.667 42.667s19.072 42.667 42.667 42.667h59.861l79.36 476.331c0.341 1.92 1.323 3.499 1.92 5.291 0.683 2.261 1.237 4.395 2.304 6.443 1.365 2.816 3.2 5.205 5.12 7.637 1.323 1.664 2.517 3.328 4.053 4.779 2.475 2.304 5.333 3.925 8.235 5.547 1.621 0.896 3.029 2.091 4.779 2.773 4.949 2.005 10.155 3.2 15.659 3.2 0.043 0 469.376 0 469.376 0 23.595 0 42.667-19.072 42.667-42.667s-19.072-42.667-42.667-42.667h-433.195l-7.083-42.667h482.944c21.248 0 39.253-15.616 42.24-36.608l42.667-298.667c1.749-12.288-1.92-24.704-9.984-34.005zM804.139 298.667l-12.16 85.333h-151.979v-85.333h164.139zM597.333 298.667v85.333h-128v-85.333h128zM597.333 426.667v85.333h-128v-85.333h128zM426.667 298.667v85.333h-128c-2.261 0-4.309 0.64-6.315 1.28l-14.421-86.613h148.736zM299.264 426.667h127.403v85.333h-113.195l-14.208-85.333zM640 512v-85.333h145.835l-12.16 85.333h-133.675z"
                className=""
              ></path>
              <path
                d="M426.667 832c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64z"
                className=""
              ></path>
              <path
                d="M810.667 832c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64z"
                className=""
              ></path>
            </svg>
          </Link>
        </div>
      </div>
      <div className="shirts-container3">
        <div className="shirts-container4">
          <Link to="/login" className="shirts-navlink1 button">
            <span className="shirts-text1">Buy Now</span>
            <svg viewBox="0 0 1024 1024" className="shirts-icon04">
              <path
                d="M885.589 228.053c-8.149-9.344-19.883-14.72-32.256-14.72h-589.611l-8.32-49.664c-3.413-20.565-21.205-35.669-42.069-35.669h-96c-23.595 0-42.667 19.072-42.667 42.667s19.072 42.667 42.667 42.667h59.861l79.36 476.331c0.341 1.92 1.323 3.499 1.92 5.291 0.683 2.261 1.237 4.395 2.304 6.443 1.365 2.816 3.2 5.205 5.12 7.637 1.323 1.664 2.517 3.328 4.053 4.779 2.475 2.304 5.333 3.925 8.235 5.547 1.621 0.896 3.029 2.091 4.779 2.773 4.949 2.005 10.155 3.2 15.659 3.2 0.043 0 469.376 0 469.376 0 23.595 0 42.667-19.072 42.667-42.667s-19.072-42.667-42.667-42.667h-433.195l-7.083-42.667h482.944c21.248 0 39.253-15.616 42.24-36.608l42.667-298.667c1.749-12.288-1.92-24.704-9.984-34.005zM804.139 298.667l-12.16 85.333h-151.979v-85.333h164.139zM597.333 298.667v85.333h-128v-85.333h128zM597.333 426.667v85.333h-128v-85.333h128zM426.667 298.667v85.333h-128c-2.261 0-4.309 0.64-6.315 1.28l-14.421-86.613h148.736zM299.264 426.667h127.403v85.333h-113.195l-14.208-85.333zM640 512v-85.333h145.835l-12.16 85.333h-133.675z"
                className=""
              ></path>
              <path
                d="M426.667 832c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64z"
                className=""
              ></path>
              <path
                d="M810.667 832c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64z"
                className=""
              ></path>
            </svg>
          </Link>
        </div>
      </div>
      <div className="shirts-container5">
        <div className="shirts-container6">
          <Link to="/login" className="shirts-navlink2 button">
            <span className="shirts-text2">Buy Now</span>
            <svg viewBox="0 0 1024 1024" className="shirts-icon08">
              <path
                d="M885.589 228.053c-8.149-9.344-19.883-14.72-32.256-14.72h-589.611l-8.32-49.664c-3.413-20.565-21.205-35.669-42.069-35.669h-96c-23.595 0-42.667 19.072-42.667 42.667s19.072 42.667 42.667 42.667h59.861l79.36 476.331c0.341 1.92 1.323 3.499 1.92 5.291 0.683 2.261 1.237 4.395 2.304 6.443 1.365 2.816 3.2 5.205 5.12 7.637 1.323 1.664 2.517 3.328 4.053 4.779 2.475 2.304 5.333 3.925 8.235 5.547 1.621 0.896 3.029 2.091 4.779 2.773 4.949 2.005 10.155 3.2 15.659 3.2 0.043 0 469.376 0 469.376 0 23.595 0 42.667-19.072 42.667-42.667s-19.072-42.667-42.667-42.667h-433.195l-7.083-42.667h482.944c21.248 0 39.253-15.616 42.24-36.608l42.667-298.667c1.749-12.288-1.92-24.704-9.984-34.005zM804.139 298.667l-12.16 85.333h-151.979v-85.333h164.139zM597.333 298.667v85.333h-128v-85.333h128zM597.333 426.667v85.333h-128v-85.333h128zM426.667 298.667v85.333h-128c-2.261 0-4.309 0.64-6.315 1.28l-14.421-86.613h148.736zM299.264 426.667h127.403v85.333h-113.195l-14.208-85.333zM640 512v-85.333h145.835l-12.16 85.333h-133.675z"
                className=""
              ></path>
              <path
                d="M426.667 832c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64z"
                className=""
              ></path>
              <path
                d="M810.667 832c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64z"
                className=""
              ></path>
            </svg>
          </Link>
        </div>
      </div>
      <div className="shirts-container7">
        <div className="shirts-container8">
          <Link to="/login" className="shirts-navlink3 button">
            <span className="shirts-text3">Buy Now</span>
            <svg viewBox="0 0 1024 1024" className="shirts-icon12">
              <path
                d="M885.589 228.053c-8.149-9.344-19.883-14.72-32.256-14.72h-589.611l-8.32-49.664c-3.413-20.565-21.205-35.669-42.069-35.669h-96c-23.595 0-42.667 19.072-42.667 42.667s19.072 42.667 42.667 42.667h59.861l79.36 476.331c0.341 1.92 1.323 3.499 1.92 5.291 0.683 2.261 1.237 4.395 2.304 6.443 1.365 2.816 3.2 5.205 5.12 7.637 1.323 1.664 2.517 3.328 4.053 4.779 2.475 2.304 5.333 3.925 8.235 5.547 1.621 0.896 3.029 2.091 4.779 2.773 4.949 2.005 10.155 3.2 15.659 3.2 0.043 0 469.376 0 469.376 0 23.595 0 42.667-19.072 42.667-42.667s-19.072-42.667-42.667-42.667h-433.195l-7.083-42.667h482.944c21.248 0 39.253-15.616 42.24-36.608l42.667-298.667c1.749-12.288-1.92-24.704-9.984-34.005zM804.139 298.667l-12.16 85.333h-151.979v-85.333h164.139zM597.333 298.667v85.333h-128v-85.333h128zM597.333 426.667v85.333h-128v-85.333h128zM426.667 298.667v85.333h-128c-2.261 0-4.309 0.64-6.315 1.28l-14.421-86.613h148.736zM299.264 426.667h127.403v85.333h-113.195l-14.208-85.333zM640 512v-85.333h145.835l-12.16 85.333h-133.675z"
                className=""
              ></path>
              <path
                d="M426.667 832c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64z"
                className=""
              ></path>
              <path
                d="M810.667 832c0 35.346-28.654 64-64 64s-64-28.654-64-64c0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64z"
                className=""
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

Shirts.defaultProps = {
  ladiesshortsleeve: 'Ladies Short Sleeve Premium Cotton',
  menlongsleeveprice111: '150 PHP',
  buynow: 'Buy Now',
  KIDS_src: '/external/SHOP/2-500h.png',
  MAN_src: '/external/SHOP/product-500h.jpg',
  rootClassName: '',
  KIDS_alt1: 'image',
  buynow3: 'Buy Now',
  buynow6: 'Buy Now',
  LADIES_alt: 'ladiess',
  buynow4: 'Buy Now',
  KIDS_src1: '/external/SHOP/untitled%20design1-500h.png',
  kidsshortsleeve: 'Kid Short Sleeve Premium Cotton',
  LADIES_src: '/external/SHOP/untitled%20design-500h.png',
  menlongsleeveprice11: '150 PHP',
  menlongsleeve: 'Men Long Sleeve Premium Cotton',
  menshortsleeve: 'Men Short Sleeve Premium Cotton',
  menlongsleeveprice: '150 PHP',
  buynow5: 'Buy Now',
  MAN_alt: 'image',
  menlongsleeveprice1: '150 PHP',
  buynow1: 'Buy Now',
  KIDS_alt: 'image',
  buynow2: 'Buy Now',
}

Shirts.propTypes = {
  ladiesshortsleeve: PropTypes.string,
  menlongsleeveprice111: PropTypes.string,
  buynow: PropTypes.string,
  KIDS_src: PropTypes.string,
  MAN_src: PropTypes.string,
  rootClassName: PropTypes.string,
  KIDS_alt1: PropTypes.string,
  buynow3: PropTypes.string,
  buynow6: PropTypes.string,
  LADIES_alt: PropTypes.string,
  buynow4: PropTypes.string,
  KIDS_src1: PropTypes.string,
  kidsshortsleeve: PropTypes.string,
  LADIES_src: PropTypes.string,
  menlongsleeveprice11: PropTypes.string,
  menlongsleeve: PropTypes.string,
  menshortsleeve: PropTypes.string,
  menlongsleeveprice: PropTypes.string,
  buynow5: PropTypes.string,
  MAN_alt: PropTypes.string,
  menlongsleeveprice1: PropTypes.string,
  buynow1: PropTypes.string,
  KIDS_alt: PropTypes.string,
  buynow2: PropTypes.string,
}

export default Shirts
