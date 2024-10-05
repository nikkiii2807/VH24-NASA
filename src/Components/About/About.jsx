import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/logo-gamer.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About the Game</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Game logo" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              The "Game up the Supply Chain" is designed to help food delivery employees, 
              working for companies like Swiggy and Zomato, navigate complex urban routes 
              efficiently. It helps improve real-time decision-making by simulating different 
              traffic conditions and road networks.
            </p>
            <p>
              Compete with others to complete deliveries faster, earn rewards, and rank on 
              the leaderboard. The more you play, the more you learn to manage time and 
              overcome obstacles, making you an expert in delivery strategies.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>Route Management</p><hr style={{width:"70%"}} /></div>
            <div className="about-skill"><p>Time Efficiency</p><hr style={{width:"80%"}} /></div>
            <div className="about-skill"><p>Traffic Navigation</p><hr style={{width:"60%"}} /></div>
            <div className="about-skill"><p>Leaderboard Competition</p><hr style={{width:"90%"}} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>100+</h1>
          <p>DELIVERIES COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>50+</h1>
          <p>ROUTES MASTERED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>500+</h1>
          <p>HOURS PLAYED</p>
        </div>
      </div>
    </div>
  )
}

export default About