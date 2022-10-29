'use strict';

const num1 = document.getElementById('num1')
const znak = document.getElementById('znak')
const num2 = document.getElementById('num2')

num1.addEventListener('input', (evt) => {
    console.log(evt.target.value);
});

num2.addEventListener('input', (evt) => {
    console.log(evt.target.value);
});
