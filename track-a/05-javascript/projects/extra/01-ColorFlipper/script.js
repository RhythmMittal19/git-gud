/* DOCUMENT ELEMENTS */

let button = document.getElementById('btn');
let span = document.getElementById('color-display');
let body = document.body;

/* FUNCTIONS */

function randHex(){
  let hexColor = "#";
  const chars = "0123456789ABCDEF"

  for(let value = 0; value < 6; value++){
    hexColor += chars[Math.floor(Math.random() * 16)];
  }
  return hexColor;
};

/* EVENT LISTENERS */

button.addEventListener('click',() => {
  let newHexColor = randHex();
  body.style.backgroundColor = newHexColor;
  span.textContent = newHexColor;
})




