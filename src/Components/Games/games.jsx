import React from 'react';
import './games.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import game1_image from '../../assets/game1.jpg'; // Replace with actual image paths
import game2_image from '../../assets/game2.jpg'; // Replace with actual image paths
import game3_image from '../../assets/game3.jpg'; // Replace with actual image paths
import { Link } from 'react-router-dom';

const Games = () => {
  return (
    <div id='games-id' className='games'>
      <div className="title-box">
        <h1>Games</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className='games'>
        <div className='grid' id='games-grid'>
          <Link to="/memory-game" className='grid-item'>
            <img src={game1_image} alt="Game 1" />
            <p>Game 1</p>
          </Link>
          <Link to="/road-sign-quiz" className='grid-item'>
            <img src={game2_image} alt="Game 2" />
            <p>Game 2</p>
          </Link>
          <Link to="/responsive-game" className='grid-item'>
            <img src={game3_image} alt="Game 3" />
            <p>Game 3</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Games;
