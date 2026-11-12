
let getColour = function() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let colour = `rgb(${red},${green},${blue})`;
    return colour;
};

let btn = document.querySelector('button');
btn.addEventListener("click", function() {
    let h1 = document.querySelector('h1');
    let random = getColour();
    h1.innerText = random;
    let body = document.querySelector("body");
    body.style.backgroundColor = random;
});

let slider = document.getElementById("myRange");

slider.addEventListener("input", function() {
    let colour = `hsl(${slider.value}, 100%, 50%)`;
    let body = document.querySelector("body");
    body.style.backgroundColor = colour;

    let h1 = document.querySelector("h1");
    h1.innerText = colour;
});
