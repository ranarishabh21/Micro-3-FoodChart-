const foodData = require("./asset/food.json");

// //------------------------------------------------------//
// 1) list all the food items

function listAll() {
  return foodData;
}

// 2) list all the food items with category vegetables
function listOfVegetables() {
  return foodData.filter((item) => {
    item.category === "Vegetable";
  });
}

// 3) list all the food items with category fruit

function listOfFruits() {
  return foodData.filter((item) => {
    item.category === "Fruits";
  });
}

// 4) list all the food items with category protien
function listOfProtiens() {
  return foodData.filter((item) => {
    item.category === "Protien";
  });
}
// 5) list all the food items with category nuts
function listOfNuts() {
  return foodData.filter((item) => {
    item.category === "Nuts";
  });
}
// 6) list all the food items with category grains
function listOfGrains() {
  return foodData.filter((item) => {
    item.category === "Grains";
  });
}
// 7) list all the food items with category dairy
function listOfDairy() {
  return foodData.filter((item) => {
    item.category === "Dairy";
  });
}

// 8) list all the food items with calorie above 100
function listOfHigherCalories(calorie) {
  return foodData.filter((item) => item.calorie > calorie);
}

// 9) list all the food items with calorie below 100
function listOfLowerCalories(calorie) {
  return foodData.filter((item) => item.calorie < calorie);
}
// 10) list all the food items with highest protien content to lowest
function highestProtienToLowest() {
  return foodData.sort((a, b) => b.protien - a.protien);
}
// 11) list all the food items with lowest cab content to highest
function LowestCarbsToHighest() {
  return foodData.sort((a, b) => a.cab - b.cab);
}


//----------------------------------------------------------------------------------------------------------------------------------------//

console.log(listAll());
console.log(listOfVegetables());
console.log(listOfFruits());
console.log(listOfProtiens());
console.log(listOfNuts());
console.log(listOfGrains());
console.log(listOfDairy());
console.log(listOfHigherCalories(100));
console.log(listOfLowerCalories(100));
console.log(highestProtienToLowest());
console.log(LowestCarbsToHighest());