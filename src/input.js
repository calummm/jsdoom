const keyCode = {
  87: "w",
  65: "a",
  68: "d",
  83: "s",
  38: "up",
  37: "left",
  39: "right",
  40: "down",
};

const key = Object.values(keyCode).reduce((a, v) => {
  a[v] = false;
  return a;
}, {});

export const createKeyboardMap = () => {
  document.addEventListener("keydown", function (evt) {
    key[keyCode[evt.keyCode]] = true;
  });
  document.addEventListener("keyup", function (evt) {
    key[keyCode[evt.keyCode]] = false;
  });

  return key;
};
