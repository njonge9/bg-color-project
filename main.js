const button = document.querySelector('#btn');
const body = document.querySelector('body');
const colors = ['red', 'blue', 'violet', 'green', 'pink', 'black', 'yellow'];

button.addEventListener('click',changeColor);

function changeColor() {
    const colorIndex = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex]
    console.log(colorIndex)
}

changeColor()

