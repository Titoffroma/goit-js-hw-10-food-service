import storage from './storage';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const themeToggle = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

// Проверяет наличие настройки темы в localStorage, если есть - применяет ее, если нет - применяет дефолт,
// и устанавливает инпут в соответсвующее положение

const themeChosen = storage.load('Theme');
themeToggle.checked = themeChosen == 'dark-theme' ? true : false;
body.classList.add(themeChosen ? themeChosen : Theme.LIGHT);

const toggleTheme = function (event) {
  body.classList.toggle(Theme.DARK, !body.classList.toggle(Theme.LIGHT));
  storage.save('Theme', body.classList[0]);
};

themeToggle.addEventListener('change', toggleTheme);
