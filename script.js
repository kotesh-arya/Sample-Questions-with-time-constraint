// const first = document.querySelector("#first");
// const later = document.querySelector("#later");
// const add = document.querySelector("#one");
// const sub = document.querySelector("#two");
// const multiply = document.querySelector("#three");
// const divide = document.querySelector("#four");
// const message = document.querySelector("#message");

// add.addEventListener("click",addNumbers);
// sub.addEventListener("click",subtractNumbers);
// multiply.addEventListener("click",multiplyNumbers);
// divide.addEventListener("click",divideNumbers);

// function addNumbers(){
//    var primary = Number(first.value);
//    var secondary = Number(later.value);
//    var sum = primary + secondary;
//    message.innerText = sum;
// }
// function subtractNumbers(){
//   var primary = Number(first.value);
//    var secondary = Number(later.value);
//     var minus = primary - secondary;
//    message.innerText = minus;
// }
// function multiplyNumbers(){
//   var primary = Number(first.value);
//    var secondary = Number(later.value);
//     var into = primary * secondary;
//    message.innerText = into;
// }
// function divideNumbers(){
//   var primary = Number(first.value);
//    var secondary = Number(later.value);
//     var dive = primary / secondary;
//    message.innerText = dive;
// }
// ---------------------------------------------------------

// const inputText = document.querySelector("#input-text");
// const increase = document.querySelector("#increase");
// const decrease = document.querySelector("#decrease");
// const message = document.querySelector("#message");

// inputText.addEventListener("input", showText);
// increase.addEventListener("click", increaseSize);
// decrease.addEventListener("click", decreaseSize);


// function showText(e) {
//   message.innerHTML = e.target.value;
// }
// var textSize = 16;
// function increaseSize() {

//   textSize += 2;
//   message.style.fontSize = `${textSize}px`;

// }
// function decreaseSize() {

//   textSize -= 2;
//   message.style.fontSize = `${textSize}px`;


// }

// -----------------------------------------------------

// const inputText = document.querySelector("#input-text");
// const bigger = document.querySelector("#bigger");
// const small = document.querySelector("#small");
// const smaller = document.querySelector("#smaller");
// const message = document.querySelector("#message");

// inputText.addEventListener("input", showText);
// bigger.addEventListener("click", showBigger);
// small.addEventListener("click", showSmall);
// smaller.addEventListener("click", showSmaller);


// function showText(e) {
//   message.innerHTML = e.target.value;
// }
// function showBigger() {
//   message.innerHTML = `<h1>  ${inputText.value}  </h1>`;
// }

// function showSmall() {
//   message.innerHTML = `<strong>  ${inputText.value} </strong>`;
// }

// function showSmaller() {
//   message.innerHTML = `<strike>  ${inputText.value} </strike>`;
// }

// -------------------------------------------------------


// const inputText = document.querySelector("#input-text");
// const red = document.querySelector("#red");
// const blue = document.querySelector("#blue");
// const green = document.querySelector("#green");
// const message = document.querySelector("#message");

// inputText.addEventListener("input",showText)
// red.addEventListener("click",showRed);
// blue.addEventListener("click",showBlue);
// green.addEventListener("click",showGreen);


//  function showText(e){
//  message.innerHTML = e.target.value;
//  }
// function showRed(){
// message.style.color = "red";
// }
// function showBlue(){
// message.style.color = "blue";

// }
// function showGreen(){
// message.style.color = "green";

// }
// -----------------------------------------------------

// var ul = document.createElement("ul");
// document.body.appendChild(ul);

// var li1 = document.createElement("li");
// var li2 = document.createElement("li");

// ul.appendChild(li1);
// ul.appendChild(li2);
// let bokka = document.createElement("p");
// bokka.innerText = 'My name is '
// document.body.appendChild(bokka);

//   bokka.append(" lakhan");

  // -----------------------------------------------------

// const text = document.querySelector("#text");
// const loaded = document.querySelector("#loaded");

// loaded.addEventListener("click",hideText);

// function hideText(){
//   text.style.display = "none";
//   loaded.disabled = true;
// }

// ---------------------------------------------------------

// Sample Api -- https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json

// const fetchData = document.querySelector("#fetch");
// const message = document.querySelector("#message");
// serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
//  function constructUrl(text){
//    return serverUrl+ "?text="+text;
//  }
//   fetchData.addEventListener("click",fetchApi);
//  function fetchApi(){
//    fetch(constructUrl("kotesh"))
//    .then(response => response.json())
//    .then(data => console.log(data.contents.text.toUpperCase()));
//  }

const fetchResult = document.querySelector("#fetch");
const message = document.querySelector("#message");
var serverUrl = "https://jsonplaceholder.typicode.com/dummyUsers";

// my url with text --> https://lessonfourapi-1.kotesharya.repl.co/translate/yoda.json?text=mamaji

fetchResult.addEventListener("click",showResponse);

function showResponse(){
  fetch(serverUrl)
  .then(response => console.log(response.status))
    .catch(errorHandler)
}
function errorHandler(error){
  message.innerHTML = `The error is ${error}`;
}