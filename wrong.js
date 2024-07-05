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
timeIcon[0].lastElementChild.innerText = "60+ min";

const image = document.querySelector(".image-container img");
image.src = "assets/frozen-cheesecake-slice.jpg";

const ingredientContainer = document.querySelector(".how-to-do .ingredients-container");
ingredientContainer.style.backgroundColor = "#f9f9f9";