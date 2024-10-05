import React, { useState, useEffect } from 'react';
import './Rewards.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Rewards = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [rewards, setRewards] = useState([]);

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
        const rewardsData = data.map(user => ({
          username: user.username,
          rewards: user.score * 10, // Calculate rewards as 10 times the score
        }));
        setRewards(rewardsData);
      })
      .catch(error => console.error('Error fetching leaderboard:', error));
  }, []);

  // Get the last user who entered a reward
  const lastUser = leaderboard[leaderboard.length - 1];

  return (
    <div id='rewards' className='rewards'>
      <div className="title-box">
        <h1>Rewards</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="rewards-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>

      {/* Display rewards for all users */}
      

      {/* Display the last user who entered a reward */}
      {lastUser && (
        <div className="last-user-reward">
          <h2>Last User: {lastUser.username}</h2>
          <h3>Rewards: {lastUser.score * 10}</h3> {/* Rewards calculated as 10 times the score */}
        </div>
      )}

      <div className="rewards-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default Rewards;
