const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach((ingr) => {
  const newIngr = document.createElement("li");
  newIngr.textContent = ingr;
  newIngr.classList.add("item")
  document.querySelector("#ingredients").appendChild(newIngr);
});

