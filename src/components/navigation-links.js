import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <a href="/"><span className="navigation-links-text">{props.text}</span></a>
      <a href="/profile"><span className="navigation-links-text1">{props.text1}</span></a>
      <a href="/logout"><span className="navigation-links-text2">{props.text2}</span></a>
      <a href="/contact"><span className="navigation-links-text3">{props.text3}</span></a>
      <a href="/documentation"><span className="navigation-links-text4">{props.text4}</span></a>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text2: 'Logout',
  text3: 'Contact',
  text1: 'Profile',
  text: 'Home',
  rootClassName: '',
  text4: 'Documentation',
}

NavigationLinks.propTypes = {
  text2: PropTypes.string,
  text3: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
}

export default NavigationLinks
