// Data Handler
function dataHandler(dataArray) {
  console.log('dataHandler');
  const range = [...Array(10).keys()];
  const listItems = range.map((item, index) => dataArray[index]);
  return listItems;
}

// create breakfast list
function createBreakfast(collection) {
  console.log('fired HTML creator');
  console.log(collection);
  const targetList = document.querySelector('.breakfast');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const {meal_name} = item;
    const injectThisItem = `<li>${meal_name}</li>`;
    targetList.innerHTML += injectThisItem;
  });
}

// create lunch list
function createLunch(collection) {
  console.log('fired HTML creator');
  console.log(collection);
  const targetList = document.querySelector('.lunch');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const {meal_name} = item;
    const injectThisItem = `<li>${meal_name}</li>`;
    targetList.innerHTML += injectThisItem;
  });
}

// Create dinner list
function createDinner(collection) {
  console.log('fired HTML creator');
  console.log(collection);
  const targetList = document.querySelector('.dinner');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const {meal_name} = item;
    const injectThisItem = `<li>${meal_name}</li>`;
    targetList.innerHTML += injectThisItem;
  });
}

// Main function
async function mainEvent() {
  console.log('script loaded');

  // breakfast
  const results = await fetch('chandra/meals');
  const breakfastItems = await results.json();
  console.log(breakfastItems);
  // const dataJson = JSON.stringify(breakfastItems.data);
  const foodNames = dataHandler(breakfastItems.data);
  createBreakfast(foodNames);

  // lunch
  const resultLunch = await fetch('/chandra/lunch');
  const lunchItems = await resultLunch.json();
  console.log(lunchItems);
  const lunches = dataHandler(lunchItems.data);
  createLunch(lunches);

  // dinner
  const resultDinner = await fetch('/chandra/dinner');
  const dinnerItems = await resultDinner.json();
  console.log(dinnerItems);
  const dinners = dataHandler(dinnerItems.data);
  createDinner(dinners);

  // format data to look nicer on homepage
  // const dataJson = JSON.stringify(breakfastItems.data);
  // targetList.innerHTML = dataJson;
}

// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent());