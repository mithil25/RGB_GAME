let numofSquares = 6;
let color_list = generate(numofSquares);
let pickedColor = pick();
const rgb = document.querySelector("#rgb");
const square = document.querySelectorAll(".square");
const easy = document.querySelector("#easy");
const hard = document.querySelector("#hard");
const newColor = document.querySelector("#btn");
const content = document.querySelector("#display");
const h1 = document.querySelector("h1");
rgb.textContent = pickedColor;

function Random() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function generate(nums) {
    let temp = [];
    for (let i = 0; i < nums; i++) {
        temp[i] = Random();
    }
    return temp;
}

function pick(num = 6) {
    var color = color_list[Math.floor(Math.random() * num)]
    return color;
}
// Setting Easy Level for the Game.
easy.addEventListener("click", function() {
    easy.classList.add("switch");
    hard.classList.remove("switch");
    numofSquares = 3;
    color_list = generate(numofSquares);
    pickedColor = pick(numofSquares);
    rgb.textContent = pickedColor;
    display.textContent = "";
    h1.style.backgroundColor = "rgb(51, 148, 204)";
    for (let i = 0; i < 2 * numofSquares; i++) {
        if (color_list[i]) {
            square[i].style.backgroundColor = color_list[i];
        } else {
            square[i].style.display = "none";
        }
    }
});
// Setting Hard Level for the Game.
hard.addEventListener("click", function() {
    easy.classList.remove("switch");
    hard.classList.add("switch");
    numofSquares = 6;
    display.textContent = "";
    color_list = generate(numofSquares);
    pickedColor = pick();
    h1.style.backgroundColor = "rgb(51, 148, 204)";
    rgb.textContent = pickedColor;
    for (let i = 0; i < numofSquares; i++) {
        square[i].style.display = "block";
        square[i].style.backgroundColor = color_list[i];
    }
});

newColor.addEventListener("click", function() {
    newColor.textContent = "NEW COLOR"
    color_list = generate(numofSquares);
    pickedColor = pick(numofSquares);
    display.textContent = ""
    rgb.textContent = pickedColor;
    h1.style.backgroundColor = "rgb(51, 148, 204)";
    for (let i = 0; i < numofSquares; i++) {
        if (color_list[i]) {
            square[i].style.backgroundColor = color_list[i];
        }
    }
});

function play() {
    for (let i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color_list[i];
        square[i].addEventListener("click", function() {
            if (this.style.backgroundColor === pickedColor) {
                for (let i = 0; i < numofSquares; i++) {
                    display.textContent = " CORRECT!! 🥳🥳 ";
                    newColor.textContent = "PLAY AGAIN ?"
                    h1.style.backgroundColor = pickedColor;
                    if (color_list[i]) {
                        square[i].style.backgroundColor = pickedColor;
                    }

                }
            } else {
                display.textContent = "TRY AGAIN 😓";
                this.style.backgroundColor = "#231231"
            }
        })
    }
}
play();