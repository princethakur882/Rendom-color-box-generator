const form = document.getElementById("form");
const numberInput = document.getElementById("number");
const allboxes = document.getElementById("boxes");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const numbereInputValue = numberInput.value;

  if (numbereInputValue === "") return alert("Please add number of color boxes");

  let colors = [];
  function randomColor(){
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    return 'rgb(' + red + ',' + green + ',' + blue + ')';
  }

  function generateUniqueColor() {
    let newColor = randomColor();
    while (colors.includes(newColor)) {
      newColor = randomColor();
    }
    colors.push(newColor);
    return newColor;
  }

  function display(){
    for (let i = 1; i <= numbereInputValue; i++) {
        const genbox = document.createElement("div");
        genbox.classList.add("gen-boxes");
        genbox.textContent = i;
        genbox.style.background = generateUniqueColor();
        allboxes.appendChild(genbox);
    }
  }
  display();
  
});
