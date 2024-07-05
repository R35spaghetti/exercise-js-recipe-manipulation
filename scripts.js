 const recipeName = document.querySelector("#recipe-name");
const recipeTag = document.getElementsByTagName("h1");
console.log(recipeName);
 for (let i = 0; i < recipeTag.length; i++) {
     console.log(recipeTag[i].innerHTML);
 }

 const desc = document.querySelector(".description");
 const fontsize = window.getComputedStyle(desc).fontSize;

 console.log(fontsize);

 const image = document.querySelector('img');
 const altText = image.alt;
 console.log(altText);

 const imgDimensions = {
     width: image.naturalWidth,
     height: image.naturalHeight
 };
 const imgUrl = image.src;

 const imageInfo = {
     altText: altText,
     dimensions: imgDimensions,
     url: imgUrl
 };
 console.log(imageInfo);

const pasteIngredientAmount = document.querySelector(".ingredients-list-paste");
console.log(pasteIngredientAmount.children.length);
console.log(pasteIngredientAmount.children[3].innerHTML);

const instructionsContainer = document.querySelector(".instructions-list");


let ArrayOfInstructions = [{

    order: instructionsContainer.children,
    instructions: instructionsContainer.innerText
 }]

 ArrayOfInstructions.forEach(instruction => {console.log(instruction)});