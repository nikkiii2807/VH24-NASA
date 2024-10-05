// index.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/nasa_web', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Quiz Schema
const QuizSchema = new mongoose.Schema({
    question: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswer: { type: String, required: true }
});

const Quiz = mongoose.model('Quiz', QuizSchema);

// Leaderboard Schema
const LeaderboardSchema = new mongoose.Schema({
    username: { type: String, required: true },
    score: { type: Number, required: true }
});

const Leaderboard = mongoose.model('Leaderboard', LeaderboardSchema);

// Fetch quiz questions
app.get('/api/quiz', async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.status(200).json(quizzes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching quizzes' });
    }
});

// Submit quiz answers and update leaderboard
// Backend - Submit quiz answers and update leaderboard
app.post('/api/quiz/submit', async (req, res) => {
    const { username, answers } = req.body;

    try {
        const quizzes = await Quiz.find();
        let score = 0;

        // Log correct answers and user answers for debugging
        console.log("Correct Answers:", quizzes.map(q => q.correctAnswer));
        console.log("User Answers:", answers);

        // Calculate score based on submitted answers
        answers.forEach((answer, index) => {
            if (quizzes[index]?.correctAnswer === answer) { // Check if answer is correct
                score++;
            }
        });

        // Save score to leaderboard
        const leaderboardEntry = new Leaderboard({ username, score });
        await leaderboardEntry.save();

        res.status(200).json({ message: 'Quiz submitted successfully', score });
    } catch (error) {
        console.error('Error submitting quiz:', error);
        res.status(500).json({ message: 'Error submitting quiz' });
    }
});


// Fetch leaderboard data
app.get('/api/leaderboard', async (req, res) => {
    try {
        const leaderboard = await Leaderboard.find().sort({ score: -1 }).limit(10); // Top 10 players
        res.status(200).json(leaderboard);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching leaderboard' });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
