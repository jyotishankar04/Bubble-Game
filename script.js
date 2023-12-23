let mainPanel = document.querySelector("#mainPanel");
let timerBox = document.querySelector("#timer");
let startGame = document.querySelector("#startGame");
let hitBox = document.querySelector("#hitVal");
let scoreBox = document.querySelector("#scoreVal");
let popUp = document.querySelector("#popUp");
let newGameEL = document.querySelector("#newGame");
let popUpScore = document.querySelector("#popUpScore");
let popUpBestScore = document.querySelector("#popUpBestScore");
let welcome = document.querySelector("#welcome");
let byme = document.querySelector("#Byme");
let titleGame = document.querySelector("#titleGame");

// !This clutter helps us to create new bubbles inside the main pannel

//? variables
let timeVar = 60;
let clutter = ``;
let hitVal;
let currentScore = 0;
let bestScore = 0;
let makeBubbles = () => {
  for (let i = 0; i <= 200; i++) {
    let ren = Math.floor(Math.random() * 10);
    // console.log("done");
    clutter += `<div class="bubble">${ren}</div>`;
  }
  clutter = mainPanel.innerHTML = clutter;
};
//
// ? Timer function that changes time per second
let runTimer = () => {
  let timeTravel = setInterval(() => {
    if (timeVar > 0) {
      timeVar--;
      timerBox.innerHTML = timeVar;
    } else {
      displayScore();
      mainPanel.innerHTML = "";
      clearInterval(timeTravel);
      // mainPanel.removeEventListener("click", false);
      hitBox.innerText = 0;
      popUp.style.top = "0";
      currentScore = 0;
      scoreBox.innerText = "0";
    }
  }, 1000);
};
let displayScore = () => {
  popUpBestScore.innerText = bestScore;
  popUpScore.innerText = currentScore;
};

// ?Function for Hit box functionality
let hitFun = () => {
  let ran = Math.floor(Math.random() * 10);
  hitVal = ran;
  hitBox.innerText = ran;
};
// !Function to achive the clicked element and update the hit val and refresh bubble
mainPanel.addEventListener("click", (details) => {
  let clickedNum = Number(details.target.innerText);
  increaseScore(clickedNum);
  hitFun();
  clutter = "";
  makeBubbles();
});

function increaseScore(clickedNum) {
  if (clickedNum === hitVal) {
    currentScore += 10;
    scoreBox.innerText = currentScore;
    if (currentScore > bestScore) {
      bestScore = currentScore;
    }
  }
}

let firstStartGame = () => {
  startGame.addEventListener("click", () => {
    startGame.style.display = "none";
    makeBubbles();
    runTimer();
  });
};

firstStartGame();
// increaseScore();

newGameEL.addEventListener("click", () => {
  popUp.style.top = "-100%";
  timeVar = 60;
  makeBubbles();
  runTimer();
});

setTimeout(() => {
  welcome.style.top = "100%";
}, 2000);
