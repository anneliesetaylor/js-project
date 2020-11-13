
/* DOM EVENT #1 */

let image = document.querySelector('#coffeepic');

let hot = 'images/hot_coffee.jpg';
let iced = 'images/iced_coffee.jpg';

image.onmouseenter = (e) => {
	// change image
   e.target.setAttribute('src', iced);
};

image.onmouseleave = (e) => {
// change image
   e.target.setAttribute('src', hot);
};


/* DOM EVENT #2 */

const clicker = document.querySelector('#latte');
const text = document.querySelector('#latteinfo');
// hide the image
text.style.display = 'none';

clicker.onclick = () => {
  if (text.style.display === 'none') {
    text.style.display = 'block';
  } else if (text.style.display === 'block') {
       text.style.display = 'none';
};
};





const clicker_two = document.querySelector('#cappuccino');
const text_two = document.querySelector('#cappuccinoinfo');
// hide the image
text_two.style.display = 'none';

clicker_two.onclick = () => {
  if (text_two.style.display === 'none') {
    text_two.style.display = 'block';
  } else if (text_two.style.display === 'block') {
       text_two.style.display = 'none';
};
};



const clicker_three = document.querySelector('#macchiato');
const text_three = document.querySelector('#macchiatoinfo');
// hide the image
text_three.style.display = 'none';

clicker_three.onclick = () => {
  if (text_three.style.display === 'none') {
    text_three.style.display = 'block';
  } else if (text_three.style.display === 'block') {
       text_three.style.display = 'none';
};
};
