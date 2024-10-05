import React, { useState, useEffect } from 'react';
import './Leaderboard.css'; 
import theme_pattern from '../../assets/theme_pattern.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faMedal } from '@fortawesome/free-solid-svg-icons';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  // Fetch leaderboard data from the backend
  useEffect(() => {
    fetch('http://localhost:5000/api/leaderboard')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setLeaderboard(data);
      })
      .catch(error => console.error('Error fetching leaderboard:', error));
  }, []);

  // Function to get the correct ordinal suffix for the place
  const getOrdinal = (num) => {
    const suffixes = ["th", "st", "nd", "rd"];
    const v = num % 100;
    return num + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
  };

  return (
    <div id='leaderboard' className='leaderboard'>
      <div className="title-box">
        <h1>Leaderboard</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="leaderboard-container">
        {leaderboard.length > 0 ? (
          <>
            <div className='leaderboard-single'>
              <FontAwesomeIcon icon={faTrophy} style={{ fontSize: '80px', color: '#FFD700' }} /> 
              <h3>{leaderboard[0].username}</h3>
              
              <p>{getOrdinal(1)} Place</p> {/* Changed to use getOrdinal function */}
              <h2>Score: {leaderboard[0].score}</h2>
            </div>
            <div className="leaderboard-grid">
              {leaderboard.slice(1, 4).map((entry, index) => (
                <div key={index} className='leaderboard-format'>
                  <FontAwesomeIcon icon={faMedal} style={{ fontSize: '50px', color: '#FFD700' }} />
                  <h3>{entry.username}</h3>
                  <p>{getOrdinal(index + 2)} Place</p> {/* Changed to use getOrdinal function */}
                  <h2>Score: {entry.score}</h2>

                </div>
              ))}
            </div>
          </>
        ) : (
          <h2>Loading leaderboard...</h2>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
