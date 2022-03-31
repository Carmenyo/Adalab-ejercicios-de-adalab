"use strict";

const button = document.querySelector (".js-button");

const text = document.querySelector (".js-text");

button.addEventListener("click", () => {

 text.innerHTML = "mi primer click, viva la madre que me parió" 

});