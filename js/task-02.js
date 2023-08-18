const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ingredientsList = document.getElementById('ingredients');

// ingredients.forEach(ingredient => {
//   const listItem = document.createElement('li');
//   listItem.textContent = ingredient;
//   listItem.classList.add('item');
//   ingredientsList.appendChild(listItem);
// });

const ulIngredients = document.getElementById("ingredients");

const liElementsHTML = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join('');

ulIngredients.insertAdjacentHTML("beforeend", liElementsHTML);