let popUp = document.querySelector("#popUp");
let newGame = document.querySelector("#newGame");
let score = 0;
let timer = 4;
// !making bubble
let hitRn = 0;
let highScore = 0;
function makeBubble() {
  var clutter = "";
  for (let i = 1; i <= 112; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += ` <div class="bubble">${rn}</div>`;
  }
  document.getElementById("mainPanel").innerHTML = clutter;
}
// ! Timer function

function runTimer() {
  var timerInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").innerText = timer;
    } else {
      document.querySelector("#timer").innerText = 60;
      checkHighScore(document.querySelector("#scoreVal"));
      document.querySelector("#hitVal").innerText = 0;
      document.querySelector("#mainPanel").innerHTML = "";
      clearInterval(timerInterval);
      popUp.style.top = "10px";
      checkHighScore();
    }
  }, 1000);
}

function HitBox() {
  hitRn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").innerText = hitRn;
}

let currentScore = (increaseScore = () => {
  score += 10;
  document.querySelector("#scoreVal").innerText = score;
  return score;
});

HitBox();
runTimer();
makeBubble();
document.querySelector("#mainPanel").addEventListener("click", (details) => {
  let clickedNum = Number(details.target.innerText);
  if (clickedNum === hitRn) {
    currentScore();

    makeBubble();
    HitBox();
  }
});

function updateScore() {
  score = 0;
  document.querySelector("#scoreVal").innerText = score;
}
let curScore = currentScore();

function checkHighScore() {
  if (curScore > highScore) {
    highScore = curScore;
    displayScore();
  } else {
    curScore = 0;
    displayScore();
  }
}

newGame.addEventListener("click", () => {
  HitBox();
  makeBubble();
  popUp.style.top = "-100%";
  runTimer();
  timer = 10;
  updateScore();
});

let displayScore = () => {
  document.querySelector("#popUpScore").innerText = curScore;
  document.querySelector("#popUpBestScore").innerText = highScore;
};
