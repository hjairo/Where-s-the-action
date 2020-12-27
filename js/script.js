/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Where's the Action  - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";


/* Variables to store buttons by id for event listener assignment - You can ignore these */
const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');

const buttons = document.querySelectorAll('.control-btn');

// Helpful log statement
console.log(buttons);

const setAction = (event) => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  };
  const eventTarget = event.target;
  eventTarget.classList.add('active');
};

/* btn1 listener */
btn1.addEventListener('click', (event) => {

  setAction(event);

  // Helpful log statement to test function
  console.log('First button is functional!');
});


/* btn2 listener */
btn2.addEventListener('click', (event) => {

  setAction(event);

  // Helpful log statement to test function
  console.log('Second button is functional!');
});


/* btn3 listener */
btn3.addEventListener('click', (event) => {

  setAction(event);

  // Helpful log statement to test function
  console.log('Third button is functional!');
});
