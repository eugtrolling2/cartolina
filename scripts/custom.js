const denyBtn = document.getElementById("deny-btn");
const acceptBtn = document.getElementById("accept-btn");

const phrases = [
  "no",
  "haha riprova",
  "ancora",
  "ultima volta",
  "ma come :(",
  "maleducata!",
  "mi offendo!",
  "dico davvero!!!",
  "non ti parlo più",
  "...",
  "dai su",
  "schiaccia sì",
  "per favore",
  "please",
  "por favor!",
  "s'il vous plait",
  "eh dai :("
];

let cur_i = 0;

let p_width = 10;
let p_height = 30;

// Button 1: does some action
denyBtn.addEventListener("click", () => {
  if(cur_i < phrases.length - 1)
  {
    cur_i++;
    p_width += 1;
    p_height += 2;
    acceptBtn.style.padding = p_width + "px" + " " + p_height + "px";
  }
  denyBtn.textContent = phrases[cur_i];

});

acceptBtn.addEventListener("click", () => {
  window.location.href = "envelope.html";
});