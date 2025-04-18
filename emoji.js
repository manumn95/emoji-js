const emojiDetails = [
  { description: "Smiling face with sunglasses", emoji: "😎" },
  { description: "Thumbs up", emoji: "👍" },
  { description: "Heart eyes", emoji: "😍" },
  { description: "Crying face", emoji: "😢" },
  { description: "Party popper", emoji: "🎉" },
  // Add more emoji descriptions here
];

let currentEmojiIndex = 0;
let score = 0;
let seconds =30;
let timer;

// Dom Elements
const guessInput = document.getElementById("guess-input");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById('timer');

//  display Emoji
function displayEmoji() {
  const descriptionElement = document.getElementById("description");
  descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;
   timerElement.textContent=`Time:${seconds}s`
}

// Check the guess
function checkGuess() {
  const guess = guessInput.value.trim().toLowerCase();
  const correctEmoji = emojiDetails[currentEmojiIndex].description
    .trim()
    .toLowerCase();

  if (guess === correctEmoji) {
    resultElement.textContent = "Correct!";
    score++;
  } else {
    resultElement.textContent = "Wrong!";
  }
  scoreElement.textContent = `Score: ${score}`;
  guessInput.value = "";
  guessInput.focus();
  nextEmoji();
}

// Next emoji
function nextEmoji() {
  currentEmojiIndex++;

  setTimeout(() => {
    resultElement.textContent = "";
  }, 2000);

  if (currentEmojiIndex === emojiDetails.length) {
    currentEmojiIndex = 0;
    score = 0;
  }

  displayEmoji();
}

// Keyboard events
document.getElementById("guess-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkGuess();
  }
});

// Display the emoji onload
document.addEventListener("DOMContentLoaded", () => {
  displayEmoji();
  startTimer();
});

// Timer Functionality
function startTimer()
{
  timer = setInterval(()=>{
    seconds--;
    timerElement.textContent=`Time:${seconds}s`;
    if(seconds <=0)
    {
      endGame();
    }
  },1000)
}

//  End The Game
function endGame()
{
clearInterval(timer);
guessInput.disabled=true;
timerElement.textContent="";
}