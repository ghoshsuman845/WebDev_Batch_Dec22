/* 
How to select elements from the DOM
 1. getElementById(): get elements having the given id
 2. querySelector(): find elements with one or more css selectors
 3.querySelectorAll(): find all the elements that matches css selector and return the list of nodes
*/

let paragraph = document.getElementById("para");
console.log(paragraph);
let paraTextContent = paragraph.textContent;
console.log(paraTextContent);

let heading = document.querySelector("h1")
console.log(heading);
heading.style.color = "red"
heading.innerText = "Changing the heading"
heading.innerHTML = '<p>new para</p>'
let subtitle = document.querySelector(".subtitle")
console.log(subtitle);
let para = document.querySelector("#para")
console.log(para);

let subtitles = document.querySelectorAll(".subtitle")
console.log(subtitles);

/*
How to add elements to the document
 1. createElement(): adds new elements to dom tree
*/

let list = document.createElement("ul")
console.log(list);
// appending the new element to my document body
document.body.appendChild(list);

let listItem = document.createElement("li")
listItem.textContent = "List Item";
let listItem1 = document.createElement("li")
listItem1.textContent = "List Item 1";
let listItem2 = document.createElement("li")
listItem2.textContent = "List Item 2";

list.appendChild(listItem);
list.appendChild(listItem1);
list.appendChild(listItem2);

// removing the element from the DOM
list.remove()

