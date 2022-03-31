
"use strict";

let div = document.querySelector(".js-div");

let text = document.querySelector(".js-text");
let title = document.querySelector(".js-title");


if (div.classList.contains("warning")) {div.innerHTML = "<h1>AVISO</h1><p>Tenga cuidado</p>"}  

else if (div.classList.contains("error")) {div.innerHTML = "<h1>ERROR</h1><p>Ha surgido un error</p>"} 

else if (div.classList.contains("success")) {div.innerHTML = "<h1>CORRECTO</h1><p>Los datos son correctos</p>"}


