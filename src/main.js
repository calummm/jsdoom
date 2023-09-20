import { createKeyboardMap } from './input';
import './style.css';

const gameWidth = 320;
const gameHeight = 200;

// Setup view

const view = document.getElementById('view');
const hud = document.getElementById('hud');

const viewCtx = view?.getContext('2d');
const hudCtx = hud?.getContext('2d');

if (!viewCtx || !hudCtx) {
  throw new Error('canvas not defined');
}

view.width = hud.width = gameWidth;
view.height = hud.height = gameHeight;

const hudImage = new Image();
const hudImageHeight = 39;
hudImage.onload = () => {
  hudCtx.drawImage(hudImage, 0, gameHeight - hudImageHeight);
};
hudImage.src = 'status-bar.gif';

// Keyboard
const key = createKeyboardMap();

// Main Game loop
let tick = 0;
const loop = () => {
  tick = tick > 20 ? 0 : tick++;
  window.requestAnimationFrame(loop);
};
loop();
