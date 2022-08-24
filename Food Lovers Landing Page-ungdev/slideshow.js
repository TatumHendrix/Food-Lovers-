const spaghettiDish = document.getElementById("spaghettiDishImg");
let spdY = spaghettiDish.style.marginTop;

const shrimpDish = document.getElementById("shrimpDishImg");
let shdY = shrimpDish.style.marginTop;

const cheesecakeDish = document.getElementById("cheesecakeDishImg");
let ccdY = cheesecakeDish.style.marginTop;

const wineImage = document.getElementById("wideDishImg");
let wiY = wineImage.style.marginTop;

const saladDish = document.getElementById("saladDishImg");
let sadY = saladDish.style.marginTop;

let slideInterval = 0;

shrimpDish.style.marginTop = 200 + 'px';

function slideshow() {
  if (slideInterval < 600) {
    wiY = slideInterval + 'px';
    sadY = (slideInterval + 200) + 'px';
    ccdY = (slideInterval - 200) + 'px';
    shdY = (slideInterval - 400) + 'px';
    spdY = (slideInterval - 600) + 'px';
    return [wiY, sadY, ccdY, shdY, spdY];
  } else if (slideInterval >= 600 && slideInterval <= 1000) {
    spdY = (slideInterval - 600) + 'px';
    shdY = (slideInterval -400 )+ 'px;';
    sadY = (slideInterval - 800) + 'px';
    wiY = (slideInterval - 1000) + 'px';
    return [spdY, shdY, sadY, wiY];
  } else {
    slideInterval = 0;
  }
  slideInterval++;
}

const slideSpeed = 50;


function startSlide() {
setInterval(slideshow, 10000)
}

startSlide();

console.log(slideInterval);