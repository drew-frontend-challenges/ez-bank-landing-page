let hambg = document.getElementById("hambgbtn");
let ovl = document.getElementById("ovl");
ovl.style.display = "none";
hambgbtn.addEventListener("click", function () {
  if (!this.classList.contains("open")) this.classList.add("open");
  else this.classList.remove("open");

  if (ovl.style.display == "none") ovl.style.display = "block";
  else ovl.style.display = "none";
});
