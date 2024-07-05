const logoTextColour = document.getElementsByClassName("logo-text");
logoTextColour[0].style.color = "#384241";

const correctedHeader = document.getElementsByTagName("header")[0];
correctedHeader.style.display = "flex";
correctedHeader.style.justifyContent = "flex-start";
correctedHeader.style.borderBottomColor = "lightgray";

const correctRecipeName = document.getElementById("recipe-name");
correctRecipeName.innerText = "Frozen Cheescake";

const timeIcon = document.getElementsByClassName("time-container");
timeIcon[0].firstElementChild.classList.add("material-icons");
timeIcon[0].lastElementChild.textContent = "60+ min";

const image = document.querySelector(".image-container img");
image.src = "assets/frozen-cheesecake-slice.jpg";

const ingredientContainer = document.querySelector(".how-to-do .ingredients-container");
ingredientContainer.style.backgroundColor = "#f9f9f9";

const ingredientsListBottom = document.querySelector(".ingredients-list-bottom");
const correctContent = "<li>15st digistivetex</li><li>Lite smör</li>";
ingredientsListBottom.innerHTML = correctContent;


const ingredientsListPaste = document.querySelector(".ingredients-list-paste");
const thirdIngredient = ingredientsListPaste.children[2];
thirdIngredient.textContent = "3tsk vaniljsocker";

const missingIngredientElement = document.createElement('li');
missingIngredientElement.textContent = "400g naturell philadelphiaost";
ingredientsListPaste.appendChild(missingIngredientElement);

const elementInstructions = document.querySelector(".instructions.shadow");
elementInstructions.classList.remove("shadow");

const instruktioner = document.querySelector(".instructions-list");
const instruktionerItem = instruktioner.querySelectorAll("li")
instruktionerItem[1].textContent = "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.";
instruktionerItem[8].textContent = "Ställ in i frysen över natten.";

const elements = document.querySelectorAll('.to-bottom, .to-paste .how-to-do');
elements.forEach(element => {
    element.style.fontSize = "18px";
});