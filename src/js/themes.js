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
themeToggle.checked = themeChosen ? true : false;
body.classList.add(themeChosen ? Theme.DARK : Theme.LIGHT);

const toggleTheme = function () {
  storage.save(
    'Theme',
    body.classList.toggle(Theme.DARK, !body.classList.toggle(Theme.LIGHT)),
  );
};

themeToggle.addEventListener('change', toggleTheme);
