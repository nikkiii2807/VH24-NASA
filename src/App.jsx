import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Rewards from './Components/Rewards/Rewards';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Quiz from './Components/Quiz/quiz';
import Leaderboard from './Components/Leaderboard/Leaderboard';
import Games from './Components/Games/games';

const App = () => {
  return (
    
      <div>
        <Navbar />
        <Hero />
        <About />
        <Quiz />
        <Leaderboard />
        <Rewards />
        <Games/>
        <Contact />
        <Footer />
      </div>
    
  );
};

export default App;
