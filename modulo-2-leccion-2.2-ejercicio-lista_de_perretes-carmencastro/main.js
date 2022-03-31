"use strict"

const listElement = document.querySelector (".js-list")

const firstDogImage =
  "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";

const secondDogImage =
  "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";

const thirdDogImage =
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";


listElement.innerHTML = `<li>${firstDogName} <img src="${firstDogImage}" alt=""></li>`

listElement.innerHTML += `<li>${secondDogName} <img src="${secondDogImage}" alt=""></li>`

listElement.innerHTML += `<li>${thirdDogName} <img src="${thirdDogImage}" alt=""></li>`







