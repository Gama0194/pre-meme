const quizQuestions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "What is the largest planet in our solar system?",
      choices: ["Jupiter", "Saturn", "Neptune", "Earth"],
      answer: "Jupiter"
    },
    // Add more questions as needed
  ];
  
  // Other global variables
  const startButton = document.getElementById("start-btn");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const endScreen = document.getElementById("end-screen");
  const finalScore = document.getElementById("final-score");
  const initialsInput = document.getElementById("initials");
  const highscoreForm = document.getElementById("highscore-form");
  
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 60;
  let timerId;
  
  // Function to start the quiz
  function startQuiz() {
    startButton.addEventListener("click", startTimer);
    startButton.addEventListener("click", showNextQuestion);
  }
  
  // Function to start the timer
  function startTimer() {
    timerId = setInterval(function()){
      timeLeft--;
      // Update the timer display
      // Example: document.getElementById("timer").textContent = timeLeft;
      if (timeLeft <= 0)}
      }