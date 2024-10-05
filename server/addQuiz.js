const mongoose = require('mongoose');

// MongoDB Connection (replace with your MongoDB URI)
mongoose.connect('mongodb://localhost:27017/nasa_web', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Quiz Schema
const QuizSchema = new mongoose.Schema({
    question: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswer: { type: String, required: true }
});

const Quiz = mongoose.model('Quiz', QuizSchema);

// Sample quiz questions
const quizQuestions = [
    {
        question: "1. What is the most important factor in customer service?",
        options: ["Fast delivery", "Good communication", "Politeness", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        question: "2. How should you handle an angry customer?",
        options: ["Ignore them", "Apologize and stay calm", "Argue with them", "Blame traffic"],
        correctAnswer: "Apologize and stay calm"
    },
    {
        question: "3. What should you do if you are running late on a delivery?",
        options: ["Notify the customer proactively", "Rush and ignore traffic", "Do nothing", "Ask someone else to take over"],
        correctAnswer: "Notify the customer proactively"
    },
    {
        question: "4. How would you follow up with a customer after delivery?",
        options: ["No need to follow up", "Send a thank-you message", "Ask them for feedback", "Ignore it"],
        correctAnswer: "Ask them for feedback"
    },
    {
        question: "5. What is the best way to greet a customer during delivery?",
        options: ["Hi, here's your food!", "Throw the food and leave", "Just give the food silently", "Smile and politely say hello"],
        correctAnswer: "Smile and politely say hello"
    }
];

// Insert sample quiz questions into the database
Quiz.insertMany(quizQuestions)
    .then(() => {
        console.log('Sample quiz questions added successfully');
        mongoose.connection.close(); // Close the connection after completion
    })
    .catch(err => {
        console.error('Error adding quiz questions:', err);
        mongoose.connection.close();
    });
