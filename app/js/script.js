let hambg = document.getElementById("hambgbtn");
let ovl = document.getElementById("ovl");
let popup = document.getElementById("popupmenu");
popup.style.display = "none";
ovl.style.display = "none";
let hambgClicked = false;

hambgbtn.addEventListener("click", function () {
  if (!this.classList.contains("open")) this.classList.add("open");
  else this.classList.remove("open");

  if (hambgClicked === false) {
    // keep track of state and change state
    hambgClicked = true;

    // add fade in effect for overlay
    ovl.classList.add("fade-in");
    ovl.classList.remove("fade-out");
    ovl.style.display = "block";
    ovl.style.opacity = 1;
    ovl.style.zIndex = 1;

    // prevent body from scrolling
    document.body.style.height = "100%";
    document.body.style.overflowY = "hidden";

    // show pop up menu
    popup.classList.add("fade-in");
    popup.classList.remove("fade-out");
    popup.style.display = "block";
    popup.style.zIndex = 2;
  } else {
    // keep track of state and change state
    hambgClicked = false;

    // // add fade out effect for overlay
    ovl.classList.add("fade-out");
    ovl.classList.remove("fade-in");
    ovl.style.display = "none";
    ovl.style.opacity = 0;

    // allow body scrolling
    document.body.style.height = "";
    document.body.style.overflowY = "";

    // hide pop up menu
    popup.classList.add("fade-out");
    popup.classList.remove("fade-in");
    setTimeout(() => {
      popup.style.display = "none";
    }, 200);
  }
});
