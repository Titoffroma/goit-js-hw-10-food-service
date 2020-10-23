import createFoodList from '../templates/food-list.hbs';
import objString from '../menu.json';
import './themes';
const foodListRef = document.querySelector('.js-menu');
const foodListHtml = objString.map(el => createFoodList(el)).join('');
foodListRef.innerHTML = foodListHtml;
