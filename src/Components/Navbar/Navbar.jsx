import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/nav_underline.png';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import audioFile from '../../assets/background.mp3'; // Import your audio file
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isPlaying, setIsPlaying] = useState(false); // State to track audio play/pause
  const menuRef = useRef();
  const audioRef = useRef(new Audio(audioFile)); // Reference to the audio element

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-300px";
  };

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Pause audio
    } else {
      audioRef.current.play(); // Play audio
    }
    setIsPlaying(!isPlaying); // Toggle play/pause state
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" className='logo' />
      <img src={menu_open} onClick={openMenu} alt="Open Menu" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />
        <li>
          <AnchorLink className='anchor-link' href='#home' offset={100}>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt='underline' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt='underline' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#quiz'>
            <p onClick={() => setMenu("quiz")}>Quiz</p>
          </AnchorLink>
          {menu === "quiz" && <img src={underline} alt='underline' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#leaderboard'>
            <p onClick={() => setMenu("leaderboard")}>Leaderboard</p>
          </AnchorLink>
          {menu === "leaderboard" && <img src={underline} alt='underline' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#rewards'>
            <p onClick={() => setMenu("rewards")}>Rewards</p>
          </AnchorLink>
          {menu === "rewards" && <img src={underline} alt='underline' />}
        </li>
        
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#games-id'>
            <p onClick={() => setMenu("games")}>Games</p>
          </AnchorLink>
          {menu === "games" && <img src={underline} alt='underline' />}
        </li>
        
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => setMenu("contact")}>Feedback</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt='underline' />}
        </li>
      </ul>

      {/* Speaker Toggle */}
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
      </div>

      {/* Volume Toggle */}
      <div className="volume-toggle">
        <button onClick={toggleAudio} className='volume-btn'>
          {isPlaying ? '🔊 Speaker On' : '🔇 Speaker Off'}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
