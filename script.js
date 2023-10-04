let headScore = document.getElementById("headScore");
let tailScore = document.getElementById("tailScore");
let spinCnt = document.getElementById("containerSpin");
let buttonSpin = document.getElementById("spin");
let resetSpin = document.getElementById("reset");

let countHead = [0];
let countTail = [0];

buttonSpin.addEventListener("click", () => {
  let sortNumber = Math.random();
  spinCnt.style.animation = "none";

  if (sortNumber < 0.5) {
    countHead++;
    setTimeout(() => {
      spinCnt.style.animation = "spinHeads 5s forwards";
    }, 100);
  } else {
    countTail++;
    setTimeout(() => {
      spinCnt.style.animation = "spinTails 5s forwards";
    }, 100);
  }

  setTimeout(() => {
    headScore.innerHTML = countHead;
    tailScore.innerHTML = countTail;
  }, 5000);
});

resetSpin.addEventListener("click", () => {
  countHead = 0;
  countTail = 0;
  headScore.innerHTML = countHead;
  tailScore.innerHTML = countTail;
});
