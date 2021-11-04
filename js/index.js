// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((index) => {
    if (state.mushrooms) {
      index.style.visibility = 'visible';
    } else {
      index.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((index) => {
    if (state.greenPeppers) {
      index.style.visibility = 'visible';
    } else {
      index.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.querySelector('.sauce');
  if (state.whiteSauce) {
    sauce.classList.add('sauce-white');
  } else {
    sauce.classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let glutes = document.querySelector('.crust');
  if (state.glutenFreeCrust) {
    glutes.classList.add('crust-gluten-free');
  } else {
    glutes.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let btnPepper = document.querySelector('.btn-pepperoni');
  if (state.pepperoni) {
    btnPepper.classList.add('active');
  } else {
    btnPepper.classList.remove('active');
  }

  let btnMushrooms = document.querySelector('.btn-mushrooms');
  if (state.mushrooms) {
    btnMushrooms.classList.add('active');
  } else {
    btnMushrooms.classList.remove('active');
  }

  let btnGreenPeppers = document.querySelector('.btn-green-peppers');
  if (state.greenPeppers) {
    btnGreenPeppers.classList.add('active');
  } else {
    btnGreenPeppers.classList.remove('active');
  }

  let btnSauce = document.querySelector('.btn-sauce');
  if (state.whiteSauce) {
    btnSauce.classList.add('active');
  } else {
    btnSauce.classList.remove('active');
  }

  let btnCrust = document.querySelector('.btn-crust');
  if (state.glutenFreeCrust) {
    btnCrust.classList.add('active');
  } else {
    btnCrust.classList.remove('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const totalText = document.getElementsByTagName('strong');
  let total = 10;

  let toppings = document.querySelectorAll('.panel.price ul li');

  if (state.pepperoni) {
    total += 1;
    toppings[0].innerText = '$1 pepperoni';
  } else {
    toppings[0].innerText = '';
  }
  if (state.mushrooms) {
    total += 1;
    toppings[1].innerText = '$1 mushrooms';
  } else {
    toppings[1].innerText = '';
  }
  if (state.greenPeppers) {
    total += 1;
    toppings[2].innerText = '$1 green peppers';
  } else {
    toppings[2].innerText = '';
  }
  if (state.whiteSauce) {
    total += 3;
    toppings[3].innerText = '$3 white sauce';
  } else {
    toppings[3].innerText = '';
  }
  if (state.glutenFreeCrust) {
    total += 5;
    toppings[4].innerText = '$5 gluten-free crust';
  } else {
    toppings[4].innerText = '';
  }
  totalText[0].innerText = '$' + total.toString();
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;
    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
