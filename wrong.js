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