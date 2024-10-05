import React from 'react'
import './Hero.css'
import profile_img from '../../assets/logo-gamer.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>Welcome to DelX,</span> a gaming platform designed to help delivery partners learn, improve, and earn rewards.</h1>
      <p>
        Our platform, based in Mumbai, India, is specifically crafted for delivery partners. By engaging in interactive and educational games, you can enhance your skills in navigation, customer service, and time management. Complete challenges, level up your abilities, and earn rewards that help you become more efficient in your delivery job. DelX turns everyday tasks into fun, competitive, and rewarding experiences, making learning an enjoyable part of your daily routine.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with us</AnchorLink></div>
        <div className="hero-resume">Learn More</div>
      </div>
    </div>
  )
}


export default Hero
