const imgWrapper = document.getElementById("sliderBox");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");

const forwardBtn = document.getElementById("forwardArrow");
const reverseBtn = document.getElementById("reverseArrow");

const gola1 = document.getElementById("gola1");
const gola2 = document.getElementById("gola2");
const gola3 = document.getElementById("gola3");
const gola4 = document.getElementById("gola4");

img1.style.display = "block";

let forwardBtnClickCounter = 1;
let timoutCounter = 2;

function reset() {
  img1.style.display = "none";
  img2.style.display = "none";
  img3.style.display = "none";
  img4.style.display = "none";
}

forwardBtn.addEventListener("click", () => {
  img1.style.display = "none";
  switch (forwardBtnClickCounter) {
    case 1:
      reset();
      img1.style.display = "block";
      gola1.style.backgroundColor = "maroon";
      gola4.style.backgroundColor = "ivory";
      forwardBtnClickCounter = 2;
      timoutCounter = 2;
      clearInterval(slideOn);
      slideOn = setInterval(timoutSlider, 5000);
      break;
    case 2:
      reset();
      img2.style.display = "block";
      gola1.style.backgroundColor = "ivory";
      gola2.style.backgroundColor = "maroon";
      forwardBtnClickCounter = 3;
      timoutCounter = 3;
      clearInterval(slideOn);
      slideOn = setInterval(timoutSlider, 5000);
      break;
    case 3:
      reset();
      img3.style.display = "block";
      gola2.style.backgroundColor = "ivory";
      gola3.style.backgroundColor = "maroon";
      forwardBtnClickCounter = 4;
      timoutCounter = 4;
      clearInterval(slideOn);
      slideOn = setInterval(timoutSlider, 5000);
      break;
    case 4:
      reset();
      img4.style.display = "block";
      gola3.style.backgroundColor = "ivory";
      gola4.style.backgroundColor = "maroon";
      forwardBtnClickCounter = 1;
      timoutCounter = 1;
      clearInterval(slideOn);
      slideOn = setInterval(timoutSlider, 5000);
      break;
  }
});

reverseBtn.addEventListener("click", () => {
  switch (forwardBtnClickCounter) {
    case 1:
      reset();
      img4.style.display = "block";
      forwardBtnClickCounter = 4;
      timoutCounter = 1;
      gola1.style.backgroundColor = "ivory";
      gola4.style.backgroundColor = "maroon";
      clearInterval(slideOn);
      slideOn = setInterval(timoutSlider, 5000);
      break;
    case 2:
      reset();
      img1.style.display = "block";
      forwardBtnClickCounter = 1;
      timoutCounter = 2;
      gola1.style.backgroundColor = "maroon";
      gola2.style.backgroundColor = "ivory";
      clearInterval(slideOn);
      slideOn = setInterval(timoutSlider, 5000);
      break;
    case 3:
      reset();
      img2.style.display = "block";
      forwardBtnClickCounter = 2;
      timoutCounter = 3;
      gola3.style.backgroundColor = "ivory";
      gola2.style.backgroundColor = "maroon";
      clearInterval(slideOn);
      slideOn = setInterval(timoutSlider, 5000);
      break;
    case 4:
      reset();
      img3.style.display = "block";
      forwardBtnClickCounter = 3;
      timoutCounter = 4;
      gola4.style.backgroundColor = "ivory";
      gola3.style.backgroundColor = "maroon";
      clearInterval(slideOn);
      slideOn = setInterval(timoutSlider, 5000);
      break;
  }
});

function timoutSlider() {
  switch (timoutCounter) {
    case 1:
      img4.style.display = "none";
      img1.style.display = "block";
      timoutCounter = 2;
      gola4.style.backgroundColor = "ivory";
      gola1.style.backgroundColor = "maroon";
      break;
    case 2:
      img1.style.display = "none";
      img2.style.display = "block";
      timoutCounter = 3;
      gola1.style.backgroundColor = "ivory";
      gola2.style.backgroundColor = "maroon";
      break;
    case 3:
      img2.style.display = "none";
      img3.style.display = "block";
      timoutCounter = 4;
      gola2.style.backgroundColor = "ivory";
      gola3.style.backgroundColor = "maroon";
      break;
    case 4:
      img3.style.display = "none";
      img4.style.display = "block";
      timoutCounter = 1;
      gola3.style.backgroundColor = "ivory";
      gola4.style.backgroundColor = "maroon";
      break;
  }
}

let slideOn = setInterval(timoutSlider, 5000);
