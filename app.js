// const btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   alert("CLICKED!!!");
// });

// btn.addEventListener("click", function () {
//     console.log("SECOND THING!!!");
//   });

// btn.addEventListener('mouseover', function () {
//     btn.innerText = "STOP TOUCHING ME!";
// });

// btn.addEventListener('mouseout', function () {
//     btn.innerText = "Click Me!";
// });

// window.addEventListener('scroll', function () {
//     console.log('STOP SCROLLING!!');
// });



//Code for Annoying Button Game
// const btn = document.querySelector('button')

// btn.addEventListener('mouseover', function () {
//     console.log('MOUSED OVER ME!');
//     const height = Math.floor(Math.random() * window.innerHeight);
//     const width = Math.floor(Math.random() * window.innerWidth);
//     btn.style.left = `${width}px`;
//     btn.style.top = `${height}px`;
// });

// btn.addEventListener('click', function () {
//     btn.innerText = 'YOU GOT ME!';
//     document.body.style.backgroundColor = 'green';
// });



//Code for multiple elements/event object
//const colors = [
//   "red",
//   "orange",
//   "yellow",
//   "green",
//   "blue",
//   "purple",
//   "indigo",
//   "violet",
// ];
// const h1 = document.querySelector("h1");
// const changeColor = function (evt) {
//   h1.style.color = this.style.backgroundColor;
// };
// const container = document.querySelector("#boxes");

// for (let color of colors) {
//   const box = document.createElement("div");
//   box.style.backgroundColor = color;
//   box.classList.add("box");
//   container.appendChild(box);
//   box.addEventListener("click", changeColor);
// }

// document.body.addEventListener('keypress', function (e) {
//     console.log(e);
// });




const input = document.querySelector('#username');

input.addEventListener('keydown', function (e) {
    console.log('KEY DOWN!');
});

input.addEventListener('keyup', function (e) {
    console.log('KEY UP!');
});

input.addEventListener('keypress', function (e) {
    console.log('KEY PRESS!');
});

const addItemInput = document.querySelector('#addItem');
const itemsUl = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(e){
    if (e.key === 'Enter') {
        if (!this.value) return;
        //add a new item to list
        const newItemText = this.value;
        const newItem = document.createElement('li');
        newItem.innerText = newItemText;
        itemsUl.appendChild(newItem);
        this.value = '';
    }
});
