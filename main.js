import "./style.css";

const gameWidth = 320;
const gameHeight = 200;

const view = document.getElementById("view");
const hud = document.getElementById("hud");

const viewCtx = view?.getContext("2d");
const hudCtx = hud?.getContext("2d");

console.log(hudCtx);

if (viewCtx && hudCtx) {
  view.width = hud.width = gameWidth;
  view.height = hud.height = gameHeight;

  const hudImage = new Image();
  const hudImageHeight = 39;
  hudImage.onload = () => {
    hudCtx.drawImage(hudImage, 0, gameHeight - hudImageHeight);
  };
  hudImage.src = "status-bar.gif";
}
