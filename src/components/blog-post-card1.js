import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card1.css'

const BlogPostCard1 = (props) => {
  return (
    <div className={`blog-post-card1-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-post-card1-image"
      />
      <div className="blog-post-card1-container">
        <span className="blog-post-card1-text">{props.label}</span>
        <span className="blog-post-card1-text1">{props.title}</span>
        <span className="blog-post-card1-text2">{props.description}</span>
        <div className="blog-post-card1-container1">
          <div className="blog-post-card1-profile"></div>
        </div>
      </div>
    </div>
  )
}

BlogPostCard1.defaultProps = {
  image_alt: 'image',
  description: 'Medium.',
  label: 'PAYMENT',
  image_src:
    'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&w=1000',
  title: 'Your current payment plan is :',
  rootClassName: '',
}

BlogPostCard1.propTypes = {
  image_alt: PropTypes.string,
  description: PropTypes.string,
  label: PropTypes.string,
  image_src: PropTypes.string,
  title: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BlogPostCard1
