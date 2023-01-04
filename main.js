let body = document.querySelector("body");
let bodyTop = document.querySelector(".bgtop");
let checkbox = document.querySelector("#swap-btn");
let followersCard = document.querySelectorAll("div.followers");
let overViewCard = document.querySelectorAll(".overview-card");
let h2Text = document.querySelector("h2");
let pText = document.querySelectorAll("p");
let swapText = document.querySelector(".swap");
let linkText = document.querySelectorAll("a");

console.log(bodyTop);
function dark() {
  if (checkbox.checked == true) {
    body.style.cssText = "background-color: var(--Very-Dark-Blue-BG); color: var(--White-Text)";
    bodyTop.style.cssText = "background-color: var(--Very-Dark-Blue-Top-BG-Pattern);";
    for (let i = 0; i < followersCard.length; i++) {
      followersCard[i].style.cssText = "background-color: var(--Dark-Desaturated-Blue-Card-BG);";
      followersCard[i].classList.add("dark");
    }
    for (let i = 0; i < overViewCard.length; i++) {
      overViewCard[i].style.cssText = "background-color: var(--Dark-Desaturated-Blue-Card-BG);";
      overViewCard[i].classList.add("dark");
    }
    h2Text.style.cssText = "color: var(--White-Text)";
    for (let i = 0; i < pText.length; i++) {
      pText[i].style.cssText = "color: var(--Desaturated-Blue-Text);";
    }
    swapText.style.cssText = "color: var(--White-Text)";
    for (let i = 0; i < linkText.length; i++) {
      linkText[i].style.cssText = "color: var(--text-up-Lime-Green)";
    }


  } else {
    body.style.cssText = "";
    bodyTop.style.cssText = "";
    for (let i = 0; i < followersCard.length; i++) {
      followersCard[i].style.cssText = "";
      followersCard[i].classList.remove("dark");
    }
    for (let i = 0; i < overViewCard.length; i++) {
      overViewCard[i].style.cssText = "";
      overViewCard[i].classList.remove("dark");
    }
    h2Text.style.cssText = "";
    for (let i = 0; i < pText.length; i++) {
      pText[i].style.cssText = "";
    }
    swapText.style.cssText = "";
    for (let i = 0; i < linkText.length; i++) {
      linkText[i].style.cssText = "";
    }
  }
}