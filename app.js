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



const btn = document.querySelector('button')

btn.addEventListener('mouseover', function () {
    console.log('MOUSED OVER ME!');
    const height = Math.floor(Math.random() * window.innerHeight);
    const width = Math.floor(Math.random() * window.innerWidth);
    btn.style.left = `${width}px`;
    btn.style.top = `${height}px`;
});

btn.addEventListener('click', function () {
    btn.innerText = 'YOU GOT ME!';
    document.body.style.backgroundColor = 'green';
});