const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// 1) варіант
// const ulIngredients = document.getElementById("ingredients");

// const liElementsHTML = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join('');

// ulIngredients.insertAdjacentHTML("beforeend", liElementsHTML);

// 2) варіант
// const ingredientsList = document.getElementById('ingredients');
// ingredients.forEach(ingredient => {
//   const listItem = document.createElement('li');
//   listItem.textContent = ingredient;
//   listItem.classList.add('item');
//   ingredientsList.appendChild(listItem);
// });



// 3) варіант і надіюсь останній))
const ulIngredients = document.getElementById("ingredients");

const liElements = ingredients.map(ingredient => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  return li;
});

ulIngredients.append(...liElements);
