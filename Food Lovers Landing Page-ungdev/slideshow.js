const spaghetti = document.getElementById("spaghettiDishImg");
const shrimp = document.getElementById("shrimpDishImg");
const cheesecake = document.getElementById("cheesecakeDishImg");
const wine = document.getElementById('wineDishImg');
const salad = document.getElementById('saladDishImg');
 
let spaghettiMt = spaghetti.style.marginTop;
let shrimpMt = shrimp.style.marginTop;
let cheesecakeMt = cheesecake.style.marginTop;
let wineMt = wine.style.marginTop;
let saladMt = salad.style.marginTop;

let imgArr = [spaghetti, shrimp, cheesecake, wine, salad];
let mTArr = [spaghettiMt, shrimpMt, cheesecakeMt, wineMt, saladMt];
let yValues = [-200, 0, 200, 400, 600];

let Img = class {
    constructor(num) {
        this.element = imgArr[num];
        this.mT = mTArr[num];
        this.y = yValues[num];
    }

    bump() {
        return this.y++;
    }
}

function bumpAll(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i].bump();
    }
    return arr;
}

function placeSlides(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i].mT = `${arr[i].y}px`
        arr[i].element.style.marginTop = arr[i].mT
    }
    return arr;
}

function cycle(arr) {
    arr.unshift(arr[arr.length - 1]);
    arr.pop();
    arr[0].y = yValues[0];
    return arr;
}

function display(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].y > 400) {
            arr[i].element.style.display = 'none';
        } else {
            arr[i].element.style.display = 'block';
        }
    }
}

function slideShow(arr) {
    bumpAll(arr);
    placeSlides(arr);
    if(arr[0].y >= 0) {
        return cycle(arr);
    }
        display(arr);
}

const slide0 = new Img(0);
const slide1 = new Img(1);
const slide2 = new Img(2);
const slide3 = new Img(3);
const slide4 = new Img(4);

const slides = [slide0, slide1, slide2, slide3, slide4];

function imgSlideShow() {
    return slideShow(slides);
}

const slider = setInterval(imgSlideShow, 100);

slider;