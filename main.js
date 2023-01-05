let body = document.querySelector("body");
let checkbox = document.querySelector("input#swap-btn");

function dark() {
  if (checkbox.checked == true) {
    body.classList.add("dark-theme");
  } else {
    if (body.classList.contains("dark-theme")) {
      body.classList.remove("dark-theme");
    }
  }
}