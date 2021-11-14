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

// const fetchResult = document.querySelector("#fetch");
// const message = document.querySelector("#message");
// var serverUrl = "https://lessonfourapi-1.kotesharya.repl.co/translate/yoda.json";

// // my url with text --> https://lessonfourapi-1.kotesharya.repl.co/translate/yoda.json?text=mamaji

// fetchResult.addEventListener("click",showResponse);

// function showResponse(){
//   fetch(serverUrl)
//   .then(response => console.log(response))
//     // .catch(errorHandler)
// }
// function errorHandler(error){
//   message.innerHTML = `The error is ${error}`;
// }

// --------------------------------------------------------

//             Sneha-pujari mock 11/13/2021

// // const inputTextOne = document.querySelector("#inputText1");
// // const inputTextTwo = document.querySelector("#inputText2");
// // const check = document.querySelector("#check");
// // const message = document.querySelector("#message");

// // check.addEventListener("click",compareInput);
// // function compareInput(){
// //   if (inputTextOne.value === inputTextTwo.value){
// //     message.innerHTML="They are same";
// //   }
// //   else{
// //         message.innerHTML="They are not same";

// //   }
// // }

// ------ second task -------

// const showTask = document.querySelector("#show");
// const message = document.querySelector("#message");
// const text = document.querySelector("#text");
//  text.innerHTML = "kotesh";
//  text.style.display = "none";
// showTask.addEventListener("click",taskStatus);

// function taskStatus(){
//   for(i=0;i<dataArr.length;i++){
//     if(dataArr[i].completed === true){
// message.innerHTML += dataArr[i].task;
//     }

//   }
// }
// var dataArr = [

//   {
//     task: "brush teeth ",
//     completed: true
//   },
// {
//     task: "dance hard",
//     completed: true
//   }

// ];

// const inputDigit = document.querySelector("#password");
// const check = document.querySelector("#check");
// const message = document.querySelector("#message");
//  inputDigit.addEventListener("input",showletter);

// check.addEventListener("click",showResponse);
//   check.disabled = true;
//   function showletter(e){
//    if(e.target.value.length >= 10){
//      check.disabled = false;
//    }
//   console.log(e.target.value.length);
//  }
// function showResponse(){
//   if (inputDigit.value.length >= 10){
//     message.innerHTML = "SUCCESS";
//       check.disabled = false;

//     inputDigit.style.backgroundColor = "green";
//   }else{
//     message.innerHTML = "ERROR";
//     inputDigit.style.backgroundColor = "red";

//   }
// }


// Create two objects with name, age, and yuga as Ram, 25, Treta. Krishna, 31, Dwapar. Write a function which takes two objects and return the person with more age.

//  var ramData = {
//   name:"Ram",
//   age: 25,
//   yuga:"Treta"
// }
//  var krishnaData = {
//   name:"Krishna",
//   age: 31,
//   yuga:"Dwapar"
// }

// function showOlder(){
//   if(ramData.age > krishnaData.age){
//     console.log("Ram is the elder")
//   }else{
//     console.log("Krishna is the elder")
//   }
// }
// showOlder();

// Create two objects with name, power, and yuga as Ram, 2500, Treta. Krishna, 2325, Dwapar. Write a function which takes two objects and return the person with more power.

// var ramData = {
//   name: "Ram",
//   power: 2500,
//   yuga: "Treta"
// }
// var krishnaData = {
//   name: "Krishna",
//   power: 2325,
//   yuga: "Dwapar"
// }

// function comparePower(){
//   if(ramData.power > krishnaData.power){
//     console.log("ram is the powerful");
//   }else{
//         console.log("krishna is the powerful");

//   }
// }
// comparePower();


// Create two objects with name, power, and yuga as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points. Write a function which takes two objects and return the person with more power based on their name and power both.


// var ramData = {
//   name: "Ram",
//   power: 2500,
//   yuga: "Treta"
// }
// var krishnaData = {
//   name: "Krishna",
//   power: 2325,
//   yuga: "Dwapar"
// }

// function compreLetterPower() {
//   var ramLetterPower = ramData.name.length * 35 + ramData.power;
//   var krishnaLetterPower = krishnaData.name.length * 35 + krishnaData.power;
//    console.log(ramLetterPower);
//     console.log(krishnaLetterPower);
//   if (ramLetterPower > krishnaLetterPower) {
//     console.log("Ram is the powerful");
//   } else {
//     console.log("krishna is the powerful");

//   }

// }
// compreLetterPower();