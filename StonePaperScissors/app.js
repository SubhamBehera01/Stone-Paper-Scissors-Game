let move = document.querySelectorAll(".action");
let userpoint = document.querySelector(".you");
let botpoint = document.querySelector(".bot");
let msg = document.querySelector(".pick");
let reset = document.querySelector(".Reset");

let userscore = 0;
let botscore = 0;

const creatbotmove = () => {
  const opt = ["rock", "paper", "scissors"];
  const randidx = Math.floor(Math.random() * 3);
  return opt[randidx];
};

const draw = () => {
  msg.innerText = "Game was draw. Play Again!";
  msg.style.backgroundColor = "green";
};

const showWinner = (userwin, usermove, botmove) => {
  if (userwin) {
    userscore++;
    userpoint.innerText = userscore;
    msg.innerText = `You Win! your ${usermove} Beats ${botmove}.`;
    msgcolor();
  } else {
    botscore++;
    botpoint.innerText = botscore;
    msg.innerText = `You Lost! ${botmove} Beats Your ${usermove}.`;
  }
};

const msgcolor = (userwin, usermove, botmove) => {
  if (usermove === "rock" && botmove === "scissors") {
    userwin = msg.style.backgroundColor = "#f083a2";
  } else if (usermove === "paper" && botmove === "rock") {
    userwin = msg.style.backgroundColor = "#c38edc";
  } else if (usermove === "scissors" && botmove === "paper") {
    userwin = msg.style.backgroundColor = "#7fadff";
  } else {
    userwin = msg.style.backgroundColor = "red";
  }
};

const playgame = (usermove) => {
  const botmove = creatbotmove();
  if (usermove === botmove) {
    draw();
  } else {
    let userwin = true;
    if (usermove === "rock") {
      userwin = botmove === "scissors" ? true : false;
    } else if (usermove === "paper") {
      userwin = botmove === "rock" ? true : false;
    } else {
      userwin = botmove === "paper" ? true : false;
    }
    showWinner(userwin, usermove, botmove);
    msgcolor(userwin, usermove, botmove);
  }
};

move.forEach((action) => {
  action.addEventListener("click", () => {
    const usermove = action.getAttribute("id");
    playgame(usermove, msgcolor);
  });
});

const resetGame = () => {
  userscore = 0;
  botscore = 0;
  userpoint.innerText = userscore;
  botpoint.innerText = botscore;
  msg.innerText = "Play Your Move";
  msg.style.backgroundColor = "rgb(67, 2, 67)";
};

reset.addEventListener("click", resetGame);



