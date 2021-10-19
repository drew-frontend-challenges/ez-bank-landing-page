let hambg = document.getElementById("hambgbtn");
let ovl = document.getElementById("ovl");
let hambgClicked = false;
hambgbtn.addEventListener("click", function () {
  if (!this.classList.contains("open")) this.classList.add("open");
  else this.classList.remove("open");

  if (hambgClicked === false) {
    hambgClicked = true;
    ovl.classList.add("fade-in");
    ovl.classList.remove("fade-out");
    ovl.style.opacity = 1;
  } else {
    hambgClicked = false;
    ovl.classList.add("fade-out");
    ovl.classList.remove("fade-in");
    ovl.style.opacity = 0;
  }
});
