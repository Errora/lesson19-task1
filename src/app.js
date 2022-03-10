import { getRandomColor } from './utils';

export default function initApp() {
  console.log('Hello world');
      const mainButton = document.createElement('button');
      mainButton.className = 'button';
      mainButton.textContent = 'Изменить цвет страницы';
      const body = document.querySelector('body');
      body.append(mainButton);
      mainButton.addEventListener('click', () => {
        const randomColor = getRandomColor();
        body.style.background = randomColor;
      });
}