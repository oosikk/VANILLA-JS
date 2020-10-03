// const title = document.getElementById("title");
const title = document.querySelector("#title");

function handleResize(event) {
  console.log("I have been resized");
  console.log(event);
}
window.addEventListener("resize", handleResize);

function handleClick() {
  title.style.color = "blue";
}
title.addEventListener("click", handleClick);

if (20 > 5 && "nico" === "neco") {
  console.log("yes");
} else {
  console.log("no");
}

const age = prompt("How old are you");

if (age >= 18 && age < 21) {
  console.log("You can drink but you should not");
} else {
  console.log("you cnat");
}
